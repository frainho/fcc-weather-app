if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		$.ajax({
			url: "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude,
			cache: false,
			success: function(result) {
				var tempC = Math.trunc(result.main.temp);
				var tempF = Math.trunc(tempC * (9 / 5) + 32);
				$("#displayC").append(tempC + "&deg; C");
				$("#displayF").append(tempF + "&deg; F");
				$("#tempImage").append("<p><img src=" + result.weather[0].icon + "></p>");
				$("#changeFar").on("click", function() {
					$("#displayF").toggle();
					$("#displayC").toggle();
					$(this).text(function(i, text) {
						return text === "Switch to Fahrenheit" ? "Switch to Celsius" : "Switch to Fahrenheit";
					});
				});
			}
		});
	});
}
