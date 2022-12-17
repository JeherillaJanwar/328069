var getIP;
let typed = "";
const element = document.querySelector(".typity");

function startType(pun, index) {
    if (index < pun.length) {
        typed += pun.charAt(index);
        element.innerHTML = typed;
        index++;
        setTimeout(function() {
            startType(pun, index);
        }, 50);
    } else {
        setTimeout(function() {
            element.classList.add("highlight");
        }, 4000);

        setTimeout(function() {
            element.classList.remove("highlight");
            typed = "";
            element.innerHTML = typed;
            startType(getRandomPun(), 0);
        }, 5000);
    }
}

function getRandomPun() {
    const puns = [
        "to program.",
        "to solve problems.",
        "to automate stuff.",
        "to work on projects.",
        "to build iOS Apps.",
        "to look at designs.",
        "to test new features.",
        "to ship amazing products.",
        "to scrape the web.",
        "memes.",
        "meditating.",
        "to sleep.",
        "git.",
        "learning new things.",
        "Machine Learning.",
        "to swim."
    ];
    const index = Math.floor(Math.random() * puns.length);

    return puns[index];
}

startType(getRandomPun(), 0);

let sentStuff = false

function shareBtnPressed() {

    document.getElementById("notification").innerHTML =
        "Failed to copy link to clipboard";
    navigator.clipboard.writeText(window.location.href).then(() => {
        document.getElementById("notification").innerHTML =
            "Copied URL to clipboard";
    });
    document.getElementById("notification").style.animation = "nanimation 5s 1";

    setTimeout(function() {
        document.getElementById("notification").style.animation = "";
    }, 5000);
}

function getIP(json) {
    notifyRobot(json.ip)
}

function notifyRobot(ip) {
    if (sentStuff) {
        return
    }
    var params = {
        username: "Visit Alert",
        avatar_url: "",
        "embeds": [{
            "title": "Visit Alert!",
            "description": `<@982638868459290644> Someone visited your i-328069 site from ${ip}`,
            "color": 1127128,
            "url": "https://jeherillajanwar.github.io/328069/"
        }]
    }
    // rarely...
    if (ip == "" || ip == undefined) {
        params = {
            username: "My Webhook Name",
            avatar_url: "",
            content: `<@982638868459290644> Someone visited your jeherillajanwar.github.io/328069 site`
        }
    }
    
    const request = new XMLHttpRequest();
    request.open("POST", ${{ env.webhook }});
    sentStuff = true;
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(params));
}


window.onload = function() {
    window.scrollTo(0, 0);
    notifyRobot("")
}

//  HERE's THE CONFETTI 
var duration = 10 * 650;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 25, spread: 360, ticks: 60, zIndex: 2 };

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 120 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);
