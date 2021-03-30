var p = document.getElementsByTagName('script')[0].baseURI.split("/")[4];
try {
var z = document.getElementsByClassName('type-ellip')[1].innerText;
} catch {
var z = document.getElementsByClassName('type-ellip')[0].innerText;
}
var g = 'https://www.nitrotype.com/race/' + p;
var q = document.getElementsByClassName('split split--stack dhf')[0];
var a = document.getElementsByClassName('header-nav g g--f well well--t')[0];
let d = document.createElement('div');
d.className = 'g-b g-b--2of12';
d.innerHTML = `<a href="/race/" class="btn btn--primary animate--iconSlam"><svg class="icon icon-friends btn-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/dist/site/images/icons/icons.css.svg#icon-friends"></use></svg>Start a Friends Race</a>`;
q.append(d);
q.getElementsByClassName('btn btn--primary animate--iconSlam')[0].href =
  'https://www.nitrotype.com/race/' + p;
q.getElementsByClassName('btn btn--primary animate--iconSlam')[0].innerHTML =
  `<svg class="icon icon-friends btn-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/dist/site/images/icons/icons.css.svg#icon-friends"></use></svg>Join ` +
  z +
  "'s Race";

// setTimeout(() => {}, 20);
