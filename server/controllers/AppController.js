const AppService = require('../services/AppService');

exports.getHeaderMenu = async (req, res) => {
    try {
        const categories = await AppService.getHeaderMenu();

        res.status(200).json(categories);
    }
    catch (e) {
        res.status(500).json({ message: 'Server Error', error: e.message });
    }
}