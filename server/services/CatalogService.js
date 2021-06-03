const Product = require('../models/Product');

exports.search = async ({ section, category, filters, pagination, sortBy }) => {
    const matches = []
    const pipelines = [
        {
            $lookup: {
                from: 'sections',
                localField: 'section',
                foreignField: '_id',
                as: 'sections'
            },
        },
        {
            $lookup: {
                from: 'categories',
                localField: 'categories',
                foreignField: '_id',
                as: 'categories'
            },
        },
        {
            $lookup: {
                from: 'filters',
                localField: 'filters',
                foreignField: '_id',
                as: 'filters'
            },
        },
        {
            $addFields: {
                section: { $arrayElemAt: [ '$sections', 0 ] }
            }
        },
        {
            $set: {
                section: '$section.name'
            }
        }
    ];

    filters.forEach(filter => {
        switch (filter.type) {
            case 'LIKE':
                filter.value && matches.push({ [filter.name]: new RegExp(filter.value) });
                break;
            case 'OR':
                filter.value && matches.push({ $or: filter.value.map(item => ({ [filter.name]: item })) });
                break;
            default: break;
        }
    })

    if (matches.length) {
        pipelines.push({
            $match: {
                $and: matches
            }
        });
    }

    if (pagination) {
        pipelines.push({
            $skip: (pagination.page - 1) * pagination.limit
        });
        pipelines.push({
            $limit: pagination.limit
        });
    }

    switch (sortBy) {
        case 2:
            pipelines.push({ $sort: { createdAt: -1 } });
            break;
        case 3:
            pipelines.push({ $sort: { price: 1 } });
            break;
        case 4:
            pipelines.push({ $sort: { price: -1 } });
            break;
        default: break;
    }

    const products = await Product.aggregate([
        {
            $facet: {
                products: pipelines,
                count: [
                    {
                        $count: 'count'
                    }
                ]
            }
        },
        {
            $project: {
                products: '$products',
                total: {$arrayElemAt: ['$count.count', 0]}
            }
        },
        {
            $project: {
                'products.sections': 0
            }
        }
    ]);

    return products[0];
}