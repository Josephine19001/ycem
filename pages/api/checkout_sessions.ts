import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      try {
        const session = await stripe.checkout.sessions.create({
          ui_mode: 'embedded',
          line_items: [
            {
              price: '{{PRICE_ID}}',
              quantity: 1
            }
          ],
          mode: 'payment',
          return_url: `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`
        });

        res.send({ clientSecret: session.client_secret });
      } catch (err: any) {
        res.status(err.statusCode || 500).json({ message: err.message });
      }
      break;
    case 'GET':
      try {
        const session = await stripe.checkout.sessions.retrieve(
          req.query.session_id as string
        );

        res.send({
          status: session.status,
          customer_email: session.customer_details?.email
        });
      } catch (err: any) {
        res.status(err.statusCode || 500).json({ message: err.message });
      }
      break;
    default:
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end('Method Not Allowed');
  }
}
