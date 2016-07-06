#instagramapi

## Synopsis
Uses Instagram api to get a user's recent media

## Code Example
See instagramapi.html

## Motivation
Sample code for using the Instagram api

## Instructions
instagramapi.js has 2 functions to retrieve user media
1. function getUserMediaNoAuth(user, count) 
   Does not require authorization but not documented. May not be officially supported. 
2. function getUserRecentMedia(user, count) 
  Supported api that requires authorization.

3. instagramapi.php has 2 functions and servers as a proxy for the above 2 calls
a. function getUserMediaNoAuth ($username) 
   endpoint: https://www.instagram.com/username/media/
b. function getUserRecentMedia($username, $count)
  endpoint: https://api.instagram.com/v1/users/USER-ID/media/recent/?access_token=ACCESS-TOKEN
  Update accesstoken.php with your ACCESS-TOKEN. See readme.txt for details.

4. instagramapi.html has usage examples for functions.
   


## API Reference
https://www.instagram.com/developer/endpoints/users/

## Tests
1. From instagramapi directory, startup a php webserver as follows:
php -S localhost:8000
2. From a browser, navigate to url: http://localhost:8000/instagramapi.html

## Contributors
Evan Uribe

