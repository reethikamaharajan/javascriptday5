function showDateTime(){
    let today=new Date();
    let days=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
    let day=days[today.getDay()];
    let date=today.toLocaleDateString();
    let time=today.toLocaleTimeString();

    document.getElementById("day").innerHTML=day;
    document.getElementById("date").innerHTML=date;
    document.getElementById("time").innerHTML=time;

}
showDateTime();
setInterval(showDateTime,1000);