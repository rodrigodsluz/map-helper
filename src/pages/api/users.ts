import { NextApiRequest, NextApiResponse } from 'next';

import User from '@services/models/User';
import connectToDatabase from '@services/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
