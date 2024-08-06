const button1 = document.querySelector(".question1");
const cont1 = document.querySelector(".ans1-container");
const plusIcon1 = document.querySelector(".question1 .plus svg");

let isOpen1 = false;

button1.addEventListener("click", function () {
    if (isOpen1 === true) {
        cont1.innerHTML = "";
        isOpen1 = false;

        cont1.style.backgroundColor = "";
        cont1.style.color = "";
        cont1.style.width = "";
        cont1.style.height = "";
        cont1.style.textAlign = "";
        cont1.style.marginTop = "";
        cont1.style.marginBottom = "";
        cont1.style.paddingTop = "";
        cont1.style.paddingLeft = "";

        plusIcon1.style.transform = "rotate(0deg)";
    
    } 
    else {
        cont1.innerHTML = "<h3>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, <br> documentaries and more - on thousands of internet-connected devices. <br><br> You can watch as much as you want, whenever you want, without a single ad - all for one low monthly <br> price. There's always something new to discover, and new TV shows and movies are added every week!</h3>";

        cont1.style.backgroundColor = "#2d2d2d";
        cont1.style.color = "white";
        cont1.style.width = "1200px";
        cont1.style.height = "220px";
        cont1.style.textAlign = "left";
        cont1.style.marginTop = "-7px";
        cont1.style.marginBottom = "10px";
        cont1.style.paddingTop = "25px";
        cont1.style.paddingLeft = "32px";

        plusIcon1.style.transform = "rotate(45deg)";
        isOpen1 = true;
    }
});


const button2 = document.querySelector(".question2");
const cont2 = document.querySelector(".ans2-container");
const plusIcon2 = document.querySelector(".question2 .plus svg");

let isOpen2 = false;

button2.addEventListener("click", function () {
    if (isOpen2) {
        cont2.innerHTML = "";
        isOpen2 = false;

        cont2.style.backgroundColor = "";
        cont2.style.color = "";
        cont2.style.width = "";
        cont2.style.height = "";
        cont2.style.textAlign = "";
        cont2.style.marginTop = "";
        cont2.style.marginBottom = "";
        cont2.style.paddingTop = "";
        cont2.style.paddingLeft = "";

        plusIcon2.style.transform = "rotate(0deg)";
    
    } 
    else {
        cont2.innerHTML = "<h3>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed <br> monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</h3>";

        cont2.style.backgroundColor = "#2d2d2d";
        cont2.style.color = "white";
        cont2.style.width = "1200px";
        cont2.style.height = "120px";
        cont2.style.textAlign = "left";
        cont2.style.marginTop = "-7px";
        cont2.style.marginBottom = "10px";
        cont2.style.paddingTop = "25px";
        cont2.style.paddingLeft = "32px";

        plusIcon2.style.transform = "rotate(45deg)";
        isOpen2 = true;
    }
});


const button3 = document.querySelector(".question3");
const cont3 = document.querySelector(".ans3-container");
const plusIcon3 = document.querySelector(".question3 .plus svg");

let isOpen3 = false;

button3.addEventListener("click", function () {
    if (isOpen3) {
        cont3.innerHTML = "";
        isOpen3 = false;

        cont3.style.backgroundColor = "";
        cont3.style.color = "";
        cont3.style.width = "";
        cont3.style.height = "";
        cont3.style.textAlign = "";
        cont3.style.marginTop = "";
        cont3.style.marginBottom = "";
        cont3.style.paddingTop = "";
        cont3.style.paddingLeft = "";

        plusIcon3.style.transform = "rotate(0deg)";
    
    } 
    else {
        cont3.innerHTML = "<h3>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com <br> from your personal computer or on any internet-connected device that offers the Netflix app, including <br> smart TVs, smartphones, tablets, streaming media players and game consoles. <br><br> You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads <br> to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</h3>";

        cont3.style.backgroundColor = "#2d2d2d";
        cont3.style.color = "white";
        cont3.style.width = "1200px";
        cont3.style.height = "240px";
        cont3.style.textAlign = "left";
        cont3.style.marginTop = "-7px";
        cont3.style.marginBottom = "10px";
        cont3.style.paddingTop = "25px";
        cont3.style.paddingLeft = "32px";

        plusIcon3.style.transform = "rotate(45deg)";
        isOpen3 = true;
    }
});

