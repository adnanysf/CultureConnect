from database import retrieveUserProfile

def _stripMongoDBId( mongoDBEntryData ):
    del mongoDBEntryData['_id']

    return mongoDBEntryData

def getUserProfile( sid ):
    print('Retrieving User Profile For User : {}'.format(sid))
    user = retrieveUserProfile( sid = sid )
    
    response = {"userData" : _stripMongoDBId( user )}
    return response
