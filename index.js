const hamMenu = document.getElementById('ham-menu');
const segment = document.getElementById('segment');

let index = Math.floor(Math.random()*8);

const htmlContents = [
"<div class='cont'><h1>Basic Education</h1><a href='BE.html'><button>LEARN MORE</button></a></div>",
"<div class='cont'><h1>Responsible Daughters' Workshop</h1><a href='RDW.html'><button>LEARN MORE</button></a></div>",
"<div class='cont'><h1>Responsible Sons' Summit</h1><a href='RSS.html'><button>LEARN MORE</button></a></div>",
"<div class='cont'><h1>Teachers' Conference</h1><a href='TC.html'><button>LEARN MORE</button></a></div>",
"<div class='cont'><h1>Street Genius</h1><a href='SG.html'><button>LEARN MORE</button></a></div>",
"<div class='cont'><h1>Quiz and Debate</h1><a href='QD.html'><button>LEARN MORE</button></a></div>",
"<div class='cont'><h1>Scholarship</h1><a href='SCHOLARSHIP.html'><button>LEARN MORE</button></a></div>",
"<div class='cont'><h1>Vocational Training</h1><a href='VT.html'><button>LEARN MORE</button></a></div>"

]

const backgroundImages = [
   "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(BE.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(RDW.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(RSS.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(TC.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(SG.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(QD.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(SCHOLARSHIP.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(VT.jpg)"

     
]



function changeDiv(){
    segment.innerHTML = htmlContents[index];
    segment.style.backgroundImage = backgroundImages[index];
    index++;

    segment.classList.remove("fade");

    void segment.offsetWidth;

    segment.classList.add("fade");


    if (index >= htmlContents.length){
        index = 0;
    }
}



changeDiv();

setInterval(changeDiv, 5000);






hamMenu.style.display = "none";


function toggleHam() {
    if(hamMenu.style.display === "block") {
        hamMenu.style.display = "none"
    }

    else {
        hamMenu.style.display = "block";
    }
}

