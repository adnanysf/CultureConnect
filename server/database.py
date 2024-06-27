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


def retrieveUserProfile( sid ):
    client = connectToDB()
    db = client['development']
    collection = db['users']

    user = db.collection.find_one({"SID":  sid})

    closeDB( client )
    return user

def decrementLikeCountForUser( sid ):
    client = None
    try:
        client = connectToDB()
        db = client['development']
        collection = db['users']

        db.collection.update_one({ "SID": sid },{ "$inc": { "Likes": -1 } })

        closeDB( client )

        return {"status": "Success"}
    except Exception as e:
        print(e)
        if client:
            closeDB( client )
        
        return {"status": "Failed"}

def incrementLikeCountForUser( sid ):
    client = None
    try:
        client = connectToDB()
        db = client['development']
        collection = db['users']

        db.collection.update_one({ "SID": sid },{ "$inc": { "Likes": 1 } })

        closeDB( client )

        return {"status": "Success"}
    except Exception as e:
        if client:
            closeDB( client )
        
        return {"status": "Failed"}

def addFavoritePostToUser( sid, pid ):
    client = None
    try:

        client = connectToDB()
        db = client['development']
        collection = db['users']

        db.collection.update_one({ "SID": sid },{ "$addToSet": { "Favorites": pid } })

        closeDB( client )

        return {"status": "Success"}

    except Exception as e:
        if client:
            closeDB( client )
        
        return {"status": "Failed"}

""" Create databases """
def createUsers():
    client = connectToDB()

    db = client['development']
    collection = db['users']
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

    result = db.collection.insert_one(test_user)

    print("Inserted user in userDB")

    closeDB( client )