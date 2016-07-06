
//Get user recent media, calling the api from the client
function getUserRecentMedia(user, count) {
	
	$(document).ready(function(){
		accesstoken = 'ACCESS-TOKEN';
	    userid = 'USER-ID';
		url = "https://api.instagram.com/v1/users/" + userid + "/media/recent/?access_token=" + accesstoken + "&count=" + count;
				    
		$.getJSON(url + "&callback=?", function(results){
	   		
	   		//console.log (results);
	   		
	   		$.each(results.data, function(i, data)
	   		{	
	   			srcImage = data.images.thumbnail.url; 
	   				   				   						   									
	  			$("<div class=image>").appendTo("#instagram-images")
	  				.append($("<a href='" + data.link + "'></a>").append("<img src='" + srcImage + "'>"));  				
	  				
	   		});
		});
	});
}




