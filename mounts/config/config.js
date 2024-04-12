/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "0.0.0.0",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8888,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: [],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	lat: "39.842468",
	lon: "-88.953148",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
        {
			module: "clock",
			position: "top_left",
			config: {
				timeFormat: 12,
				timezone: "America/Chicago",
				displaySeconds: false,
				showPeriod: false,
				// clockBold: true,
				showSunTimes: true,
				lat: "39.842468",
				lon: "-88.953148",
				dateFormat: "dddd, MMM D"
			}
        },
		{
			module: "calendar",
			header: "Family Calendar",
			position: "top_left",
			config: {
                fade: false,
                // dateFormat: "ddd, MMM D",
                maximumEntries: 15,
                maximumNumberofDays: 4,
                hideOngoing: true,
                dateFormat: "ddd h:mm", // Format for displaying date and time
                fullDayEventDateFormat: "ddd", // Format for full-day events
                timeFormat: "absolute", // Show absolute time
                getRelative: 12, // Display relative time for events within 12 hours
                urgency: 0, //
                nextDaysRelative: false,
                coloredText: true,
				calendars: [
					{
						fetchInterval: 600000 , // 7 * 24 * 60 * 60 * 1000,
						symbol: "people-roof",
                        color: '#FFFFFF',
						url: "https://calendar.google.com/calendar/ical/jenntolbert%40gmail.com/private-cfbe001f3c7aa48b153afdfb5f9f83e5/basic.ics"
					}

					,{
						fetchInterval: 600000 , // 7 * 24 * 60 * 60 * 1000,
						symbol: "building",
                        color: "#FDB515",
                        name: "JakesWork",
						url: "https://calendar.google.com/calendar/ical/jaketolbert%40berkeley.edu/private-fd25deb6846f8224290fcf6d86fe3f1d/basic.ics"

					}

					,{
						fetchInterval: 600000 , // 7 * 24 * 60 * 60 * 1000,
						symbol: "person-running",
                        color: '#808080',
						url: "https://calendar.google.com/calendar/ical/jonahtolbert%40gmail.com/private-b8f3079183dc75f7e809e5bcc45b7cd9/basic.ics"
					}
				]
			}
		},
		//{
		//	module: "compliments",
		//	position: "lower_third"
		//},
		{
            module: "weather",
			position: "top_right",
			config: {
			    weatherProvider: "pirateweather",
    			type: "current",
    			units: "imperial",
    			apiBase: "https://api.pirateweather.net",
    			weatherEndpoint: "/forecast",
    			apiKey: "7sIjLxJAQepY1qtm1taCKquH2kaMKj1U",
    			lat: "39.842468",
    			lon: "-88.953148",
                tableClass: "xlarge",
    			roundTemp: true,
    			showWindDirection: false,
	    		showFeelsLike: true
            }
		},

		{
		    module: "weather",
		    position: "top_right",
		    header: "Forecast",
		    config: {
		        weatherProvider: "weathergov",
		        apiBase: "https://api.weather.gov/points/",
		        weatherEndpoint: "/forecast",
    			lat: "39.842468",
    			lon: "-88.953148",
		        type: "forecast",
                fade: false,
                tableClass: "medium",
		        maxNumberOfDays: 4,
				roundTemp: true,
		        showPrecipitationProbability: true
		    }
		},
       
        /*
		{
            module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				fade: false,
				roundTemp: true,
				apiBase: "https://api.open-meteo.com/v1",
                showPrecipitationAmount: false,
		        showPrecipitationProbability: true,
				initialLoadDelay: 1000,
                updateInterval: 600000,
				lat: "39.842468",
				lon: "-88.953148"
			}
		},
        */

		{
		    module: 'MMM-Chart',
			position: "top_right",
		    config: {
		        name: 'traffic',
		        url: 'https://api.open-meteo.com/v1/forecast?latitude=39.9&longitude=-88.5&hourly=surface_pressure&past_days=1&forecast_days=1',
		        graphStyle: 'line'
		    }
		},


		{
		    disabled: false,
		    module: 'MMM-RAIN-RADAR',
		    position: 'top_right',
		    config: {
		        useHeader: true, // true if you want a header
				lat: "39.842468",
				lon: "-90.5",
		        area: 'IL', // US State
		        zoomLevel: 6,
		        mapType: 2, //0-Road Map 1-Satellite 2-Dark Map 3-OpenStreetMaps 4-Light Map
		        color: 3, //0-Original 1-Universal Blue 2-TITAN 3-The Weather Channel 5-NEXRAD Level-III 6-RAINBOW @ SELEX-SI
		        snow: 1,
		        smoothing: 1,
		        opacity: 95,
		        fastAnimation: 0,
		        coverage: 0,
		        darkTheme: 1,
		        UTCtime: 0,
		        legend: 0,
		        legendMin: 0, //set legend to 1 if you want legendMin to show
		        animate: 0,
		        updateOnWarning: 1, // 1: after updateInterval, weather warnings for your US states will be used to determine if module should be hidden. 0 module is perpertually displayed
		        updateInterval: 60 * 60 * 1000, // number of milliseconds. change 5 to 60 and it will update each 10 minutes
		    }
		},




/*
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
*/
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
