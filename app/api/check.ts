// /pages/api/auth/check.ts
/* import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Non autorisé" });
  }

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, JWT_SECRET);
    return res.status(200).json({ message: "Authentifié" });
  } catch {
    return res.status(401).json({ error: "Token invalide" });
  }
} */
  import { NextApiRequest, NextApiResponse } from 'next';
  import jwt from 'jsonwebtoken';
  
  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: 'Non authentifié' });
  
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      return res.status(200).json({ message: 'Authentifié' });
    } catch {
      return res.status(401).json({ error: 'Token invalide' });
    }
  }
  