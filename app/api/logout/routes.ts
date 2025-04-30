import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(_req: NextRequest) {
  const response = NextResponse.json({ message: 'Déconnexion réussie' });

  response.cookies.set('token', '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0), // Supprime le cookie immédiatement
  });

  return response;
}
