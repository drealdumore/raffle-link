import { NextApiRequest, NextApiResponse } from 'next';

const joinRaffle = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, phoneNumber } = req.body;

  // Save user details to database or perform any other logic
  console.log('User joined raffle:', name, email, phoneNumber);

  res.status(201).json({ message: 'Joined raffle successfully' });
};

export default joinRaffle;