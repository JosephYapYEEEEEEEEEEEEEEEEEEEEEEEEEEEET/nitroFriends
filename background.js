// function sayHi() {
//     //document.body.style.backgroundColor = 'red';
//     //document.alert("Hello, World!");
//     document.body.innerHTML = "TESTING"
// }


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    try {
        console.log(tab.url)
        injectRaceFriends(changeInfo, tab)
        injectRaceHijack(changeInfo, tab)
    } catch (error) {};

});


function checkTab(changeInfo, tab, checkUrl) {
    if (isLoaded(tab.url == checkUrl, changeInfo)) {
        return true;
    }
    return false;
}

function checkBaseTab(changeInfo, tab, checkUrl) {
    if (isLoaded(getLocation(tab.url).hostname == checkUrl, changeInfo)) return true;
    return false;
}

function injectRaceFriends(changeInfo, tab) {
    if (checkBaseTab(changeInfo, tab, "www.nitrotype.com")) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            files: ["js/garage/injectRaceFriends.js"]
        })
    }
}

function injectRaceHijack(changeInfo, tab) {
    if (checkTab2(changeInfo, tab, "www.nitrotype.com", "racer")) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            files: ["js/garage/injectRaceHijack.js"]
        })
    }
}

function checkTab2(changeInfo, tab, checkUrl, checkUrl2) {
    if (getLocation(tab.url).pathname.split('/')[1] == checkUrl2 && checkBaseTab(changeInfo, tab, checkUrl)) {
        return true;
    }
    console.log(false)
    return false;
}


function getLocation(href) {
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
        href: href,
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
    }
}



function isLoaded(condition, checkInfo) {
    if (checkInfo.status == "complete" && condition) return true;
    return false
}