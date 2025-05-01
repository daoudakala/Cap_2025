// app/api/register/route.ts

import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    console.log("Requête d'inscription reçue :", body);

    // Validation des champs
    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
    }

    // Vérification de l'existence de l'utilisateur
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'Un utilisateur avec cet email existe déjà.' }, { status: 409 });
    }

    // Hachage du mot de passe
    const hashedPassword = await hash(password, 10);

    // Création de l'utilisateur
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'Inscription réussie.', userId: newUser.id }, { status: 201 });
  } catch (error) {
    console.error('[REGISTER_ERROR]', error);
    return NextResponse.json({ error: 'Erreur serveur. Veuillez réessayer plus tard.' }, { status: 500 });
  }
}
