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
         var country=ele.name.common;
         divrow.innerHTML+=`<div class="col-lg-4">
         <div class="col-sm-12"></div>
         <div class="card">
           <div class="card-header" id="countryName"><b>${ele.name.common}</b></div>
           <div class="card-body">
              <div class="divimage"> <img src= "${ele.flags.png}" class="card-img" alt="national flag"> </div>
                   <div class="text"><b>Capital :${ele.capital}</b></div>
                   <div class="text"><b>Region :${ele.region}</b></div>
                   <div class="text"><b>Country Code :${ele.cca2}</b></div>
              <div class="wheatherDetails" id="details"></div>     
           </div>
           <button class="btn btn-primary"onclick="weatherData('${country}')">Click for weather</button>
         </div>
       </div>`
       });
};
getweatherData();
async function weatherData(Country){
   console.log(Country);
   let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Country}&appid=87fe926676d0f2ab9b9cda9b1587fb87`)
   let res=await result.json();
   console.log(res);
  document.getElementById("details").innerHTML=`<span><b>Temperature : ${res.main.temp}</b></span>,<br>
                                                <span><b>Pressure : ${res.main.pressure}</b></span>,<br>
                                                <span><b>Humidity : ${res.main.humidity}</b></span>,<br>
                                                <span><b>Wind Speed : ${res.wind.speed}</b></span>`
  }
  
     