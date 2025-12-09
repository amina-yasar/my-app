import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Put your secret key in .env

// Create checkout session
export const createCheckoutSession = async (req, res) => {
    console.log("stripe");
  const { name, email, amount } = req.body;

  if (!name || !amount) {
    return res.status(400).json({ error: "Name and amount are required" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "pkr", // Pakistani Rupee
            product_data: {
              name: `Donation by ${name}`,
            },
            unit_amount: amount * 100, // Amount in paisa (smallest currency unit)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:5173/`,
      cancel_url: `http://localhost:5173/donat3`,
      customer_email: email,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message });
  }
};
