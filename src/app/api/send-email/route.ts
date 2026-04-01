import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    const { name, guestOf } = await req.json()

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })
    let emailTo = ""

    if (guestOf == 'groom') {
        emailTo = "huyendotrung1210@gmail.com"
    }

    if (guestOf == 'bride') {
        emailTo = "phuongnguyenntp221102@gmail.com"
    }

    try {

        // Send the email
        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: emailTo,
            subject: `${name} - Xác nhận tham dự tiệc cưới`,
            text: `
        Tên khách: ${name}
      `,
            html: `
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { text-align: center; margin-bottom: 20px; }
              .content { background-color: #f9f9f9; padding: 20px; border-radius: 5px; }
              h1 { color: #FF4D6D; }
              .divider { border-top: 2px solid #FF4D6D; margin: 20px 0; }
              .footer { text-align: center; margin-top: 20px; font-size: 0.9em; color: #777; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Xác Nhận Tham Dự Tiệc Cưới</h1>
              </div>
              <div class="content">
                <p><strong>Tên khách:</strong> <i class="text-primary"> ${name} </i> đã xác nhận tham gia tiệc cưới</p>
              </div>
              <div class="divider"></div>
              <div class="footer">
                <p>Đây là thông báo từ trang thiệp cưới online</p>
              </div>
            </div>
          </body>
        </html>
      `,
        })
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
    } catch (error) {
        console.error('Failed to send email:', error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
}
