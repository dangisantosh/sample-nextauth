import jwt from 'jsonwebtoken';
import { jwtPvtKey } from '../../config';

export default async (req, res) => {
  if (req.method === 'POST') {
    // Assuming you're receiving the loggerEmail as a POST request body parameter
    const { loggerEmail } = req.body;

    if (!loggerEmail) {
      return res.status(400).json({ error: 'Missing loggerEmail' });
    }

    // Create the JWT token
    const dataInToken = {
      createdAt: new Date().valueOf(),
      loggerEmail,
    };
    const signedToken = jwt.sign(dataInToken, jwtPvtKey);

    // Set the token as an HTTP cookie
    res.setHeader('Set-Cookie', `token=${signedToken}; HttpOnly; Secure; SameSite=Strict`);
    return res.status(200).json({ token: signedToken });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};
