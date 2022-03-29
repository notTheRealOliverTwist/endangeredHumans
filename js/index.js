function $(id){ return document.getElementById(id); }

var $j = jQuery.noConflict();

var countries = window.country_info;


// Require the google trends api
//const googleTrends = require('google-trends-api');

// Google trends menu html/options

const runAnalysis = $('divaa1');
const trendOptions = $('trend-options');

var Countries = [];
var States = [];
var Cities = [];

var countryMenu = $("countryMenu");
var stateMenu = $("stateMenu");
var cityMenu = $("cityMenu");

$j(document).ready(function() {

	let output = "";
	for(var i = 0 ; i < countries.length; ++i){
		output +=
			`<option id="${countries[i].iso2}" value="${countries[i].name}">${countries[i].name}</option>`;
		Countries[i] = countries[i].name;
		console.log(output);
	}
	countryMenu.innerHTML = output;

});

function chooseState(){
	var countryChosen = countryMenu.value;

	var stateMenu = $('stateMenu');
	stateMenu.innerHTML = '';
	var cityMenu = $('cityMenu');

	console.log('state running');
	console.log(countryChosen);
	console.log('----------------------');
	console.log(Countries);

	let stateOutput = "";

	for(var i = 0 ; i < countries.length; ++i){
		console.log('forloop running');
		if(i === Countries.indexOf(countryChosen)){
			for(var j = 0; j < countries[i].states.length; ++j){
				stateOutput +=
					`<option id="${countries[i].states[j].name}" value="${countries[i].states[j].name}">${countries[i].states[j].name}</option>`;
				States[j] = countries[i].states[j].name;
				console.log(stateOutput);
			}
		}
		stateMenu.innerHTML = stateOutput;
	}
}

function chooseCity(){
	var stateMenu = $('stateMenu');
	var cityMenu = $('cityMenu');

	cityMenu.innerHTML = '';

	var countryChosen = countryMenu.value;
	var stateChosen = stateMenu.value;

	var stateMenu = $('stateMenu');
	var cityMenu = $('cityMenu');

	console.log('state running');
	console.log(stateChosen);
	console.log('----------------------');
	console.log(States);

	let cityOutput = "";

	for(var i = 0 ; i < countries.length; ++i){
		console.log('forloop running');
		if(i === Countries.indexOf(countryChosen)){
			for(var j = 0; j < countries[i].states.length; ++j){
				if(j === States.indexOf(stateChosen)){
					for(var k = 0; k < countries[i].states[j].cities.length; ++k){
						cityOutput +=
							`<option id="${countries[i].states[j].cities[k].name}" value="${countries[i].states[j].cities[k].name}">${countries[i].states[j].cities[k].name}</option>`;
						Cities[j] = countries[i].states[j].cities[k].name;
						console.log(cityOutput);
					}
				}
			}
			//              cityMenu.innerHTML = cityOutput;
		}
		cityMenu.innerHTML = cityOutput;
	}
}

////////////////
const daily = $('btna1');
const realTime = $('btna2');
const overTime = $('btna3');

const countriesList = $('country-menu');
const calendar = $('calendar-menu');
const keywords = $('keyword-menu');
const optionsBar = $('trend-list');

const stateList = $('state-menu');
const cityList = $('city-menu');

const usingTrend = ['Daily', 'RealTime', 'OverTime'];

var trend = '';

////////////////////////////////////////////////////////////////

/* Finish editing the below */

daily.addEventListener('click', function(){
	countriesList.classList.remove('hideOptions');
	calendar.classList.remove('hideOptions');
	optionsBar.classList.remove('hideOptions');

	console.log('Daily is running');

	(!keyword.classList.contains('hideOptions'))?
		keyword.classList.add('hideOptions'): null;	
	trend = usingTrend[0];
});

realTime.addEventListener('click', function(){
	countriesList.classList.remove('hideOptions');
	optionsBar.classList.remove('hideOptions');

	(!calendar.classList.contains('hideOptions'))?
		calendar.classList.add('hideOptions'): null;

	(!keywords.classList.contains('hideOptions'))?
		keywords.classList.add('hideOptions'): null;
	trend = usingTrend[1];
});

overTime.addEventListener('click', function(){
	keyword.classList.remove('hideOptions');
	optionsBar.classList.remove('hideOptions');


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
	var geoLocation = $('countries').value;
	var chosenDate = $('calendar').value;
	var chosenKeyword = $('keyword').value;

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

//runAnalysis.addEventListener('onlick', googleDailyTrends);
