async function getweatherData(){
     let restCountries=await fetch(`https://restcountries.com/v3.1/all`);
     let countrieData=await restCountries.json();
     console.log(countrieData);
 
     const cityname=countrieData[0].name.common
     const flag=countrieData[0].flags.png
     console.log(flag);
     let flags=document.getElementsByClassName("card-img");
     
     let weatherApi=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=87fe926676d0f2ab9b9cda9b1587fb87`)
     let weatherData=await weatherApi.json();
     console.log(weatherData);
}
getweatherData();