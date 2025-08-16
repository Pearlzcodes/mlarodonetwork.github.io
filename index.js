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



const footNote = document.getElementById('footer');

footNote.innerHTML =  `

<div class="abalameta">
<section class="section1">
  <div class="ese">

    <div class="orid">
      <img
        height="80px"
        src="m larodo transparent.png"
        alt=""
      />
    </div>
    <div class="mlaf">Mlarodo</div>

  </div>
    <br>
    <br>
    <br>
  <div class="icons">
    <a href="https://www.facebook.com/Mlarodonetwork/" target="_blank"><img  class="icono" src="facebook.svg" alt=""></a>
    <a href="https://www.instagram.com/mlarodonetwork/" target="_blank"><img  class="icono" src="instagram.svg" alt=""></a>
    <a href="https://youtube.com/@mlarodonetwork" target="_blank"><img  class="icono" src="youtube.svg" alt=""></a>

  </div>
</section>

<section class="section2">
  <h3>Our Outreach</h3>
  <a href="BE.html">Basic Education</a>
  <a href="RDW.html">Responsible Daughter's Workshop</a>
  <a href="RSS.html">Responsible Son's Summit</a>
  <a href="TC.html">Teacher's Conference</a>
  <a href="SCHOLARSHIP.html">Scholarship Initiative</a>

</section>

<section class="section3">
  <h3>Subscribe Now</h3>
  <p>Dont miss our future updates! Get subscribed today</p>
 
 
  <form name="newsletter"
method="POST"
data-netlify="true"
netlify-honeypot="bot-field"
action="/thanks.html">
<input type="hidden" name="form-name" value="newsletter" />
<p style="position:absolute;left:-9999px;">
<label>Leave this empty: <input name="bot-field" type="text" /></label>
</p>

<label style="color: white;">
Email
<input style="border: none; padding: 10px;" type="email" name="email" required />
</label>



<button style="border: none; padding: 10px; color: rgb(215, 42, 215); font-weight: bolder; margin-top: 10px;" type="submit">Subscribe</button>
<div data-netlify-recaptcha="true"></div>
</form>



</section>
</div>

<hr>


<p style="
color: white;
text-align: center;
font-size: 20px;
clear: both;

">Copyright &copy 2023 Mlarodo Network. All right resrved
<br />
Powered by Pearlscodez
</p>
`



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

