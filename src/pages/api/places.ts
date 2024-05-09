import { NextApiRequest, NextApiResponse } from 'next';

import Place from '@services/models/Place';
import connectToDatabase from '@services/mongodb';

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const place = new Place(req.body);
    await place.save();
    res.status(201).json(place);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const places = await Place.find({});
    res.status(200).json(places);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

const methodHandlers: {
  [key: string]: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
} = {
  POST: handlePost,
  GET: handleGet,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  const handle = methodHandlers[req.method as string];
  if (handle) {
    await handle(req, res).catch(() => {
      res.status(500).json({ success: false, error: 'Internal server error' });
    });
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
