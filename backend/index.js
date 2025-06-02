import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors({
  origin: 'https://portfoliohenri.onrender.com'
}))
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Champs manquants' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.DESTINATION_EMAIL,
      subject,
      text: message
    })
    res.status(200).json({ message: 'Message envoyé' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erreur d'envoi" })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
