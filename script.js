const API='077d7f88aa9653d0f54b15f6a2764fec';
const BASE_URL=`https://maps.openweathermap.org/maps/2.0/weather/1h/{op}/{z}/{x}/{y}?appid={API key}`;

const  search= document.querySelector('.search ');
const btn=document.querySelector('form button ');
const City=document.querySelectorAll('.city');
const temperature=document.querySelector('.temp');
const date=document.querySelector('.date');
const time=document.querySelector('.time');
const condition=document.querySelector('.condition');
const cityName=document.querySelector('.name');
const icon=document.querySelector('.icon');
const wind=document.querySelector('.wind');
const humid=document.querySelector('.humidity');
const cloud=document.querySelector('.cloud');
const form=document.querySelector('#locationInput');



let cityInput='Delhi';

for(let cities of City){
    cities.addEventListener('click',(e)=>{
        search.value=e.target.innerText;
              
    })    
}

 btn.addEventListener('click',async (event)=>{

    event.preventDefault();
    if(event.value!==''){
    fetchWeatherData();
    }
    else{
        alert("Please fill the city name!!!");
    }
 });


 const fetchWeatherData=async ()=>{
   const URL=`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=077d7f88aa9653d0f54b15f6a2764fec&units=metric`;
   let response=await fetch(URL);
   let data=await response.json();
   temperature.innerText=data.main.temp +'°C';
   cityName.innerText=data.name;
   condition.innerText=data.weather[0].main;
   humid.innerText=data.main.humidity+"%";
   wind.innerText=data.wind.speed+' km/hr';
   cloud.innerText=data.clouds.all+'%';
   cityName.innerText=search.value;
   const currdate=data.dt;
   const timeStamp=currdate*1000;
   const today= new Date(timeStamp);
const localTime = new Date().getTime();
const localOffset = new Date().getTimezoneOffset() * 60000;
const currentUtcTime = localOffset + localTime;
const cityOffset = currentUtcTime + 1000 * data.timezone;
const cityTime = new Date(cityOffset).toLocaleTimeString();
const cityDate = new Date(cityOffset).toDateString();
date.innerText=cityDate;
time.innerText=cityTime;
    icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
   console.log(data);
   
   
 }

// fetchWeatherData();