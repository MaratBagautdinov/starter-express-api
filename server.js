import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
// Routes
import userRoutes from './routes/userRoutes.js'
import postsRoutes from './routes/postsRoutes.js'

dotenv.config()

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log(`MongoDB connected: ${process.env.MONGO_URI}`))
	.catch(err => console.log(`Error: ${err.message}`))
const app = express()


app.use(express.json())

app.use(cors())
app.use('/api/users', userRoutes)
app.use('/api/posts', postsRoutes)
const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
)
