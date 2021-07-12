var first = JSON.parse(JSON.parse(localStorage.getItem("persist:nt"))["user"]);
var third = first.username;
async function getBadges() {
    const apiUrl = 'https://josephyapyeeeeeeeeeeeeeeeeeeeeeeeeeeeet.github.io/supporters.json';
    try {
        response = await fetch(apiUrl);
        data = await response.json();
        getBadgeNames();
    } catch (error) {

    }
}

async function getBadgeNames() {
    const apiUrl = 'https://josephyapyeeeeeeeeeeeeeeeeeeeeeeeeeeeet.github.io/nitro-friends/badgenames.json';
    try {
        badgeResponse = await fetch(apiUrl);
        badgeNames = await badgeResponse.json();
        checkUsername();
    } catch (error) {

    }
}

async function checkUsername() {
    const user = third;
    const expectedUrl = data;
    var isSupporter = false;
    for (let i = 0; i < expectedUrl.length; i++) {
        if (expectedUrl[i].username == user) {
            isSupporter = true;
            badge = expectedUrl[i].badge;
        }
    }
    if (isSupporter) {
        loadBadges(badge);
    }
}

async function loadBadges(badge) {
    const usernameLocation = document.getElementsByClassName("profile-username")[0].getElementsByClassName("df df--align-center")[0];
    var badgeIcon = document.createElement("div");
    badgeIcon.className = "prxxs mtxxs";
    var badgeImg = document.createElement("img");
    badgeImg.alt = `${badgeNames[badge]}`;
    badgeImg.className = "icon icon-nt-gold-l";
    badgeImg.src = `https://josephyapyeeeeeeeeeeeeeeeeeeeeeeeeeeeet.github.io/nitro-friends/${badge}.png`;
    badgeImg.style = "height: 40px; width: 40px;";
    badgeIcon.append(badgeImg);
    usernameLocation.prepend(badgeIcon);
}
getBadges();