let keyApi = "5f8d758bbacdd93d02768483d3b5dfbf";
let Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let inp = document.querySelector("input");
let btn = document.getElementById("searchBtn");
let tem_Detail = document.querySelector(".tem_Detail");
let tem_Icon = document.querySelector(".tem_Icon");
let tem_Id = document.querySelector(".tem_Id");
let tem_Main = document.querySelector(".tem_Main");
let tem_City = document.querySelector(".tem_City");

btn.addEventListener("click" , ()=>{
    fetchData(inp.value)
});

async function fetchData(city){
try{
    let rep = await fetch(Url + city + `&appid=${keyApi}`);
    let dataFind = await rep.json();
    // console.log(dataFind);
    if (dataFind.weather && dataFind.weather.length > 0) {
        let dic = dataFind.weather[0].description;
        let icon = `https://openweathermap.org/img/wn/${dataFind.weather[0].icon}.png`;
        let id = dataFind.weather[0].id;
        let main = dataFind.main.temp;
        tem_Detail.innerHTML = dic;
        tem_Icon.src = icon;
        tem_Id.innerHTML = id;
        tem_Main.innerHTML = main + '°c';
        tem_City.innerHTML = city ;
    } else {
        tem_Detail.innerHTML = "Weather data not found";
        tem_Icon.src = "";
        tem_Id.innerHTML = "";
        tem_Main.innerHTML = "";
    }
}
catch(err){
    console.log("error is : ", err);
}
}
if(inp.value == ""){
    fetchData("lahore")
}

