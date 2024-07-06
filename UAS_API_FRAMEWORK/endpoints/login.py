from flask import Blueprint, request, jsonify
import bcrypt
import mysql.connector
import logging

login_blueprint = Blueprint('login', __name__)

@login_blueprint.route('/read', methods=['POST'])
def login_route():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        
        logging.debug(f"Received login request for email: {email}")

        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database='bali_melody_store'
        )
        
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM pengguna WHERE email = %s", (email,))
        user = cursor.fetchone()
        
        cursor.close()
        connection.close()

        if user and bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
            logging.debug("Login successful")
            # Menambahkan data nama dan email ke respons jika login berhasil
            response_data = {
                "message": "Login successful",
                "id_pengguna": user['id_pengguna'],
                "nama": user['nama'],
                "email": user['email'],
                "foto": user.get('foto', "/ellipse-255@2x.png")  # Jika 'foto' tidak ada, berikan nilai default
            }
            return jsonify(response_data), 200
        else:
            logging.debug("Invalid email or password")
            return jsonify({"message": "Invalid email or password"}), 401
    except Exception as e:
        logging.error(f"Error occurred: {str(e)}")
        return jsonify({"message": str(e)}), 500
