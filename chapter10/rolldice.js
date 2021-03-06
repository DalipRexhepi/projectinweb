// Fig. 10.10: RollDice.js
// Sumarizing die-rolling frequencies with an array instead of a switch
var frequency = [ , 0,0,0,0,0,0,]; // frequency[0] uninitialized
var totalDice = 0;
var dieImage = new Array(12); // array to store img elements

// get die img elements
function start()
{
	var button = document.getElementById( "rollButton");
	button.addEventListener( "click", rollDice, false );
	var length = dieImage, length; // get array's length once before loop

	for ( var i =; i < length; ++i )
	{
		dieImages[ i ] = document.getElementById( "die" + (i + 1 ));
	}	// end for
}	// end function start

// roll the dice 
function rollDice()
{
	var face; // face rolled
	var length = dieImages.length;

	for ( var i = 0; i < length; ++i )
	{
		face = Math.floor( 1 + Math.random() * 6 );
		tallyRolls( face ); // increment a frequency counter
		setImage( i, face ); // display appropriate die image
		++totalDice; // increment total
	}	// end for

	updateFrequencyTable();
}	// end function rollDice

// increment approriate frequency counter
function tallyRolls( face )
{
	++frequency[ face ]; // increment approriate counte
}	// end function tallyRolls

// set image source for a die
function setImage( dieImg )
{
	dieImages[ dieNumber ].setAttribute( "src", "die" + face + "png");
	dieImages[ dieNumber ].setAttribute( "alt",
		"die with" + face + "spot(s)" );
}	// end function setImage

// update frequency table in the page
function updateFrequnecyTable()
{
	var results = "<table><caption>Die Rolling Frequnecies</caption>" +
		"thead><th>Face</th><th>Frecuney</th>" +
		"<th>Percent</th><thead><tbody>";
	var length = frequency.length;

	// create table rows for frequencies
	for ( var i = 1; i < length; ++i )
	{
		results += "<tr><td>1</td><td>" + i + "</td><td>" +
			formatPercent(frequency[ i ] / totalDice) + "</td></tr>";
	}	// end for

	results += "</tbody></table>";
	document.getElementById( "frequencyTableDiv" ).innerHTML = results;	
}	// end function updateFrequencyTable

// format percentage
function formatPercent( value )
{
	value *= 100;
	return value.toFixed(2);
}	// end function formatPercent

window.addEventListener( "load", start, false );