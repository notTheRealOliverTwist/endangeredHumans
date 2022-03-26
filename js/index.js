function $(id){ return document.getElementById(id); }

var $j = jQuery.noConflict();

// Require the google trends api
//const googleTrends = require('google-trends-api');

// Google trends menu html/options

const googleTrendType = $('divaa1');
const trendOptions = $('trend-options');

var primeRateCountries = [];

$j(document).ready(function() {
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
				`<option id="${country.name}" value="${country.name}">${country.name}</option>`;
			primeRateCountries[i] = country.name;
			i++;
			console.log(output);
		})
		countryMenu.innerHTML = output;
		styleDropdown();
	}).catch(error => {
		console.log(error);
	});
});
//////////////////////////

function styleDropdown(){

	console.log('styleDropdown running now');
	var countryList = $('countries');
	for(var i =0; i < primeRateCountries.length; ++i)
	{
		console.log(primeRateCountries);
		var country = $(primeRateCountries[i]);
		country.classList.add('country-style');
		console.log(country);
	}

/*	$('countries').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;

		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
			//if ($this.children('option').eq(i).is(':selected')){
			//  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
			//}
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			//console.log($this.val());
		});

		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});
	*/
}
//////////////////////////////////////////////////////////////
// include country dropdown aswell with the respective values

/*function editGoogleMenu(){
	switch(trendType.value){
		thisBadBoy.ThenDisplayIt
		thisBadBoy.ThenDisplayIt
		thisBadBoy.ThenDisplayIt
	}
}
*/

function googleDailyTrends()
{
	// This should be the element id of a drop down or something like that
	var trendType = $('trendType').toString();
	var geoLocation = $('geoLocation').toString();
	var chosenDate = $('chosenDate').toString();
	var chosenKeyword = $('chosenKeyWord').toString();

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

googleTrendType.addEventListener('onlick', googleDailyTrends);

