// app/api/logout/route.ts

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  // Supprime le cookie "token"
  (await
    // Supprime le cookie "token"
    cookies()).set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  });

  return NextResponse.json({ message: 'Déconnexion réussie.' }, { status: 200 });
}
