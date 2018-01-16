$(document).ready(function()
{
	console.log("3");

  var song = new songModel({songid:"1",name:"Rock on"});
  var song1 = new songModel({songid:"2",name:"Shape of you"});
  var song2 = new songModel({songid:"3",name:"Love the way you lie"});

  var PlayList = new songCollection();

  PlayList.fetch({
  		success: function(model, response) 
  		{
  			console.log(PlayList.size());
  			console.log(PlayList.length);
  			var myPlaylist = new PlayListView({model:model,el:"ul"});
  			myPlaylist.render();
  		}
  });
  
});