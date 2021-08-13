const buttonLocation = document.getElementsByClassName("split-cell profile-primaryActions")[0];
const storage = localStorage.getItem("persist:nt");
const user = JSON.parse(JSON.parse(storage)["user"]);
const username = user.username;
const userId = user.userID;
var url = `https://docs.google.com/forms/d/e/1FAIpQLSfA6-4k3oPzEjy4Hr4DJEpy4_HiGXkiMn96ZSORiE3po3lTTA/viewform?usp=pp_url&entry.53606067=${username}&entry.358857370=${userId}`;
var text = document.createElement("div")
text.className = "mysteryBox-title";
text.style = "color: rgba(255, 255, 255, 0.8);"
text.innerText = "Nitro Friends";
buttonLocation.append(text);
var newButton = document.createElement("a");
newButton.className ="btn btn--light btn--outline btn--fw animate--iconSlam well well--b well--s";
newButton.href = url;
newButton.innerText = "Request Custom Badge/Title";
buttonLocation.append(newButton);
