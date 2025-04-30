/* import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from '@/lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email et mot de passe requis.' });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(401).json({ error: 'Email ou mot de passe invalide.' });
  }

  const isValid = await compare(password, user.password);

  if (!isValid) {
    return res.status(401).json({ error: 'Email ou mot de passe invalide.' });
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.status(200).json({ token });
}
 */

import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Identifiants invalides' });
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });

  res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=86400`);
  return res.status(200).json({ message: 'Connecté' });
}
