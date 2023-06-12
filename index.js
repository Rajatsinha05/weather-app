let tempui = ``;

const ui = (weather) => {
  console.log(weather);

  let uiobj  = {
    clouds: "https://media2.giphy.com/media/V4ErRLRQG2lfKOjIht/giphy.gif",
    rain: "https://i.pinimg.com/originals/4d/06/8f/4d068f4a98aba7a356e14637c23fb3fe.gif",
    sun: "https://media0.giphy.com/media/ctGFLebG1AqK4/200w.gif?cid=6c09b9523ex80czbi71fcb0ddwv6rznnsckbws0skdk0h1p4&ep=v1_gifs_search&rid=200w.gif&ct=g",
    haze:"https://media.tenor.com/bnvs-f9hunUAAAAC/greys-anatomy-foggy.gif"
  };
let url=''
  if(weather.weather[0].main=="Clouds"){
    console.log(uiobj.clouds);
url=uiobj.clouds
  }

  tempui = ` <div class="app">
<div class="header"  >


  <span class="city">
        ${weather.name}
        <i class="fa fa-map-marker"></i>
        <span class="today">Today</span>
  </span>
  <span class="weather">
        <span class="temp">
          ${weather.main.temp}<sup>&deg;</sup>
          <span class="unit">c</span>
  </span>
  <span class="wind-scale">
          <table>
            <tr>
              <td>Wind Direction</td>
              <td>
                <i class="wi wi-wind towards-45-deg"></i>
              </td>
            </tr>
            <tr>
              <td>Wind Scale</td>
              <td>
                <i class="wi wi-wind-beaufort-7"></i>
              </td>
            </tr>
          </table>
        </span>
  <i class="wi wi-night-sleet"></i>
  <span class="time">
          <i class="wi wi-time-3"></i>
        </span>
  <span class="day">Monday</span>
  </span>
</div>
<div class="body">
  <span class="title">Weather Stats</span>
  <div class="graph">
    <ul>
      <li class="graph-knob-mt-26">
        <span class="graph-temp">
              <i class="wi wi-night-cloudy"></i>
              26<sup>&deg;</sup>
            </span> 23
      </li>
      <li class="graph-knob-mt-25">
        <span class="graph-temp">
              <i class="wi wi-lightning"></i>
              25<sup>&deg;</sup>
            </span> 24
      </li>
      <li class="graph-knob-mt-28">
        <span class="graph-temp">
              <i class="wi wi-night-cloudy-gusts"></i>
              28<sup>&deg;</sup>
            </span> 25
      </li>
      <li class="today graph-knob-mt-22">
        <span class="graph-temp">
              <i class="wi wi-night-sleet"></i>
              22<sup>&deg;</sup>
            </span> 26
      </li>
      <li class="graph-knob-mt-20">
        <span class="graph-temp">
              <i class="wi wi-night-alt-thunderstorm"></i>
              20<sup>&deg;</sup>
            </span> 27
      </li>
      <li class="graph-knob-mt-18">
        <span class="graph-temp">
              <i class="wi wi-smoke"></i>
              18<sup>&deg;</sup>
            </span> 28
      </li>
    </ul>
  </div>
</div>

</div>`;


 
document.querySelector(".container").innerHTML=tempui



};

//  api calling function by name
const getweather = (city) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b4c426c91009e3429c4af53c61fd6e9c&units=metric`
  )
    .then((res) => res.json())
    .then((data) => ui(data));
};

// api calling functions by lat and lon

const get = (lat, lon) => {
  console.log(lat, lon);
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=21.2315303&lon=72.8189943&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric"
  )
    .then((res) => res.json())
    .then((data) => ui(data));
};

// city name
document.getElementById("city").addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    let city = document.getElementById("city").value;
    console.log(city);
    getweather(city);
  }
});

navigator.geolocation.getCurrentPosition((postion) => {
  let lat = postion.coords.latitude;
  let lon = postion.coords.longitude;
  console.log(lat, lon);
  get(lat, lon);
});
