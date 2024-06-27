from database import retrieveUserProfile, incrementLikeCountForUser, decrementLikeCountForUser, addFavoritePostToUser,getCalendarYear

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

def favoritePostForUser(sid, pid):
    print('Adding Post to Favorites For User : {}'.format(sid))
    resp = addFavoritePostToUser( sid = sid, pid = pid)
    return resp


def getCalendar( year ):
    print('Retrieving Calendar for Year : {}'.format(year))
    resp = getCalendarYear( year = year )

    if "calendarObj" in resp and resp['calendarObj']:
        response = {"calendarData" : _stripMongoDBId( resp['calendarObj'] )}
    else:
        response = {"calendarData": {}}
    return response