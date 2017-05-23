token='EAACEdEose0cBAIZCZBg67ZAZCa5ZCwkYk36IyGrdclZCBHCnrA0COIMR8hgingPttmsCjA54fRijOMQ4TQi2oYFNKgN8YZC0nMtJZCpT5qD7fVW8EZAbHbZAxCFoFeuqKDdqoZAZCPMZBnu6w6V0zPzq9wpSBZBMJbhJ8L568Cw1O24AlRbEIogCJVIlcKRtQ2mForRCUZD'

graph = facebook.GraphAPI(token)

id = 1415756848664808

profile = graph.get_object("1415756848664808")

posts = graph.get_connections('1415756848664808','posts')['data']

for post in range(0,len(posts)):
    post_id = (posts[post]['id'])


graph.get_connections('1415756848664808','comments')

commnents_of_post = graph.get_connections(post_id','comments')['data']


for comment in range(0,len(commnents_of_post)):
    comment_id = (commnents_of_post[comment]['id'])

my_comment_of_user_comment = graph.get_connections(comment_id,'comments')['data']


my_comment[0]['from']
{'name': 'PK TIPS', 'category': 'Community', 'id': '1415756848664808'}
