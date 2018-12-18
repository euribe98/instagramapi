#instagramapi

## Synopsis
Uses Instagram api to get a user's media

## Code Example
See instagramapi.html

## Motivation
Sample code for using the Instagram api

## Instructions
<strong>instagramapi.js</strong> has 2 functions to retrieve user media, one that requires authorization and one that does not.<br>
1. <strong>function getUserMediaNoAuth(user, count)</strong><br> 
   user: instagram user<br>
   count: number of media to return up to a max of 20<br>
2. <strong>function getUserRecentMedia(user, count)</strong><br>
   user: instagram user<br>
   count: number of media to return <br>
 <br>
3. <strong>instagramapi.php</strong> has 2 functions and serves as a proxy for the above 2 api's <br>
a. <strong>function getUserMediaNoAuth ($username)</strong><br>
   instagram endpoint: <i>https://www.instagram.com/username/media/</i><br>
   Does not require authorization and is undocumented, so may not be officially supported. <br>
b. <strong>function getUserRecentMedia($username, $count)</strong><br>
   instagram endpoint: <i>https://api.instagram.com/v1/users/USER-ID/media/recent/?access_token=ACCESS-TOKEN</i><br>
   Supported api that requires authorization.  <br>
   Update accesstoken.php, replacing ACCESS-TOKEN with your value. See <strong>readme.txt</strong> for steps to retrieve your access-token. <br>
 <br>
4. <strong>instagramapi.html</strong> has usage examples for these functions. <br>
   


## API Reference
https://www.instagram.com/developer/endpoints/users/

## Tests
1. From instagramapi directory, startup a php webserver as follows:
php -S localhost:8000
2. From a browser, navigate to url: http://localhost:8000/instagramapi.html


