const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
require('dotenv').config()
const passportJwtStrategy = require('./security/Passport')
const corsMiddleware = require('./middleware/CorsMiddleware')

const app = express()

app.use(corsMiddleware)
app.use(bodyParser.json())
app.use(passport.initialize())

app.use('/api/auth', require('./routes/AuthRoute'))
app.use('/api/common', require('./routes/CommonRoute'))
app.use('/api/section', require('./routes/SectionRoute'))
app.use('/api/category', require('./routes/CategoryRoute'))
app.use('/api/catalog', require('./routes/CatalogRoute'))

async function start() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => {
            passportJwtStrategy(passport)
            app.listen(process.env.PORT, () => console.log(`App has been started on port ${process.env.PORT}.`))
        })
    } catch(e) {
        console.log('Server error: ', e.message)
        process.exit(1)
    }
}

start()