const button4 = document.querySelector(".question4");
const cont4 = document.querySelector(".ans4-container");
const plusIcon4 = document.querySelector(".question4 .plus svg");

let isOpen4 = false;

button4.addEventListener("click", function () {
    if (isOpen4) {
        cont4.innerHTML = "";
        isOpen4 = false;

        cont4.style.backgroundColor = "";
        cont4.style.color = "";
        cont4.style.width = "";
        cont4.style.height = "";
        cont4.style.textAlign = "";
        cont4.style.marginTop = "";
        cont4.style.marginBottom = "";
        cont4.style.paddingTop = "";
        cont4.style.paddingLeft = "";

        plusIcon4.style.transform = "rotate(0deg)";
    
    } 
    else {
        cont4.innerHTML = "<h3>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your <br> account online in two clicks. There are no cancellation fees - start or stop your account anytime.</h3>";

        cont4.style.backgroundColor = "#2d2d2d";
        cont4.style.color = "white";
        cont4.style.width = "1200px";
        cont4.style.height = "120px";
        cont4.style.textAlign = "left";
        cont4.style.marginTop = "-7px";
        cont4.style.marginBottom = "10px";
        cont4.style.paddingTop = "25px";
        cont4.style.paddingLeft = "32px";

        plusIcon4.style.transform = "rotate(45deg)";
        isOpen4 = true;
    }
});


const button5 = document.querySelector(".question5");
const cont5 = document.querySelector(".ans5-container");
const plusIcon5 = document.querySelector(".question5 .plus svg");

let isOpen5 = false;

button5.addEventListener("click", function () {
    if (isOpen5) {
        cont5.innerHTML = "";
        isOpen5 = false;

        cont5.style.backgroundColor = "";
        cont5.style.color = "";
        cont5.style.width = "";
        cont5.style.height = "";
        cont5.style.textAlign = "";
        cont5.style.marginTop = "";
        cont5.style.marginBottom = "";
        cont5.style.paddingTop = "";
        cont5.style.paddingLeft = "";

        plusIcon5.style.transform = "rotate(0deg)";
    
    } 
    else {
        cont5.innerHTML = "<h3>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning <br> Netflix originals, and more. Watch as much as you want, anytime you want.</h3>";

        cont5.style.backgroundColor = "#2d2d2d";
        cont5.style.color = "white";
        cont5.style.width = "1200px";
        cont5.style.height = "120px";
        cont5.style.textAlign = "left";
        cont5.style.marginTop = "-7px";
        cont5.style.marginBottom = "10px";
        cont5.style.paddingTop = "25px";
        cont5.style.paddingLeft = "32px";

        plusIcon5.style.transform = "rotate(45deg)";
        isOpen5 = true;
    }
});


const button6 = document.querySelector(".question6");
const cont6 = document.querySelector(".ans6-container");
const plusIcon6 = document.querySelector(".question6 .plus svg");

let isOpen6 = false;

button6.addEventListener("click", function () {
    if (isOpen6) {
        cont6.innerHTML = "";
        isOpen6 = false;

        cont6.style.backgroundColor = "";
        cont6.style.color = "";
        cont6.style.width = "";
        cont6.style.height = "";
        cont6.style.textAlign = "";
        cont6.style.marginTop = "";
        cont6.style.marginBottom = "";
        cont6.style.paddingTop = "";
        cont6.style.paddingLeft = "";

        plusIcon6.style.transform = "rotate(0deg)";
    
    } 
    else {
        cont6.innerHTML = "<h3>The Netflix Kids experience is included in your membership to give parents control while kids enjoy <br> family-friendly TV shows and films in their own space.<br><br> Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of <br> content kids can watch and block specific titles you don’t want kids to see.</h3>";

        cont6.style.backgroundColor = "#2d2d2d";
        cont6.style.color = "white";
        cont6.style.width = "1200px";
        cont6.style.height = "220px";
        cont6.style.textAlign = "left";
        cont6.style.marginTop = "-7px";
        cont6.style.marginBottom = "10px";
        cont6.style.paddingTop = "25px";
        cont6.style.paddingLeft = "32px";

        plusIcon6.style.transform = "rotate(45deg)";
        isOpen6 = true;
    }
});