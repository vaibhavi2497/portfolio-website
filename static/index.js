var tablinks = document.getElementsByClassName('tab-links')
var tabcontains = document.getElementsByClassName('tab-contents')

function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for (tabcontain of tabcontains){
        tabcontain.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

