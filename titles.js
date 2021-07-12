var response2;
var data2;
var title;
var titleNames;
var titleResponse2;

async function getTitles() {
    const apiUrl = 'https://josephyapyeeeeeeeeeeeeeeeeeeeeeeeeeeeet.github.io/nitro-friends/titleusers.json';
    try {
        response2 = await fetch(apiUrl);
        data2 = await response2.json();
        getTitleNames();
    } catch (error) {

    }
}

async function getTitleNames() {
    const apiUrl = 'https://josephyapyeeeeeeeeeeeeeeeeeeeeeeeeeeeet.github.io/nitro-friends/titles.json';
    try {
        titleResponse2 = await fetch(apiUrl);
        titleNames = await titleResponse2.json();
        checkUsername2();
    } catch (error) {

    }
}

async function checkUsername2() {
    const url = document.baseURI;
    const user = url.split("/")[4];
    const expectedUrl = data2;
    var isSupporter = false;
    for (let i = 0; i < expectedUrl.length; i++) {
        if (expectedUrl[i].username == user) {
            isSupporter = true;
            title = expectedUrl[i].title;
        }
    }
    if (isSupporter) {
        loadTitles(title);
    }
}

async function loadTitles(title) {
    const username2Location = document.getElementsByClassName("split split--start")[1].getElementsByClassName("split-cell")[0];
    var titleDisplay = document.createElement("div");
    titleDisplay.className = "profile-title";
    titleDisplay.innerHTML = `${titleNames[title]}`;
    titleDisplay.title = "Added by Nitro Friends"
    username2Location.append(titleDisplay);
}
getTitles();