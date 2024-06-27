from database import retrieveUserProfile, incrementLikeCountForUser, decrementLikeCountForUser

def _stripMongoDBId( mongoDBEntryData ):
    del mongoDBEntryData['_id']

    return mongoDBEntryData

def getUserProfile( sid ):
    print('Retrieving User Profile For User : {}'.format(sid))
    user = retrieveUserProfile( sid = sid )
    if user:
        response = {"userData" : _stripMongoDBId( user )}
    else:
        response = {"userData": {}}
    return response

def incrementLike( sid ):
    print('Incrementing User Like Count For User : {}'.format(sid))
    resp = incrementLikeCountForUser( sid = sid )
    return resp

def decrementLike( sid ):
    print('Decrementing User Like Count For User : {}'.format(sid))
    resp = decrementLikeCountForUser( sid = sid )
    return resp
