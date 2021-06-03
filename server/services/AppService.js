const Section = require('../models/Section');
const { transactionWrapper } = require('./BaseService');

exports.getHeaderMenu = async () => {
    return transactionWrapper((session) => {
        return Section.aggregate([
            {
                $match: {
                    active: true
                }
            },
            {
                $unwind: '$categoryGroups'
            },
            {
                $lookup: {
                    from: 'categories',
                    let: { categoryIds: '$categoryGroups.list' },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $in: [ '$_id', '$$categoryIds' ] },
                                        { $eq: [ '$active', true ] }
                                    ]
                                }
                            }
                        }
                    ],
                    as: 'categoryGroups.list'
                }
            },
            {
                $group: {
                    _id: '$_id',
                    root: { $mergeObjects: '$$ROOT' },
                    submenu: {
                        $push: {
                            name: '$categoryGroups.name',
                            list: '$categoryGroups.list'
                        }
                    }
                }
            },
            {
                $replaceRoot: {
                    newRoot: {
                        $mergeObjects: ['$root', '$$ROOT']
                    }
                }
            },
            {
                $sort: { name: 1 }
            },
            {
                $project: {
                    root: 0,
                    _id: 0,
                    list: 0,
                    categoryGroups: 0
                }
            },
        ]).session(session);
    })
}