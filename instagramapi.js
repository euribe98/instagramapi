
//   Get user recent media
function getUserRecentMedia(user, count) {
	
	$(document).ready(function(){
		
		accesstoken = 'ACCESS-TOKEN';
	    userid = 'USER-ID';
		url = "https://api.instagram.com/v1/users/" + userid + "/media/recent/?access_token=" + accesstoken + "&count=" + count;

		//console.log (url);
				    
		$.getJSON(url + "&callback=?", function(results){
	   		
	   		$.each(results.data, function(i, data)
	   		{	
	   			srcImage = data.images.thumbnail.url; 
	   			//console.log (srcImage);
	   				   						   									
	  			$("<div class=image>").appendTo("#instagram-images")
	  				.append($("<a href='" + data.link + "'></a>").append("<img src='" + srcImage + "'>"));  				
	  				
	   		});
		});
	});
}




