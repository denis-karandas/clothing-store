const SectionService = require('../services/CommonService')

exports.getHeaderMenu = async (req, res) => {
    try {
        const categories = await SectionService.getHeaderMenu()

        res.status(200).json(categories)
    }
    catch (e) {
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}