require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

const DOMAIN = 'http://192.168.1.107:5173'; // Frontend URL (Local IP)

app.post('/create-checkout-session', async (req, res) => {
    const { cart } = req.body;

    try {
        const line_items = cart.map((item) => {
            return {
                price_data: {
                    currency: 'chf',
                    product_data: {
                        name: item.title,
                        images: item.image ? [item.image] : [],
                    },
                    unit_amount: Math.round(item.price * 100), // Stripe expects cents
                },
                quantity: item.quantity,
            };
        });

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${DOMAIN}/success`,
            cancel_url: `${DOMAIN}/cancel`,
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creating session:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(4242, () => console.log('Running on port 4242'));
