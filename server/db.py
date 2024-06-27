from pymongo import MongoClient

uri = "mongodb+srv://cluster0.li7cguh.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&appName=Cluster0"
client = MongoClient(uri,
                     tls=True,
                     tlsCertificateKeyFile='<path_to_certificate>',
                     server_api=ServerApi('1'))

db = client['testDB']
collection = db['testCol']

def get_db():
    return db