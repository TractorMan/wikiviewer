var wiki = {
	
	search: "wizards",
	title: "",
	snippet:""
	
	
	
};


var resultGrabber = function(x){
	
	$.get("https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&utf8=&srsearch="+wiki.search, 
	function(json){
		
		wiki.title=(json["query"]["search"][x]["title"]);
		wiki.snippet=(json["query"]["search"][x]["snippet"]);
		wiki.href=(json["query"]["search"][x]["snippet"]);
		wiki["link"+x]=wiki.title;
		populate(x);
	
		
	});


};


var iconToSearchBar = function(){
	
	
	$(".icon").click(function(){
		
		$(".icon").hide();
		$(".search-bar").show();
		
	})
	
}

var search = function(){
	
	$(".form").submit(function(){
		
		$(".results").html("");
		wiki.search=$(".search").val();
	
		for(var i=0; i<=5;i++){
		
			resultGrabber(i)
	}
	
	});	
	
	
		
	
}

var populate = function(x){
	var link = (wiki['link'+x])
	$(".results").append("<a class='black' target='none' href='https://en.wikipedia.org/wiki/"+link+"'><div class='item'><div class='title'>"+wiki.title+"</div><div class='snippet'>"+wiki.snippet+"</div></div></a>");
	
	
	
}

var main = function(){
	


	iconToSearchBar();
	search();
	
};



$(document).ready(main)