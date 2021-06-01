import mongoose from "mongoose";

exports.transactionWrapper = async func => {
    const session = await mongoose.startSession()
    await session.startTransaction();
    try {
        const response = await func(session)
        await session.commitTransaction()

        return response
    } catch (e) {
        console.log(e.message)
        await session.abortTransaction()
    } finally {
        await session.endSession()
    }
}