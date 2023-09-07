import os
from dotenv import load_dotenv

from flask import Flask, render_template, request, flash
from forms import ContactMeForm
from flask_mail import Mail, Message
from flask_compress import Compress


load_dotenv()

app = Flask(__name__)
Compress(app)

app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_TLS"] = False
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_USERNAME"] = 'gmacfarquhar57@gmail.com'
app.config["MAIL_PASSWORD"] = os.environ.get("EMAIL_PWD")
app.config["RECAPTCHA_USE_SSL"] = False
app.config["RECAPTCHA_PUBLIC_KEY"] = os.environ.get("RECAPTCHA_PUBLIC_KEY")
app.config["RECAPTCHA_PRIVATE_KEY"] = os.environ.get("RECAPTCHA_PRIVATE_KEY")
app.config["RECAPTCHA_OPTIONS"] = {'theme':'white'}

mail = Mail(app)

@app.route('/', methods=['GET', 'POST'])
def handle_contact_form():
    """Handle the contact form."""

    form = ContactMeForm()

    if request.method == 'POST':

        if not form.validate():
            flash('Oops! Something\'s not quite right with your submission.')
            return render_template('index.html', form=form)
        else:
            """Send Email."""
            msg = Message("Website Contact Form",
                       recipients=["gmacfarquhar57@gmail.com"],
                       sender=(form.name.data, form.email.data))
            msg.body = f"Name: {form.name.data} \n Email: {form.email.data} \n Message: {form.message.data}"
            mail.send(msg)
            name = form.name.data

            """Reset form after sending email."""
            form.name.data = ""
            form.email.data = ""
            form.message.data = ""
            return render_template('index.html', form=form, success=True, name=name)

    elif request.method == 'GET':
        return render_template('index.html', form=form)
