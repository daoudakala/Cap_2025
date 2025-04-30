import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { prisma } from '@/lib/prisma'; // attention : pas de default export
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Un utilisateur avec cet email existe déjà.' }, { status: 409 });
    }

    const hashedPassword = await hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'Inscription réussie.' }, { status: 201 });
  } catch (error) {
    console.error('[REGISTER_ERROR]', error);
    return NextResponse.json({ error: 'Erreur serveur. Veuillez réessayer plus tard.' }, { status: 500 });
  }
}
