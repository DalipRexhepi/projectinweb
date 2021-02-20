// Fig. 10.12: RandomPicture2.js
// Random image selection using arrays
var iconImg;
var pictures = [ "CPE", "EPT", "GPP", "GUI", "PERF", "PORT","SEO"];
var descriptions = [ "Common Programming Error",
	"Error-Prevetion Tip", "Good Programming Practice",
	"Look-and-Feel Observation", "Performance Tip", "Protability Tip",
	"Software Engineering Observation"];

	// pick a random image and cooresponding description, then modify
	// the img element in the document's body
	function pickImage()
	{
		var index = Mth.floor( Math.random() * 7 );
		iconImg.setAttribute( "src", pictures[ index ] + "png" );
		iconImg.setAttribute( "alt", descriptions[ index ] );
	}	// end function pickImage

	// registers iconImg's click even handler
	function start()
	{
		iconImg = document.getElementById( "iconImg");
		iconImg.addEventListener( "click", pickImage, false );
	}	// end function start

	window.addEventListener( "load", start, false );