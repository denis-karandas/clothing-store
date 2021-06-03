const mongoose = require("mongoose");

exports.transactionWrapper = async func => {
    const session = await mongoose.startSession();
    await session.startTransaction();
    try {
        const response = await func(session);
        await session.commitTransaction();

        return response;
    } catch (e) {
        await session.abortTransaction();
    } finally {
        await session.endSession();
    }
}