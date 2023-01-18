// text Constants

const aboutme =
  "I'm originally from Toronto, Ontario, Canada, Home of the Raptors the 2019 NBA Champs!! I joined the Royal Canadian Navy in 2016 and was posted to BC. I proudly served for 6 years, unfortunately in 2022 I could no longer be a Sailor. I've always been interested in Sofware and Web Development, but that interest really took off once I left the Navy. I am really excited to see what the future holds for me in this field. <br> I very rarely take things too seriously. Life is already such a grind, and since none of us make it out alive I might as well have some fun.";

const faqAndA =
  "<dl><dt>Do you have any formal training with regards to coding?</dt> <dd>Yes and No. I took some courses at WithYouWithMe and Udemy initially. After I retired from the Navy in 2022 I enrolled in the Coding for Veterans Program through the University of Ottawa</dd><dt>Where is the best place for Fried Chicken in Victoria?</dt> <dd>My top 3 are Chicken 649, Chicken on the Run and Chimac</dd> <dt>What do you do when you're not clacking away on the keyboard?</dt> <dd>You can usually find me swimming, playing video games or noodling around on the french horn. (I'm not very good but it's fun, for me not the neighbours.)</dd><dt>When you were in the Navy did you ever deploy?</dt><dd>Yes! In 2019 I deployed and visited 9 countries over 6.5 months; I got a tattoo in every port to commemorate the trip.</dd> <dt>I have sooo many more questions can I contact you?</dt> <dd>Absolutely! My DM's are pretty open, you can ask me about my time in the Navy, my life before and what I'm up to now! I do recommend that any professional inquiries are best sent through email. Check out my Contact section to see how to get at me.</dd>";

const getAtMe =
  "<h4>Email</h4> <p><a href='mailto:val.bustros@gmail.com'> Val Bustros</a></p><br><hr><h4>LinkedIn</h4><p><a href='https://www.linkedin.com/in/val-bustros-1715b6234/'>Val Bustros</a></p><br><hr> <h4>Discord</h4><p><a href='https://discordapp.com/users/BLVMF#7257'>BLVMF #7257</a></p>"

// Hides the div Show-me on load
window.onload = function () {
  document.getElementById("show-me").style.display = "none";
};

// Remove class

function moveItUp(){
  const barry = document.getElementById("whatup")
  
  if(barry.innerHTML === "Frequently Asked Questions"){
    barry.classList.remove("up");    
  } else { 
    barry.classList.add("up")
  }
}
  
 
// ABOUT ME FUNCTION


function changetext(id) {
  if (id == "about") {

    var x = document.getElementById("show-me");
    x.style.display ="block";
    x.innerHTML = aboutme;
    
    document.getElementById("bodyody").style.backgroundImage = 'url(images/oman.png)'
    var y = document.getElementById("whatup");
    y.innerHTML = "Web Stylin' and Profilin'";
    moveItUp();

    
    
  } else if (id == "faq") {
    
    var x = document.getElementById("show-me");
    x.style.display ="block";
    x.innerHTML = faqAndA;
    
    document.getElementById("bodyody").style.backgroundImage = 'url(images/awkotaco.png)'
    var y = document.getElementById("whatup");
    y.innerHTML = "Frequently Asked Questions"
    moveItUp();

  } else if( id == "contact"){
    
    var x = document.getElementById("show-me");
    x.style.display ="block";
    x.innerHTML = getAtMe;
    
    document.getElementById("bodyody").style.backgroundImage = 'url(images/dinodinner.png)'
    var y = document.getElementById("whatup");
    y.innerHTML = "Get in Touch"
    moveItUp();
  }
}

// About button Function
function aboutBtn() {
  const id = document.getElementById("about").value;
  changetext(id);
  console.log(id);
}

// FAQ button Function

function faqBtn() {
  const id = document.getElementById("faq").value;
  changetext(id);
  console.log(id);
}

// Contact button Function

function contactBtn() {
  const id = document.getElementById("contact").value;
  changetext(id);
  console.log(id);
}
