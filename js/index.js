function $(id){ return document.getElementById(id); }

var $j = jQuery.noConflict();
/*

// Require the google trends api
//const googleTrends = require('google-trends-api');

// Google trends menu html/options

const runAnalysis = $('divaa1');
const trendOptions = $('trend-options');

var primeRateCountries = [];

/*$j(document).ready(function() {
	var countryMenu = $("countries");
	var i = 0;
	console.log('This should be running');
	fetch("https://restcountries.com/v2/all").then(res => {
		return res.json();
	}).then(countries => {
		console.log(countries);
		let output = "";
		countries.forEach(country =>{
			output +=
				`<option id="${country.name}" value="${country.alpha2Code}">${country.name}</option>`;
			primeRateCountries[i] = country.name;
			i++;
			console.log(output);
		})
		countryMenu.innerHTML = output;
	}).catch(error => {
		console.log(error);
	});
});


const daily = $('btna1');
const realTime = $('btna2');
const overTime = $('btna3');

const countriesList = $('countries');
const calendar = $('calendar');
const keywords = $('keyword');

const usingTrend = ['Daily', 'RealTime', 'OverTime'];

var trend = '';

////////////////////////////////////////////////////////////////

/* Finish editing the below 

daily.addEventListener('click', function(){
	countriesList.classList.remove('hideOptions');
	calendar.classList.remove('hideOptions');

	console.log('Daily is running');

	(!keyword.classList.contains('hideOptions'))?
		keyword.classList.add('hideOptions'): null;

	trend = usingTrend[0];
});

realTime.addEventListener('click', function(){
        countriesList.classList.remove('hideOptions');

        (!calendar.classList.contains('hideOptions'))?
                calendar.classList.add('hideOptions'): null;

        (!keywords.classList.contains('hideOptions'))?
                keywords.classList.add('hideOptions'): null;
	trend = usingTrend[1];
});

overTime.addEventListener('click', function(){
        keyword.classList.remove('hideOptions');

        (!calendar.classList.contains('hideOptions'))?
                calendar.classList.add('hideOptions'): null;

        (!countriesList.classList.contains('hideOptions'))? 
                countriesList.classList.add('hideOptions'): null;
	trend = usingTrend[2];


});


//////////////////////////////////////////////////////////////
// include country dropdown aswell with the respective values

function googleDailyTrends()
{
	// This should be the element id of a drop down or something like that
	var geoLocation = $('countries').toString();
	var chosenDate = $('calendar').toString();
	var chosenKeyword = $('keyword').toString();

	switch(trend){
		case('Daily'):
			googleTrends.dailyTrends({
				trendDate: new Date(chosenDate),
				geo: geoLocation,
			}, function(err, results) {
				if (err) {
					console.log(err);
				}else{
					console.log(results);
				}
			});
			break;
		case('RealTime'):
			googleTrends.realTimeTrends({
				geo: geoLocation,
				category: 'all',
			}, function(err, results) {
				if (err) {
					console.log(err);
				} else {
					console.log(results);
				} 
			});
			break;
		case('OverTime'):
			googleTrends.interestOverTime({keyword: chosenKeyword})
				.then(function(results){
					console.log(results);
				})
				.catch(function(err){
					console.error(err);
				});
			break;
		default:
			alert('Please choose a trend type');
			break;
	}
}

runAnalysis.addEventListener('onlick', googleDailyTrends);
*/
