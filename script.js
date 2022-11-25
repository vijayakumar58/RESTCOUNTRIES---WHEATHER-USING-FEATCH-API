const divcontainer=document.createElement("div");
 divcontainer.setAttribute("class","container");

 const divrow=document.createElement("div");
 divrow.setAttribute("class","row");

divcontainer.append(divrow);
document.body.append(divcontainer);

async function getweatherData(){
     let restCountries=await fetch(`https://restcountries.com/v3.1/all`);
     let countrieData=await restCountries.json();
     console.log(countrieData);
  
      countrieData.map((ele)=>{
         // console.log(ele);
         divrow.innerHTML+=`<div class="col-lg-4">
         <div class="col-sm-12"></div>
         <div class="card">
           <div class="card-header">${ele.name.common}</div>
           <div class="card-body">
               <img src=${ele.flags.png}class="card-img" alt="national flag">
                   <div class="text">Capital :${ele.capital}</div>
                   <div class="text">Region :${ele.name.region}</div>
                   <div class="text">Country Code :${ele.cca2}</div>
           </div>
           <button class="btn btn-primary">Click for weather</button>
         </div>
       </div>`
      //  let weatherApi=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ele.name.common}&appid=87fe926676d0f2ab9b9cda9b1587fb87`)
      //  let weatherData=await weatherApi.json();
      //  console.log(weatherData);
      //  let temperature=weatherData.main.temp
      //  console.log(temperature)
      //  let pressure=weatherData.main.pressure
      //  console.log(pressure)
      //  let windSpeed=weatherData.wind.speed
      //  console.log(windSpeed);
      });
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