// app/api/login/route.ts

import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { generateToken } from '@/lib/jwt';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email et mot de passe requis.' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await compare(password, user.password))) {
      return NextResponse.json({ error: 'Identifiants invalides.' }, { status: 401 });
    }

    // Génération d'un token JWT (tu peux adapter la clé et l'expiration)
    const token = generateToken({ id: user.id.toString(), email: user.email});

    // Stockage du token dans un cookie sécurisé
    (await
      // Stockage du token dans un cookie sécurisé
      cookies()).set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 jours
    });

    return NextResponse.json({ message: 'Connexion réussie.' }, { status: 200 });
  } catch (error) {
    console.error('[LOGIN_ERROR]', error);
    return NextResponse.json({ error: 'Erreur serveur. Réessayez plus tard.' }, { status: 500 });
  }
}
