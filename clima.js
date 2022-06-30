function consultaClima() {
    let ciudad = document.getElementById("ciudad").value;
  
    const options = {
      method: "GET"
    };
    
    // Petición HTTP
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=96ddeac7568d65fa1431f5838aa93523`, options)
      .then(response => {return response.text()})
      .then(data => {
        //convertimos formato json cadena en objeto de javascript
        let infoClima = JSON.parse(data);
        console.log(infoClima.weather[0].icon);
        document.getElementById("temperatura").innerHTML = parseInt(infoClima.main.temp-(273.15))+"°C", infoClima.weather[0].icon;
        document.getElementById("icono").setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)
        console.log(infoClima.weather[0].main);
        document.getElementById("humedad").innerHTML = infoClima.main.humidity, infoClima.weather[0].main;//`<strong>humedad:${humidity}</strong>`//
        document.getElementById("vel.viento").innerHTML = infoClima.wind.speed, infoClima.weather[0].icon;//`<strong>viento:${wind}</strong>`//
      }).catch((err) => {console.log("Info error: ", err);})
  }