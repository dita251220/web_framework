from flask import Flask
from flask_cors import CORS
from endpoints.login import login_blueprint
from endpoints.sign_up import register_blueprint
from endpoints.add import add_blueprint
from endpoints.alat_musik import alat_musik_blueprint
from endpoints.user import user_blueprint


app = Flask(__name__)
CORS(app)

# Registrasi blueprint login
app.register_blueprint(login_blueprint, url_prefix='/login')

# Registrasi blueprint sign up
app.register_blueprint(register_blueprint, url_prefix='/register')

# Registrasi blueprint add
app.register_blueprint(add_blueprint, url_prefix='/music')

app.register_blueprint(alat_musik_blueprint, url_prefix='/read')

app.register_blueprint(user_blueprint, url_prefix='/read')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
