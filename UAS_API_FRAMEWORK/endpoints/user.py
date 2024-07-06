from flask import Blueprint, request, jsonify
import mysql.connector
import base64

user_blueprint = Blueprint('user', __name__)

@user_blueprint.route('user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    try:
        connection = connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database='bali_melody_store'
        )
        cursor = connection.cursor(dictionary=True)
        query = "SELECT id_pengguna, nama, email, password, no_hp, foto FROM pengguna WHERE id_pengguna = %s"
        cursor.execute(query, (user_id,))
        user = cursor.fetchone()
        if  user and user['foto']:
             user['foto'] = base64.b64encode(user['foto']).decode('utf-8')
        return jsonify(user)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

