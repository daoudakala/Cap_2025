import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret'; // à sécuriser en prod

// Générer un token
export function generateToken(user: { id: string; email: string  }) {
  return jwt.sign({ userId: user.id, email: user.email  }, JWT_SECRET, {
    expiresIn: '1h',
  });
}

// Vérifier un token
export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
