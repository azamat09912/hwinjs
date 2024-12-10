document.querySelector("#title").textContent = "HW: Introduction to DOM";

document.getElementById("name").textContent = "Galymbek Batyrbek";

let hobbies = document.getElementsByClassName("hobby");
hobbies[0].innerHTML = "<b>Coding</b>";
hobbies[1].innerHTML = "<b>Teaching</b>";
hobbies[2].innerHTML = "<b>Reading</b>";
