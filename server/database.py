from pymongo import MongoClient


def connectToDB():
    uri = "mongodb+srv://cluster0.li7cguh.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&appName=Cluster0"
    client = MongoClient(uri,
                        tls=True,
                        tlsCertificateKeyFile='./mongoDB_Cert/X509-cert-8234562306763361369.pem',
                        )
    return client


def closeDB( client ):
    client.close()
    return




""" Create databases """
def createUsers():
    client = connectToDB()

    db = client['userDB']

    #Add test user

    test_user = {
        'Name': 'Test User1',
        'Location': 'Houston',
        'Position': 'Software Developer',
        'SID': 'a123456',
        'Email': 'test.user@jpmchase.com',
        'Bio': 'Experienced software developer...',
        'Likes': 0,  # List to store IDs of liked posts
        'Favorites': [],  # List to store IDs of favorite items
        'OtherData': {},
    }

    result = db.userDB.insert_one(test_user)

    print("Inserted user in userDB")

    closeDB( client )


