from flask import Blueprint, request, jsonify
import mysql.connector


add_blueprint = Blueprint('add', __name__)

@add_blueprint.route('/add', methods=['POST'])
def add_music():
    data = request.form
    id_kategori = data.get('id_kategori')
    harga = data.get('harga')
    nama_alat_musik = data.get('nama_alat_musik')
    deskripsi = data.get('deskripsi')
    stok = data.get('stok')
    gambar = request.files['gambar'].read()

    # Koneksi ke database dan menambahkan data
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database='bali_melody_store'
        )
        cursor = connection.cursor()
        query = """
            INSERT INTO alat_musik (nama_alat_musik, deskripsi, harga, stok, gambar, id_kategori)
            VALUES (%s, %s, %s, %s, %s, %s)
        """
        cursor.execute(query, (nama_alat_musik, deskripsi, harga, stok, gambar, id_kategori))
        connection.commit()
        cursor.close()
        connection.close()
        return jsonify({'message': 'Alat musik berhasil ditambahkan'}), 200
    except mysql.connector.Error as err:
        return jsonify({'error': str(err)}), 500
