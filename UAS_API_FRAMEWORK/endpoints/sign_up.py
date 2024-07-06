from flask import Blueprint, request, jsonify
import bcrypt
import mysql.connector
import logging

register_blueprint = Blueprint('register', __name__)

@register_blueprint.route('/create', methods=['POST'])
def register_route():
    try:
        data = request.get_json()
        nama = data.get('nama')
        email = data.get('email')
        password = data.get('password')

        logging.debug(f"Received registration request for email: {email}")

        # Validate input data
        if not nama or not email or not password:
            return jsonify({"error": "Missing data"}), 400

        # Hash the password
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        # Establish database connection
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',  # Isi dengan password database Anda jika ada
            database='bali_melody_store'
        )

        cursor = connection.cursor()

        # Check if the email already exists
        cursor.execute("SELECT * FROM pengguna WHERE email = %s", (email,))
        existing_user = cursor.fetchone()

        if existing_user:
            return jsonify({"error": "Email already registered"}), 400

        # Insert new user into the database
        insert_query = "INSERT INTO pengguna (nama, email, password) VALUES (%s, %s, %s)"
        cursor.execute(insert_query, (nama, email, hashed_password))
        connection.commit()

        cursor.close()
        connection.close()

        logging.debug("Registration successful")
        return jsonify({"message": "Registration successful"}), 201

    except Exception as e:
        logging.error(f"Error occurred during registration: {str(e)}")
        return jsonify({"message": str(e)}), 500
