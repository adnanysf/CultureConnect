from mongoengine import Document, StringField, IntField, ImageField
class Post(Document):
    date = StringField(required=True)
    timestamp = StringField(required=True)
    user = StringField(required=True)
    tags = StringField()
    title = StringField(required=True)
    text = StringField()
    image = ImageField()
    firm = StringField()
    likes = IntField()

    meta = {'collection': 'posts'}