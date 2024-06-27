from pymongo import MongoClient

uri = "mongodb+srv://cluster0.li7cguh.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&appName=Cluster0"
client = MongoClient(uri,
                     tls=True,
                     tlsCertificateKeyFile='../x509',
                     server_api=ServerApi('1'))

db = client['development']

def init_db():
    global db
    db = client['development']

def get_db():
    return db