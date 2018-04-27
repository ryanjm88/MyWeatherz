
$(".card").hide();
var queryURL1 = "http://api.wunderground.com/api/7754b8a5e040a902/conditions/q/GA/Atlanta.json";

$("#atlantaButton").on("click", function(event) {
    event.preventDefault();
    $("#curTemp").empty();
    $("#conditions").empty();
    $("#curUV").empty();
    $("#curHumid").empty();

    $(".card").show();
    $("#currentCity").css("background-image", "url(images/AtlantaPic2.jpg)");
    $("#currentCity").css("color", "black")
    $("#currentCity").css("font-weight", "bold");
;

$.ajax({
    url: queryURL1,
    method: "GET"
}).then(function(response)  {

    console.log(response);

    var ATLtemp = $("#curTemp").text("Temperature: " + response.current_observation.temperature_string);

    var ATLsun = $("#curUV").text("UV Index: " + response.current_observation.UV);

    var ATLhumid = $("#curHumid").text("Humidity: " + response.current_observation.relative_humidity);

    var ATLcond = $("#conditions").text("Conidtions: " + response.current_observation.weather);


    console.log(ATLhumid);
    console.log(ATLtemp);
    console.log(ATLhumid);
    });
});


var queryURL2 = "http://api.wunderground.com/api/7754b8a5e040a902/conditions/q/MA/Boston.json";

$("#bostonButton").on("click", function(event)  {
    event.preventDefault();
    $("#curTemp").empty();
    $("#conditions").empty();
    $("#curUV").empty();
    $("#curHumid").empty();

    $(".card").show();
    $("#currentCity").css("background-image", "url(images/BostonPic2.jpg)");
    $("#currentCity").css("color", "black");
    $("#currentCity").css("font-weight", "bold");

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response)  {
        console.log(response);

        var bosTemp = $("#curTemp").text("Temperature: " + response.current_observation.temperature_string);

        var bosSun = $("#curUV").text("UV Index: " + response.current_observation.UV);

        var bosHumid = $("#curHumid").text("Humidity: " + response.current_observation.relative_humidity);

        var bosCond = $("#conditions").text("Conidtions: " + response.current_observation.weather);
    });
});

var queryURL3 = "http://api.wunderground.com/api/7754b8a5e040a902/conditions/q/IL/Chicago.json";

$("#chicagoButton").on("click", function(event) {
    event.preventDefault();
    $("#curTemp").empty();
    $("#conditions").empty();
    $("#curUV").empty();
    $("#curHumid").empty();

    $(".card").show();
    $("#currentCity").css("background-image", "url(images/ChicagoPic2.jpg)");
    $("#currentCity").css("color", "black");
    $("#currentCity").css("font-weight", "bold");

    $.ajax({
        url: queryURL3,
        method: "GET"
    }).then(function(response)  {
        console.log(response);

        var chiTemp = $("#curTemp").text("Temperature: " + response.current_observation.temperature_string);
        var chiSun = $("#curUV").text("UV Index: " + response.current_observation.UV);
        var chiHumid = $("#curHumid").text("Humidity: " + response.current_observation.relative_humidity);
        var chiCond = $("#conditions").text("Conidtions: " + response.current_observation.weather);
    });
});

var queryURL4 = "http://api.wunderground.com/api/7754b8a5e040a902/conditions/q/CO/Denver.json";

$("#denverButton").on("click", function(event) {
    event.preventDefault();
    $("#curTemp").empty();
    $("#conditions").empty();
    $("#curUV").empty();
    $("#curHumid").empty();

    $(".card").show();
    $("#currentCity").css("background-image", "url(images/DenverPic2.jpg)");
    $("#currentCity").css("color", "white");
    $("#currentCity").css("font-weight", "bold");

    $.ajax({
        url: queryURL4,
        method: "GET"
    }).then(function(response)  {
        console.log(response);

        var denTemp = $("#curTemp").text("Temperature: " + response.current_observation.temperature_string);
        var denSun = $("#curUV").text("UV Index: " + response.current_observation.UV);
        var denHumid = $("#curHumid").text("Humidity: " + response.current_observation.relative_humidity);
        var denCond = $("#conditions").text("Conidtions: " + response.current_observation.weather);
    });
});

var queryURL5 = "http://api.wunderground.com/api/7754b8a5e040a902/conditions/q/canada/Montreal.json";

$("#monButton").on("click", function(event)  {
    event.preventDefault();
    $("#curTemp").empty();
    $("#conditions").empty();
    $("#curUV").empty();
    $("#curHumid").empty();

    $(".card").show();
    $("#currentCity").css("background-image", "url(images/MontrealPic2.jpg)");
    $("#currentCity").css("color", "black");
    $("#currentCity").css("font-weight", "bold");

    $.ajax({
        url: queryURL5,
        method: "GET"
    }).then(function(response)  {
        console.log(response);

        var monTemp = $("#curTemp").text("Temperature: " + response.current_observation.temperature_string);
        var monSun = $("#curUV").text("UV: " + response.current_observation.UV);
        var monHumid = $("#curHumid").text("Humidity: " + response.current_observation.relative_humidity);
        var monCond = $("#conditions").text("Conditions: " + response.current_observation.weather);
    });
});

var queryURL6 = "http://api.wunderground.com/api/7754b8a5e040a902/conditions/q/UK/London.json";

$("#lonButton").on("click", function(event) {
    event.preventDefault();
    $("#curTemp").empty();
    $("#conditions").empty();
    $("#curUV").empty();
    $("#curHumid").empty();

    $(".card").show();
    $("#currentCity").css("background-image", "url(images/LondonPic2.jpg)");
    $("#currentCity").css("color", "black");
    $("#currentCity").css("font-weight", "bold");

    $.ajax({
        url: queryURL6,
        method: "GET"
    }).then(function(response)  {
        console.log(response);

        var lonTemp = $("#curTemp").text("Temperature: " + response.current_observation.temperature_string);
        var lonSun = $("#curUV").text("UV: " + response.current_observation.UV);
        var lonHumid = $("#curHumid").text("Humidity: " + response.current_observation.relative_humidity);
        var lonCond = $("#conditions").text("Conditions: " + response.current_observation.weather);
    });
});

var queryURL7 = "http://api.wunderground.com/api/7754b8a5e040a902/conditions/q/UK/Edinburgh.json";

$("#edinButton").on("click", function(event)    {
    event.preventDefault();
    $("#curTemp").empty();
    $("#conditions").empty();
    $("#curUV").empty();
    $("#curHumid").empty();

    $(".card").show();
    $("#currentCity").css("background-image", "url(images/EdinburghPic2.jpg)");
    $("#currentCity").css("color", "black");
    $("#currentCity").css("font-weight", "bold");

    $.ajax({
        url: queryURL7,
        method: "GET"
    }).then(function(response)  {
        console.log(response);

        var edinTemp = $("#curTemp").text("Temperature: " + response.current_observation.temperature_string);
        var edinSun = $("#curUV").text("UV: " + response.current_observation.UV);
        var edinHumid = $("#curHumid").text("Humidity: " + response.current_observation.relative_humidity);
        var edinCond = $("#conditions").text("Conditions: " + response.current_observation.weather);
    });
});
