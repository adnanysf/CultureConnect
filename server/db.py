from pymongo import MongoClient
from pymongo.server_api import ServerApi
import os

uri = "mongodb+srv://cluster0.li7cguh.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&appName=Cluster0"
certificate_path = os.path.join(os.path.dirname(__file__), './mongoDB_Cert/X509-cert-8234562306763361369.pem')

client = MongoClient(uri,
                        tls=True,
                        tlsCertificateKeyFile='./mongoDB_Cert/X509-cert-8234562306763361369.pem',
                        tlsAllowInvalidCertificates=True
                        )

def init_db():
    global db
    db = client['development']

def get_db():
    return db