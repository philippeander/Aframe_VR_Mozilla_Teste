
var muzzleflash;
var light;
var shoot;
var audioshot;

window.onclick = OnAnyClick;
window.onload = onstart;
setInterval(function() { 
	update();
}, 50);

function OnAnyClick(){
	
	muzzleflash.setAttribute('visible', true);
	light.setAttribute('visible', true);
	audioshot.play();

}

//-------------------------------------------------------

function onstart() {
    
	audioshot = document.getElementById("shootgun"); 
	audioshot.volume = 0.1;
}

function update(){
	
	muzzleflash = document.querySelector('#muzzlecone');
	light = document.querySelector('#lightshot');
	shoot = muzzleflash.getAttribute('visible'); 
	
	
	if(shoot === true){
		muzzleflash.setAttribute('visible', false);
		light.setAttribute('visible', false);
	}
}



