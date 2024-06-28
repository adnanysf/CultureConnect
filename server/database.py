from pymongo import MongoClient
import datetime

def connectToDB():
    uri = "mongodb+srv://cluster0.li7cguh.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&appName=Cluster0"
    client = MongoClient(uri,
                        tls=True,
                        tlsCertificateKeyFile='./mongoDB_Cert/X509-cert-8234562306763361369.pem',
                        tlsAllowInvalidCertificates=True
                        )
    return client
#connect(db='mydb', host='mongodb+srv://username:password@cluster0.mongodb.net/test?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true')

def closeDB( client ):
    client.close()
    return


def retrieveUserProfile( sid ):
    client = connectToDB()
    db = client['development']

    user = db.users.find_one({"SID":  sid})

    closeDB( client )
    return user

def addLikedPostToUser( sid, pid ):
    client = None
    try:

        client = connectToDB()
        db = client['development']

        db.users.update_one({ "SID": sid },{ "$addToSet": { "Likes": pid } })

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

        db.users.update_one({ "SID": sid },{ "$addToSet": { "Favorites": pid } })

        closeDB( client )

        return {"status": "Success"}

    except Exception as e:
        if client:
            closeDB( client )
        
        return {"status": "Failed"}

def getCalendarYear(year):
    client = None
    try:

        client = connectToDB()
        db = client['development']

        calendarObj = db.calendars.find_one({ "Year": year })

        closeDB( client )

        return {"status": "Success", "calendarObj" : calendarObj}

    except Exception as e:

        print(e)
        if client:
            closeDB( client )
        
        return {"status": "Failed"}

def makeUserPost( sid, tags, title, text, image, firm ):
    client = None
    try:
        client = connectToDB()

        db = client['development']

        userPost = {
            "date" : datetime.date.today().strftime('%Y-%m-%d'),
            "timestamp" : datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            "user" : sid,
            "tags" : tags,
            "title" : title,
            "text" : text,
            "image" : image,
            "firm" : firm,
            "likes" : 0,
            "meta" : {'collection': 'posts'}
        }

        result = db.posts.insert_one(userPost)

        print("Created User post")

        closeDB( client )

        return {"status": "Success"}

    except Exception as e:
        print(e)
        if client:
            closeDB( client )
        
        return {"status": "Failed"}

""" Create databases """
def createUsers():
    client = connectToDB()

    db = client['development']
    #Add test user

    test_user = {
        'Name': 'Test User1',
        'Location': 'Houston',
        'Position': 'Software Developer',
        'SID': 'a987654',
        'Email': 'test.user@jpmchase.com',
        'Bio': 'Experienced software developer...',
        'Likes': [],  
        'Favorites': [],  
        'OtherData': {},
    }

    result = db.users.insert_one(test_user)

    print("Inserted user in userDB")

    closeDB( client )

def createCalendars():
    client = connectToDB()

    db = client['development']
    #Add test calendar

    test_calendar = {
        'Year': '2024_TEST',
        'Holidays': {
            "2024-01-01": {"New Year's Day": "Celebration of the first day of the Gregorian new year"},
            "2024-02-14": {"Valentine's Day": "A day celebrating romance and love in many regions of the world"},
            "2024-03-17": {"St. Patrick's Day": "A cultural and religious celebration held on the traditional death date of Saint Patrick, Ireland's patron saint"},
            "2024-04-01": {"April Fool's Day": "A day celebrated by playing practical jokes and spreading hoaxes"},
            "2024-05-01": {"International Workers' Day": "A celebration of laborers and the working classes, promoted by the international labor movement"},
            "2024-07-04": {"Independence Day (USA)": "A federal holiday in the United States commemorating the Declaration of Independence of the United States, on July 4, 1776"},
            "2024-10-31": {"Halloween": "Celebration observed in many countries on October 31, dedicated to remembering the dead, including saints (hallows), martyrs, and all the faithful departed"},
            "2024-12-25": {"Christmas Day": "An annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world"},
            "2024-12-31": {"New Year's Eve": "The final day of the Gregorian year, and the day before New Year's Day"},
            "2024-10-03": {"German Unity Day": "National day in Germany, commemorating the anniversary of German reunification in 1990"},
            "2024-11-28": {"Thanksgiving (USA)": "A national holiday in the United States celebrated on the fourth Thursday of November. It originated as a harvest festival"},
            "2024-04-22": {"Easter Sunday": "A Christian holiday celebrating the resurrection of Jesus from the dead, observed on the first Sunday after the first full moon following the vernal equinox"},
            "2024-10-12": {"Diwali": "A major Hindu festival celebrated every year in autumn in the northern hemisphere (spring in southern hemisphere)"},
            "2024-10-15": {"Eid al-Fitr": "A significant Islamic holiday that marks the end of Ramadan, the holy month of fasting"}
        },
        'OtherData': {},
    }

    result = db.calendars.insert_one(test_calendar)

    print("Inserted calendar into calendars DB")

    closeDB( client )