import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ message: "Email is required" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, 
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,  
      subject: "New Contact Form Submission",
      html: `<p>New email from: ${email}</p>`,
    });

    // Email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,  
      subject: "Thanks for contacting us!",
      html: `<p>Hey! We got your email and will get back to you soon.</p>`,
    });

    return new Response(JSON.stringify({ message: "Emails sent successfully!" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: err.message || "Server error" }), { status: 500 });
  }
}