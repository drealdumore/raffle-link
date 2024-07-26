// import { NextRequest, NextResponse } from 'next/server';
// import { connectMongoDB } from '../../../lib/mongodb';
// import { Raffle } from '../../../models/Raffle';
// import sgMail from '@sendgrid/mail';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// export const POST = async (req: NextRequest) => {
//   try {
//     await connectMongoDB();

//     const { raffleId } = await req.json();

//     if (!raffleId) {
//       return new NextResponse('Raffle ID is required', { status: 400 });
//     }

//     const raffle = await Raffle.findById(raffleId);
//     if (!raffle) return new NextResponse('Raffle not found', { status: 404 });

//     if (raffle.participants.length === 0) {
//       return new NextResponse('No participants to choose from', { status: 400 });
//     }

//     const winner = raffle.participants[Math.floor(Math.random() * raffle.participants.length)];

//     const msg = {
//       to: winner.email,
//       from: 'raffles@example.com',
//       subject: 'Congratulations!',
//       text: `You have won the raffle: ${raffle.title}`,
//       html: `<p>Congratulations! You have won the raffle: <strong>${raffle.title}</strong></p>`,
//     };
//     await sgMail.send(msg);

//     return NextResponse.json({ message: 'Winner chosen and notified' }, { status: 200 });
//   } catch (err) {
//     console.log('[raffles_pick_winner_POST]', err);
//     return new NextResponse('Internal Error', { status: 500 });
//   }
// };
