var jsonQuotes, i = 0
	, hexColorVar = (function () {
		var json = null;
		$.ajax({
			'async': false
			, 'global': false
			, 'url': "https://github.com/OGKevin/FCC-Random-quote-machine/blob/master/JSON/HEXcolors.json"
			, 'dataType': "json"
			, 'success': function (data) {
				json = data;
			}
		});
		return json;
	})();

function inr() {
	i = Math.floor((Math.random() * 101) + 1);
	console.log(i);
	return i;
}
$.getJSON('./JSON/quotes1.json', {
	param1: 'value1'
}, function (json, textStatus) {
	jsonQuotes = json;
	$("#quoteBtn").click(function (event) {
		$("#paragraph").html(jsonQuotes[inr()].quote + "<br>" + "-" + jsonQuotes[i].name);
		$("#twitterBtn").attr('href', "https://twitter.com/intent/tweet?text=" + jsonQuotes[i].quote + " --" + jsonQuotes[i].name);
		$("#body").css({
			"background-color": hexColorVar[i].hex
			, "transition": "background-color 3s ease"
		})
		$("#quoteBtn, #tweet").css({
			"background-color": hexColorVar[i].hex
			, "transition": "background-color 3s ease"
		})
	});
});
