const divcontainer=document.createElement("div");
 divcontainer.setAttribute("class","container");

 const divrow=document.createElement("div");
 divrow.setAttribute("class","row");

// divcontainer.append(divrow);


async function getweatherData(){
     let restCountries=await fetch(`https://restcountries.com/v3.1/all`);
     let countrieData=await restCountries.json();
     console.log(countrieData);
  
      countrieData.map((ele)=>{
         newcontainer=document.createElement("div")
         newcontainer.setAttribute("class","row");
         // console.log(ele.name.common);
         var country=ele.name.common;
         // console.log(country);
         newcontainer.innerHTML=`<div class="col-lg-4">
         <div class="col-sm-12"></div>
         <div class="card">
           <div class="card-header" id="countryName"><b>${ele.name.common}</b></div>
           <div class="card-body">
              <div class="divimage"> <img src= "${ele.flags.png}" class="card-img" alt="national flag"> </div>
                   <div class="text"><b>Capital :${ele.capital}</b></div>
                   <div class="text"><b>Region :${ele.region}</b></div>
                   <div class="text"><b>Country Code :${ele.cca2}</b></div>
              <div class="wheatherDetails"></div>     
           </div>
           <button class="btn btn-primary"onclick="weatherData(${country})">Click for weather</button>
         </div>
       </div>`
      divcontainer.append(newcontainer);
      document.body.append(divcontainer);
       });
       let wheatherCountry=document.getElementById("countryName");
       async function weatherData(wheatherCountry){
          console.log(wheatherCountry);
          let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${wheatherCountry}&appid=87fe926676d0f2ab9b9cda9b1587fb87`)
          let res=await result.json();
          console.log(res);
         }
      //   countryWheatherData("india");
    //  const cityname=countrieData[0].name.common
    //  console.log(cityname);
    //  let weatherApi=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=87fe926676d0f2ab9b9cda9b1587fb87`)
    //  let weatherData=await weatherApi.json();
    //  console.log(weatherData);
    //  let temperature=weatherData.main.temp
    //  console.log(temperature)
    //  let pressure=weatherData.main.pressure
    //  console.log(pressure)
    //  let windSpeed=weatherData.wind.speed
    //  console.log(windSpeed);
};
getweatherData();