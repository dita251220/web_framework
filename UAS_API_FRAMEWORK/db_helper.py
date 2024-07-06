import os
from mysql.connector.pooling import MySQLConnectionPool

# Mendapatkan konfigurasi dari environment variables
DB_HOST = os.environ.get('DB_HOST')
DB_NAME = os.environ.get('DB_NAME')
DB_USER = os.environ.get('DB_USER')
DB_PASSWORD = os.environ.get('DB_PASSWORD')
DB_POOLNAME = os.environ.get('DB_POOLNAME')
POOL_SIZE = int(os.environ.get('POOL_SIZE'))

# Membuat pool koneksi ke database
db_pool = MySQLConnectionPool(
    host=DB_HOST,
    user=DB_USER,
    password=DB_PASSWORD,
    database=DB_NAME,
    pool_size=POOL_SIZE,  # Menentukan ukuran pool koneksi
    pool_name=DB_POOLNAME
)

def get_connection():
    """
    Mendapatkan koneksi dari pool koneksi
    """
    connection = db_pool.get_connection()
    connection.autocommit = True
    return connection
