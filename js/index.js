function $(id){
	document.getElementById(id);
}
const googleTrends = require('google-trends-api');

// Add onclick event handler (Possibly some type of drop down that they may make use of)

function googleDailyTrends()
{
	// This should be the element id of a drop down or something like that
	var trendType = $('trendType').toString();
	var geoLocation = $('geoLocation').toString();
	var chosenDate = $('chosenDate').toString();

	switch(trendType.value){
		case('daily'):
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
		case('realTimeTrends'):
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
		case('interestOverTime'):
			googleTrends.interestOverTime({keyword: 'Valentines Day'})
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

