// Go to Top
var gotoTopButton = document.getElementById("topButton");
window.onscroll = function() {scrollFunction()};


// Filter Projects
filterSelection("all", document.getElementsByClassName("active")[0]) // show all projects by default

// Project Modals
var modal = document.getElementById("projectModal");
window.onclick = function(event) {
    if(event.target == modal) this.modal.style.display = "none";
}

// Modal Functions
function closeModal() {
    modal.style.display = "none";
}
function openModal(project) {
    modal.style.display = "block";
    gotoTopButton.style.display = "none";
}


//Filtering Functions
function filterSelection(c, event) {
    var x,i, btns;x
    x = document.getElementsByClassName("item");
    btns = document.getElementsByClassName("btn");
    if(c == "all") c = "";
    for(i=0; i<x.length; i++) {
        if(x[i].className.indexOf(c) > -1) RemoveFromClasses(x[i], "hide");
        else AddToClasses(x[i], "hide");
    }
    for(i=0; i<btns.length; i++) {
        if(btns[i].className.indexOf("active") > -1) RemoveFromClasses(btns[i], "active");
    }
    event.className = event.className + " " + "active";
}

function RemoveFromClasses(element, name) {
    var arr;
    arr = element.className.split(" ");
    while (arr.indexOf(name) > -1) {
        arr.splice(arr.indexOf(name), 1);
    }
    element.className = arr.join(" ");
}

function AddToClasses(element, name) {
    var arr;
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += " " + name;
    }
}



// Go to Top Button Function
function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        gotoTopButton.style.display = "block";
    }
    else {
        gotoTopButton.style.display = "none";
    }
}

function gotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Responsive Menu Button Functions
function openMenu() {
    document.getElementById('nav').style.display = 'table';
    document.getElementById('menu_trigger').onclick = closeMenu;
}

function closeMenu() {
    document.getElementById('nav').style.display = 'none';
    document.getElementById('menu_trigger').onclick = openMenu;
}