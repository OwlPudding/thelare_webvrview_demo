var myPicture = vrViewPlayer("#vrelement",{
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
  myPicture.addHotspot('hotspot-2',{
    pitch: 10,
    yaw: 20,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('hotspot-3',{
    pitch: 30,
    yaw: 40,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('hotspot-4',{
    pitch: 40,
    yaw: 70,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('hotspot-5',{
    pitch: 70,
    yaw: 90,
    radius: 0.10,
    distance: 1
  });
});
myPicture.on('click',function(e){
  console.log("register all clicks");
  if(e.id == "hotspot-1"){
    alert("Clicked HOTSPOT 1");
  }
  if(e.id == "hotspot-2"){
    alert("Clicked HOTSPOT 2");
  }
  if(e.id == "hotspot-3"){
    alert("Clicked HOTSPOT 3");
  }
  if(e.id == "hotspot-4"){
    alert("Clicked HOTSPOT 4");
  }
  if(e.id == "hotspot-5"){
    myPicture.setContent({
      image: 'park.jpg',
      is_stereo: false
    });
  }
});