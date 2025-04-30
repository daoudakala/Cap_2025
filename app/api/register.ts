import { hash } from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password, name } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email et mot de passe requis.' });
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ error: 'Cet email est déjà utilisé.' });
  }

  const hashedPassword = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  res.status(201).json({ message: 'Utilisateur créé avec succès.', userId: user.id });
}
/*
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) return res.status(400).json({ error: 'Utilisateur existe déjà' });

  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.user.create({ data: { email, password: hashedPassword } });

  return res.status(201).json({ message: 'Utilisateur créé' });
}
*/