import express from 'express'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Get __dirname equivalent in ES Modules
const __dirname = dirname(fileURLToPath(import.meta.url))

// Serve static files from the Vite build directory
app.use(express.static(join(__dirname, '../dist')))

// Serve index.html for any routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist', 'index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
