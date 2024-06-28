from database import retrieveUserProfile, addLikedPostToUser, addFavoritePostToUser,getCalendarYear, makeUserPost

def _modifyIdToString( mongoDBEntryData ):
    mongoDBEntryData['_id'] = str(mongoDBEntryData['_id'])

    return mongoDBEntryData

def getUserProfile( sid ):
    print('Retrieving User Profile For User : {}'.format(sid))
    user = retrieveUserProfile( sid = sid )
    if user:
        response = {"userData" : _modifyIdToString( user )}
    else:
        response = {"userData": {}}
    return response

def likePostForUser(sid, pid):
    print('Adding Like For User : {}'.format(sid))
    resp = addLikedPostToUser( sid = sid, pid = pid)
    return resp

def favoritePostForUser(sid, pid):
    print('Adding Post to Favorites For User : {}'.format(sid))
    resp = addFavoritePostToUser( sid = sid, pid = pid)
    return resp

def getCalendar( year ):
    print('Retrieving Calendar for Year : {}'.format(year))
    resp = getCalendarYear( year = year )

    if "calendarObj" in resp and resp['calendarObj']:
        response = {"calendarData" : _modifyIdToString( resp['calendarObj'] )}
    else:
        response = {"calendarData": {}}
    return response

def createUserPost( sid, tags, title, text, image, firm ):
    print('Making a Post For User : {}'.format(sid))
    resp = makeUserPost( sid, tags, title, text, image, firm)
    return resp