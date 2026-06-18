// ======================
// About Section Tabs
// ======================

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {

    // Remove active class from all tabs
    for (let tablink of tablinks) {
        tablink.classList.remove("active-links");
    }

    // Hide all tab contents
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Activate clicked tab
    event.currentTarget.classList.add("active-links");

    // Show selected content
    document.getElementById(tabname).classList.add("active-tab");
}


// ======================
// Mobile Menu
// ======================

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// ===============================
// Typed.js Animation
// ===============================
new Typed("#typing", {
    strings: [
        "Full Stack Developer",
        "React Developer",
        "Python Developer",
        "PHP Developer",
        "Frontend Developer"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// Smooth Scroll

document.querySelectorAll('.btn').forEach(button => {

    button.addEventListener('click', function(e){

        const target = this.getAttribute('href');

        if(target.startsWith('#')){

            e.preventDefault();

            document.querySelector(target).scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});


const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animate(){

    currentX += (mouseX-currentX)*0.12;
    currentY += (mouseY-currentY)*0.12;

    glow.style.left=currentX+"px";
    glow.style.top=currentY+"px";

    requestAnimationFrame(animate);

}

animate();



// ======================
// Image Popup
// ======================
const profileImage = document.getElementById("profileImage");
const imageModal = document.getElementById("imageModal");
const fullImage = document.getElementById("fullImage");
const closeImage = document.querySelector(".close-image");

// Open image
profileImage.addEventListener("click", () => {

    imageModal.style.display = "flex";
    fullImage.src = profileImage.src;

});

// Close button
closeImage.addEventListener("click", () => {

    imageModal.style.display = "none";

});

// Close when clicking outside image
imageModal.addEventListener("click", (e) => {

    if(e.target === imageModal){

        imageModal.style.display = "none";

    }

});

// ESC key closes popup
document.addEventListener("keydown", (e)=>{

    if(e.key==="Escape"){

        imageModal.style.display="none";

    }

});



// ======================
// Contact Form Feedback
// ======================
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    msg.style.color = "#fff";
    msg.innerHTML = "Sending...";

    const formData = new FormData(form);

    try{

        const response = await fetch(form.action,{
            method:"POST",
            body:formData
        });

        if(response.ok){

            msg.style.color = "#00ff99";
            msg.innerHTML = "✅ Message sent successfully!";

            form.reset();   // Clears all fields

            setTimeout(()=>{
                msg.innerHTML = "";
            },4000);

        }else{

            msg.style.color = "red";
            msg.innerHTML = "❌ Failed to send message.";

        }

    }catch(error){

        msg.style.color = "red";
        msg.innerHTML = "❌ Something went wrong.";

    }

});