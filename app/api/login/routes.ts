import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';
import type { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_à_changer_en_prod';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email et mot de passe requis.' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé.' }, { status: 401 });
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json({ error: 'Mot de passe incorrect.' }, { status: 401 });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const response = NextResponse.json({ message: 'Connexion réussie' });

    response.cookies.set('token', token, {
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 jours
    });

    return response;
  } catch (error) {
    console.error('[LOGIN_ERROR]', error);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
