from flask import Blueprint, jsonify, request
import mysql.connector
import base64

alat_musik_blueprint = Blueprint('alat_musik', __name__)

@alat_musik_blueprint.route('/alat', methods=['GET'])
def get_instruments():
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database='bali_melody_store'
        )
        cursor = connection.cursor()
        cursor.execute("SELECT nama_alat_musik, harga, gambar FROM alat_musik")
        rows = cursor.fetchall()
        cursor.close()
        connection.close()

        # Prepare list to store instruments
        alat_musik_list = []

        for row in rows:
            nama_alat_musik = row[0]
            harga = row[1]
            gambar_blob = row[2]

            formatted_harga = '{:,.0f}'.format(harga).replace(',', '.')

            # Check if gambar_blob is not None and is a valid blob
            if gambar_blob:
                # Encode the blob to base64
                gambar_base64 = base64.b64encode(gambar_blob).decode('utf-8')
            else:
                gambar_base64 = None

            # Create dictionary for each instrument
            alat_musik = {
                "nama_alat_musik": nama_alat_musik,
                "harga": formatted_harga,
                "gambar": gambar_base64
            }

            # Append instrument dictionary to list
            alat_musik_list.append(alat_musik)

        return jsonify(alat_musik_list)

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    


@alat_musik_blueprint.route('/alat/<int:id>', methods=['GET'])
def get_instrument_by_id(id):
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database='bali_melody_store'
        )
        cursor = connection.cursor()

        cursor.execute("SELECT nama_alat_musik, harga, deskripsi, gambar FROM alat_musik WHERE id_alat_musik = %s", (id,))
        result = cursor.fetchone()
        cursor.close()
        connection.close()

        if result:
            nama_alat_musik = result[0]
            harga = result[1]
            deskripsi = result[2]
            gambar_blob = result[3]

            # Check if gambar_blob is not None and is a valid blob
            if gambar_blob:
                # Encode the blob to base64
                gambar_base64 = base64.b64encode(gambar_blob).decode('utf-8')
            else:
                gambar_base64 = None

            alat_musik = {
                "nama_alat_musik": nama_alat_musik,
                "harga": harga,
                "deskripsi": deskripsi,
                "gambar": gambar_base64
            }

            return jsonify(alat_musik)
        else:
            return jsonify({"error": f"Alat musik dengan ID {id} tidak ditemukan"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500
