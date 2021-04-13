const sgMail = require('@sendgrid/mail');

const sendGridApiKey = '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';

sgMail.setApiKey(sendGridApiKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jubbal2021@gmail.com',
        subject: 'Thank for joining in!',
        text: `Welcome to the App, ${name}. Let us know how ypu get aling with the app.`
    })
}

const sendCancelEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'jubbal2021@gmail.com',
        subject:'Regarding Cancelling your account',
        text:`Please ensure ${name} tell us why you are leaving us!`
    })
}

module.exports = {
    sendWelcomeEmail: sendWelcomeEmail,
    sendCancelEmail
}