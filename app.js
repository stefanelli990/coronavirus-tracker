function currentDate() {
    let d = new Date();
    let current = d.toDateString();
    document.querySelector(".current-date").innerHTML = current;
  }
  currentDate();



//fetching data

fetch('https://corona.lmao.ninja/v2/countries/serbia')
.then((response) => {
    return response.json();

})
.then((data) => {
    document.querySelector('.flag').src = data.countryInfo.flag;
    document.querySelector('.country').textContent = data.country.toLocaleString();
    document.querySelector('.total-cases').textContent = data.cases.toLocaleString();
    document.querySelector('.total-recovered').textContent = data.recovered.toLocaleString();
    document.querySelector('.total-deaths').textContent = data.deaths.toLocaleString();
    document.querySelector('.new-cases').textContent = data.todayCases.toLocaleString();
    document.querySelector('.new-recovered').textContent = data.todayRecovered.toLocaleString();
    document.querySelector('.new-deaths').textContent = data.todayDeaths.toLocaleString();
    console.log(data);
})


