var jsonQuotes, i = 0;

function inr() {
    i = Math.floor((Math.random() * 101) + 1);
    return i;
}
$.getJSON('./JSON/quotes1.json', {
    param1: 'value1'
}, function(json, textStatus) {


    jsonQuotes = json;
    $("#quoteBtn").click(function(event) {
        $("#paragraph").html(jsonQuotes[inr()].quote + "<br>" + "-" + jsonQuotes[i].name);
        $("#twitterBtn").attr('href', "https://twitter.com/intent/tweet?text=" + jsonQuotes[i].quote + " --" + jsonQuotes[i].name);

        $.ajax({
                url: './JSON/HEXColors.json',
                dataType: 'json',
            })
            .done(function(data) {
                $("#quoteBtn, #tweet").css({
                    "background-color": data[i].hex,
                    "transition": "background-color 3s ease"
                })
                $("#body").css({
                    "background-color": data[i].hex,
                    "transition": "background-color 3s ease"
                })
            })
            .fail(function() {
            })
            .always(function() {
            });

    });
});
