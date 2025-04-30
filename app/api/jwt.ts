import jwt from 'jsonwebtoken';

// Fonction pour générer un token JWT
export const generateToken = (user) => {
  return jwt.sign(
    { userId: user.id, email: user.email }, 
    process.env.JWT_SECRET, 
    { expiresIn: '1h' }  // Exemple d'expiration d'une heure
  );
};

// Fonction pour vérifier un token JWT
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};
