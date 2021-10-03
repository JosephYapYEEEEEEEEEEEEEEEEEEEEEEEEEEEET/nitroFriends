var userLink = document.getElementsByTagName('script')[0].baseURI.split("/")[4];
try {
var displayName = document.getElementsByClassName('type-ellip')[1].innerText;
} catch (error) {
var displayName = document.getElementsByClassName('type-ellip')[0].innerText;
}
var userFullLink = 'https://www.nitrotype.com/race/' + userLink;
var btnLocation = document.getElementsByClassName('split split--stack dhf')[0];
//var a = document.getElementsByClassName('header-nav g g--f well well--t')[0];
let hijackedBtn = document.createElement('div');
hijackedBtn.className = 'g-b g-b--2of12';
hijackedBtn.innerHTML = `<a href="/race/" class="btn btn--primary animate--iconSlam"><svg class="icon icon-friends btn-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/dist/site/images/icons/icons.css.svg#icon-friends"></use></svg>Start a Friends Race</a>`;
btnLocation.append(hijackedBtn);
btnLocation.getElementsByClassName('btn btn--primary animate--iconSlam')[0].href = userFullLink;
btnLocation.getElementsByClassName('btn btn--primary animate--iconSlam')[0].innerHTML =
  `<svg class="icon icon-friends btn-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/dist/site/images/icons/icons.css.svg#icon-friends"></use></svg>Join ` +
  displayName +
  "'s Race";
