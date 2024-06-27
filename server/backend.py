from database import retrieveUserProfile

def getUserProfile( sid ):
    print('Retrieving User Profile For User : {}'.format(sid))
    user = retrieveUserProfile( sid = sid )
    print(user)
    return
