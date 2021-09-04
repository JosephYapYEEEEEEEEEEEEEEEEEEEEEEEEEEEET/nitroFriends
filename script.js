

const nav_list = document.getElementsByClassName("nav-list")[0]
const version = "0.3.11";
var dataJ;
var nitro = JSON.parse(JSON.parse(localStorage.getItem("persist:nt"))["user"]).username;
var af = document.getElementsByClassName("nav-list-item")[4];
var ag = af.getElementsByClassName("nav-link")[0].href;
if (ag == "https://www.nitrotype.com/class") {
    af.remove();
}

//start of version
async function getVersions() {
    const apiUrl = 'https://josephyapyeeeeeeeeeeeeeeeeeeeeeeeeeeeet.github.io/nitroFriendsAPI.json';
    try {
        const response = await fetch(apiUrl);
        dataJ = await response.json();
        displayData();
    } catch (error) {

    }
}

async function displayData() {
    if (!(dataJ.version_check[dataJ.version_check.length - 1] == version)) {
        nav_list.innerHTML = `<li class="nav-list-item"><a href="https://josephyapyeeeeeeeeeeeeeeeeeeeeeeeeeeeet.github.io/nitro-friends/update-available?version=${version}" class="nav-link">Update to ${dataJ.version_check[dataJ.version_check.length - 1]}</a></li>`;
    }

}
getVersions();



// end of version
if (nitro == undefined){
} else{
    var header = document.getElementsByClassName("header-nav g g--f well well--t")[0];
let div = document.createElement("div");
div.className = "g-b g-b--2of12";
div.style = "width: 20%; max-width: 20%;";
div.innerHTML = `<a href="/race/" class="btn btn--primary animate--iconSlam"><svg class="icon icon-friends btn-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/dist/site/images/icons/icons.css.svg#icon-friends"></use></svg>Start a Friends Race</a>`;
header.append(div);
document.getElementsByClassName("g-b g-b--10of12")[0].style = "width: 63.33333%; max-width: 63.33333%;";
document.getElementsByClassName("btn btn--primary animate--iconSlam")[1].href = "https://www.nitrotype.com/race/" + nitro;
}
