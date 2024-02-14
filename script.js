document.addEventListener("DOMContentLoaded",function())
{
    const apikey='Your_API_KEY';
    const apiUrl='https://api.openweathermap.org/data/2.5/weather?q=CityName&appid='+apikey;

}

fetch(apiUrl).then(response => response.json()).then(data=> 
    {
     const location =data.name+','+data.sys.country;
     const temperature = Math.round(data.main.temp - 273.15)+'AC';
     const description = data.weather[0].description;
     document.getElementById('location').innerText = location);
     document.getElementById('temperature').innerText = temperature);
     document.getElementById('description').innerText = description);
    }).catch(error)=>console.error('Error Fetching weather data',error));
    
     

