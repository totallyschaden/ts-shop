const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }

    const { cart } = req.body;
    // Determine the domain: use the Origin header or default to the live site
    const DOMAIN = req.headers.origin || 'https://www.totallyschaden.ch';

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
            shipping_address_collection: {
                allowed_countries: ['CH', 'DE', 'AT', 'LI', 'FR', 'IT'],
            },
            success_url: `${DOMAIN}/success`,
            cancel_url: `${DOMAIN}/cancel`,
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creating session:', error);
        res.status(500).json({ error: error.message });
    }
};
