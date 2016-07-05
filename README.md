#instagramapi

## Synopsis
Uses Instagram api to get a user's recent media

## Code Example
See instagramapi.html

## Motivation
Sample code for using the Instagram api

## Instructions
1. Register your app:  https://www.instagram.com/developer/
2. Register your client:  https://www.instagram.com/developer/clients/register/
For redirect URI, specify http://localhost
Once complete you will be given a CLIENT-ID and CLIENT-SECRET
3. Get authorization. Type the following url in your browser.
https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=http://localhost&response_type=code

You will get a response similiar to the following where the returned CODE will be used to get the access_token.
http://localhost/?code=CODE

4. Get access_token. Execute the following curl command replacing your values for CLIENT-ID, CLIENT-SECRET, CODE

	  curl -F 'client_id=CLIENT-ID' \
	    -F 'client_secret=CLIENT-SECRET'' \
	    -F 'grant_type=authorization_code' \
	    -F 'redirect_uri=http://localhost' \
	    -F 'code=CODE' \
	    https://api.instagram.com/oauth/access_token
	   
You will receive a response similar to the following, where ACCESS-TOKEN is the token used in subsequent api calls

{"access_token": ACCESS-TOKEN, "user": {"username": "bellasjardin", "bio": "Engineer, Succulent and Plant Enthusiast, Traveler and Nature Lover. \ud83c\udf3fhttps://www.etsy.com/shop/BellasJardin\ud83c\udf3f", "website": "http://www.bellasjardin.com", "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/s150x150/12950269_835314869906758_1077337788_a.jpg", "full_name": "Dolce Vita", "id": "2929570424"}}
	   
5. To get a user's recent media, we need the user-id. From your browser 'Get user info' using the following url, replacing ACCESS-TOKEN with your access_token.
https://api.instagram.com/v1/users/self/?access_token=ACCESS-TOKEN

You will receive a response similar to the following, where USER-ID will be your user id

{"meta": {"code": 200}, "data": {"username": "bellasjardin", "bio": "Engineer, Succulent and Plant Enthusiast, Traveler and Nature Lover. \ud83c\udf3fhttps://www.etsy.com/shop/BellasJardin\ud83c\udf3f", "website": "http://www.bellasjardin.com", "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/s150x150/12950269_835314869906758_1077337788_a.jpg", "full_name": "Dolce Vita", "counts": {"media": 181, "followed_by": 61, "follows": 14}, "id": USER-ID}}
	
6. Now you can get user recent  media using this api endpoint, replacing USER-ID and ACCESS-TOKEN with your values
https://api.instagram.com/v1/users/{USER-ID}/media/recent/?access_token=ACCESS-TOKEN

## API Reference
https://www.instagram.com/developer/endpoints/users/

## Tests
1. From instagramapi directory, startup a simple python  http server as follows:
python -m SimpleHTTPServer
2. From a browser, navigate to url: http://localhost:8000/instagramapi.html

## Contributors
Evan Uribe

