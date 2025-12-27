const body = document.querySelector("body");
const main = document.getElementById("main");

const searchBtn = document.getElementById("search-icon-btn");
const searchBar = document.getElementById("search-bar");

const temperature = document.getElementById("temperature");
const cityName = document.getElementById("city-name");

const humidity = document.getElementById("humidity-rate");
const aqi = document.getElementById("aqi-rate");

const description = document.getElementById("description-text");



searchBtn.addEventListener("click" , async () => {

    const searchedCity = document.getElementById("search-bar").value;
    console.log(searchedCity);


    if(!searchedCity) {
        alert("ENTER CITY NAME!");
    }
    else {
        
        const tempKey = "bb38cb4560c7a5dfc9072668e97836cf";
        const tempURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${tempKey}`;
    
        const aqiKey = "31b3dd2782873efcd80d7704cf32c2df06032b27";
        const aqiURL= `https://api.waqi.info/feed/${searchedCity}/?token=${aqiKey}`;    
    
    
    
        const response1 = await fetch(tempURL);
        const data1 = await response1.json();
    
        const response2 = await fetch(aqiURL);
        const data2 = await response2.json();
    

        const {cod : isError , message} = data1;
        const {data , status} = data2;
        

        if(isError === "404" || status === "error") {
            alert("CITY NOT FOUND!");
            searchBar.value = "";
            return;
        }


        
        
        
        const displayTemp = data1.main.temp-273.15;
        temperature.innerText = Math.round(displayTemp) + "°C";

        // if(Math.round(displayTemp) >= 30) {
        //     main.style.backgroundImage = "url('hot.avif')";
        //     main.style.backgroundSize = "cover";
        //     main.style.backgroundRepeat = "no-repeat";
        // }



        cityName.innerText = data1.name;
        
        humidity.innerText = data1.main.humidity + "%";
        aqi.innerText = data2.data.aqi;

        description.innerText = data1.weather[0].description;


        console.log(data1);
        console.log(data2);
        
    }

});



// ------------------------------------------------------------------------





// ------------------------------------------------------------------------






