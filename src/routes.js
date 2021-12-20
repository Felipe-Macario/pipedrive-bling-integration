const express = require('express');
const router = express.Router();

const DealController = require('./controller/DealController');
const OrderController = require('./controller/OrderController');

router.get('/deals', async function(req, res, next) {
    try {
        const params = { };

        if(req.query.status) {
            if (req.query.status === "open" || req.query.status === "won" || req.query.status === "lost"){
                params["status"] = req.query.status;
            }
		}

        if(req.query.limit) {
			params["limit"] = req.query.limit;
		}

        if(req.query.start) {
			params["start"] = req.query.start;
		}

        const dealController = new DealController();
        const deals = await dealController.getDeal(params);
        res.status(200).json(deals);
	} catch (e) {
		next(e);
	}
});

router.get('/orders', async function(req, res, next) {
    try {
        const orderController = new OrderController();
        const orders = await orderController.GetOrder();

        return res.status(200).json(orders);
    } catch (e) {
        next(e);
    }
});

router.get('/orders/integration', async function(req, res, next) {
    try {
        const orderController = new OrderController();
        await orderController.CreateOrderIntegration();

        const number = 0;

        return res.status(201).json({ message: `The number of ${number} new orders have been created with success.` });
    } catch (e) {
        next(e);
    }
});

module.exports = router;