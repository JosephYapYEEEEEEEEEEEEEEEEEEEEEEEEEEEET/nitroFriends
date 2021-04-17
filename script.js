var nitro = document.getElementsByClassName("db type-ellip type-ellip--account")[0].innerText;
if (nitro == undefined){
} else{
    var header = document.getElementsByClassName("header-nav g g--f well well--t")[0];
let div = document.createElement("div");
div.className = "g-b g-b--2of12";
div.style = "padding-left: 0px";
div.innerHTML = `<a href="/race/" class="btn btn--primary animate--iconSlam"><svg class="icon icon-friends btn-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/dist/site/images/icons/icons.css.svg#icon-friends"></use></svg>Start a Friends Race</a>`;
header.append(div);

document.getElementsByClassName("btn btn--primary animate--iconSlam")[1].href = "https://www.nitrotype.com/race/" + nitro;
}
