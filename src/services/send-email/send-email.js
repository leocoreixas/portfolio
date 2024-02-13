import nodemailer from 'nodemailer';

async function sendEmail(email, data) {
    debugger
    const contactEmail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "********@gmail.com",
          pass: ""
        },
      });

    const mailOptions = {
        from: email,
        to: email,
        subject: 'Oportunidade de emprego!',
        text: `Olá, Leonardo! ${data.message}`,
    };

    try {
        const info = await contactEmail.sendMail(mailOptions);
        return true
    } catch (error) {
        return false
    }
}


export default sendEmail;
