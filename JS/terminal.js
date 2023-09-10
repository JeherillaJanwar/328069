let userInput, terminalOutput;
let projAsk = false;
let lastCommands = [];

const COMMANDS = {
  n: "Ok, cool",
  no: "Ok, cool",
  about:
    "Hi, I am Ishaan<br>I'm a life long learner,<br> with interests in physics, math and coding (its fun) <br> Feel free to visit my <a href ='https://github.com/JeherillaJanwar' target='_blank' style='color:#000;'> github</a>.",
  ls: "usr&nbsp;&nbsp;&nbsp;&nbsp;home&nbsp;&nbsp;&nbsp;&nbsp;var&nbsp;&nbsp;&nbsp;&nbsp;root",
  cd: "changed directory to root..",
  "cd ..": "cd: no such file or directory",
  "cd var": "var aliased to ../",
  "cd root": "access denied",
  "cd usr": "no can do",

  "cd home": "home was aliased to .",
  sudo: "user not in the sudoers file.  This incident will be reported.",
  help: 'Supported commands: <span class="code">about</span>, <span class="code">info</span>, <span class="code">skills</span>, <span class="code">contact</span>, <span class="code">projects</span>, <span class="code">github</span><br>System commands: <span class="code">clear</span>, <span class="code">history</span>, <span class="code">cd</span>, <span class="code">ls</span><br>Tip: Use Up / Down arrow to go through recent commands',
  info: "<span class='aboutHead'>Name:</span> Ishaan Sharma<br><span class='aboutHead'>Location:</span> United States<br><span class='aboutHead'>Favourites:</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class='aboutTail'>Os</span>: ChromeOS, MacOs&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class='aboutTail'>Editor</span>: VSCODE, XCODE<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class='aboutTail'>Version Control</span>: Git<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class='aboutTail'>Tabs or Spaces</span>: Depends usually <i>Tabs</i><br>&nbsp;&nbsp;&nbsp;&nbsp;",
  skills:
    '<span class="skills">Languages:</span> Swift, Python, HTML, CSS, SCSS, JavaScript<br><span class="skills">Technologies:</span> ChromeOS, WindowOS, macOS, Linux, iOS<br><span class="skills">Frameworks:</span> SwiftUI, UIKIT, Cocoa<br><span class="skills">Other:</span> Terminal, Office 365.',

  contact:
    "Email: <a class='link' href='mailto:askishaan.sh@gmail.com'>askishaan.sh@gmail.com</a><br>Alternative: <a href='pages/contact.html' class='link'>Fill out this form...</a><br>",
};

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  input = input.toLowerCase();
  lastCommands.push(input);
  let output;
  if (input.length === 0) {
    return;
  }
  if (input.indexOf("sudo") >= 0) {
    input = "sudo";
  }

  if (input == "projects") {
    open("pages/projects.html");
  } else if (input === "clear" || input === "cls") {
    clearScreen();
  } else if (input === "history") {
    showHist();
  } else if (input === "github") {
    open("https://github.com/JeherillaJanwar");
  } else {
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">command not found: ${input}</div>`;
    } else {
      output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<br><div class="terminal-line">${output}<br></div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
};

const key = (e) => {
  const input = userInput.innerHTML;

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = (e) => {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1,
  );
};

function showHist() {
  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${lastCommands.join(", ")}</div>`;
}

let iter = 0;
const up = (e) => {
  if (e.key === "ArrowUp") {
    if (lastCommands.length > 0 && iter < lastCommands.length) {
      iter += 1;
      userInput.innerHTML = lastCommands[lastCommands.length - iter];
    }
  }

  if (e.key === "ArrowDown") {
    if (lastCommands.length > 0 && iter > 1) {
      iter -= 1;
      userInput.innerHTML = lastCommands[lastCommands.length - iter];
    }
  }
};

function clearScreen() {
  location.reload();
}
document.addEventListener("keydown", up);

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
