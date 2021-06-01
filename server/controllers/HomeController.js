const Product = require('../models/Product')


exports.getWidgetProducts = async (req, res) => {
    try {
        const categoryName = req.query.name
        const widgetQuantity = 4
        let products = await Product.find().limit(widgetQuantity)

        res.json(products)
    } catch (e) {
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}