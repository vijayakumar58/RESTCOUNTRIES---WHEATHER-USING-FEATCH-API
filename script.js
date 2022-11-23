async function getweatherData(){
     let restCountries=await fetch(`https://restcountries.com/v3.1/all`);
     let countrieData=await restCountries.json();
     console.log(countrieData);
 
     const cityname=countrieData[0].name.common
     console.log(cityname);
     const flag=countrieData[0].flags.png
     console.log(flag);
     let flags=document.getElementsByClassName("card-img");
        flags.item=flags
     let weatherApi=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=87fe926676d0f2ab9b9cda9b1587fb87`)
     let weatherData=await weatherApi.json();
     console.log(weatherData);
     let temperature=weatherData.main.temp
     console.log(temperature)
     let pressure=weatherData.main.pressure
     console.log(pressure)
     let windSpeed=weatherData.wind.speed
     console.log(windSpeed);
};
getweatherData();