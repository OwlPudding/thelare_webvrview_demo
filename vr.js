var myPicture = vrViewPlayer("#vr",{
	image: 'image.jpg',
	is_stereo: false
});
window.addEventListener("load",myPicture);
myPicture.on('ready',function(e){
  myPicture.addHotspot('hotspot-1',{
    pitch: 0,
    yaw: 0,
    radius: 0.10,
    distance: 1
  });
});
myPicture.on('click',function(e){
  console.log("register all clicks");
  if(e.id == "hotspot-1"){
    alert("Clicked HOTSPOT 1");
  }
});
