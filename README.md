#instagramapi

## Synopsis
Uses Instagram api to get a user's media

## Code Example
See instagramapi.html

## Motivation
Sample code for using the Instagram api

## Instructions
instagramapi.js has 2 functions to retrieve user media<br>
1. function getUserMediaNoAuth(user, count)<br> 
   Does not require authorization and is undocumented. May not be officially supported. <br>
2. function getUserRecentMedia(user, count)  <br>
  Supported api that requires authorization.  <br>
 <br>
3. instagramapi.php has 2 functions and serves as a proxy for the above 2 api's <br>
a. function getUserMediaNoAuth ($username)  <br>
   endpoint: https://www.instagram.com/username/media/ <br>
b. function getUserRecentMedia($username, $count) <br>
  endpoint: https://api.instagram.com/v1/users/USER-ID/media/recent/?access_token=ACCESS-TOKEN <br>
  Update accesstoken.php with your ACCESS-TOKEN. See readme.txt for steps to retrieve your access-token. <br>
 <br>
4. instagramapi.html has usage examples for these functions. <br>
   


## API Reference
https://www.instagram.com/developer/endpoints/users/

## Tests
1. From instagramapi directory, startup a php webserver as follows:
php -S localhost:8000
2. From a browser, navigate to url: http://localhost:8000/instagramapi.html

## Contributors
Evan Uribe

