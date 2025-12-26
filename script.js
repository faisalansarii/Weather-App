const searchBtn = document.getElementById("search-icon-btn");

searchBtn.addEventListener("click" , async () => {
    const searchedCity = document.getElementById("search-bar").value;
    console.log(searchedCity);



    const tempKey = "bb38cb4560c7a5dfc9072668e97836cf";
    const tempURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${tempKey}`;

    const aqiKey = "31b3dd2782873efcd80d7704cf32c2df06032b27";
    const aqiURL= `https://api.waqi.info/feed/${searchedCity}/?token=${aqiKey}`;    



    const response1 = await fetch(tempURL);
    const data1 = await response1.json();

    const response2 = await fetch(aqiURL);
    const data2 = await response2.json();


    const body = document.querySelector("body");
    console.log(data1);
    console.log(data2);
});



// ------------------------------------------------------------------------





// ------------------------------------------------------------------------






