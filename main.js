
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("submit");
        btn.addEventListener("click", function() {
            const city = ((document.getElementById("search")||{}).value)||"";
            
            const url = `http://api.openweathermap.org/data/2.5/weather?q=` + city + `&units=metric&appid=de7a1829247078d4fed1cb801cd2f95d`;
            fetch(url)
          .then(response => response.json())
          .then(json => {
            
            document.getElementById("main").style.visibility = "visible";
            document.getElementById('city-name').innerHTML = json.name;
            document.getElementById('wind').innerHTML = `Wiatr: ${json.wind.speed} km/h`;
            document.getElementById('temperature').innerHTML = Math.ceil(json.main.temp) + '&deg';
            document.getElementById('humidity').innerHTML = `Wilgotność: ${json.main.humidity} %`;
            document.getElementById('pressure').innerHTML = `Ciśnienie: ${json.main.pressure} hPa`;
                                          
                         
          });
         
        })
    });