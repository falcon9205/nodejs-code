const jwt = require('jsonwebtoken');

const {JWT_Key} = require('../config')

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; // or req.get('Authorization')

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_Key);
    req.user = decoded; // Attach payload (like email, id, role)
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Forbidden: Invalid token' });
  }
};

module.exports = { authenticateToken };
