const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const dotenv = require('dotenv')
const app = express();
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require("./routes/posts")
dotenv.config()

// Mongoose Connections String
mongoose.connect(process.env.MONGO_SECRET_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("mongoDB is Connected!")).catch(err => console.log(err));




// moddlewares
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('common'))

// Routes
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)


app.listen(8800, () => {
    console.log("backend listening")
})