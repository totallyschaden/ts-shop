const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { cart } = req.body;
            const origin = req.headers.origin || 'http://localhost:5173'; // Fallback for local testing

            const line_items = cart.map((item) => {
                return {
                    price_data: {
                        currency: 'chf',
                        product_data: {
                            name: item.title,
                            images: item.image ? [item.image] : [],
                        },
                        unit_amount: Math.round(item.price * 100),
                    },
                    quantity: item.quantity,
                };
            });

            const session = await stripe.checkout.sessions.create({
                line_items,
                mode: 'payment',
                shipping_address_collection: {
                    allowed_countries: ['CH', 'DE', 'AT', 'LI', 'FR', 'IT'],
                },
                success_url: `${origin}/success`,
                cancel_url: `${origin}/cancel`,
            });

            res.status(200).json({ url: session.url });
        } catch (err) {
            console.error(err);
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
};
