<script>
// Lightbox
var att_config = {
  // =========================== USER DEFINED CONFIGURATION ===========================
  // Use the main title to grab attention. Try to keep it under 40 characters!
  title: "Save 10% on your Home Insurance",
  // The sub title should entice your customer. Keep it short and sweet under 80 characters.
  subtitle: "Why leave when you can safeguard your dream home at an instant 10% online discount?",
  // Customize the link that closes the lightbox. Keep it under 30 characters.
  declineText: "Retrieve a quote",
  // Host your image and place a link to it here. The image should be clear and concise.
  // Try to keep the dimensions to 400px wide x 500px high.
  imageUrl: "https://www.halifax.co.uk/assets/img/insurance/home-insurance/191209-home-insurance-hero-banner-couple_img_m_2x.jpg",
  // The button text should provide clear instructions. Keep it under 30 characters for maximum impact.
  buttonText: "Get a Quote now",
  // Once the customer has clicked, where do you want to redirect them?
  buttonLink: "https://www.adobe.com/marketing-cloud/target.html",
  // Time delay before the lightbox is shown, in seconds. Put a 0 to show the lightbox immediately, false to never show.
  delay: 2,
  // Set to true to close lightbox when the area outside the lightbox is clicked.
  clickBackgroundToClose: false
  // =========================== END USER DEFINED CONFIGURATION ===========================
};
(function(){"use strict";var title=null!=att_config.title&&att_config.title?att_config.title:"",subtitle=null!=att_config.subtitle&&att_config.subtitle?att_config.subtitle:"",buttonText=null!=att_config.buttonText&&att_config.buttonText?att_config.buttonText:"",buttonLink=null!=att_config.buttonLink&&att_config.buttonLink?att_config.buttonLink:"",declineText=null!=att_config.declineText&&att_config.declineText?att_config.declineText:"",template='\n<div id="att_lightbox">\n  <i class="fas fa-times"></i>\n  <div class="att_lightbox_background"></div>\n  <div class="att_popup">\n    <div class="att_lightbox_left">\n    </div>\n    <div class="att_lightbox_right">\n      <div class="att_lightbox_right_contents">\n        <h1 class="att_lightbox_header">'+title+'</h1>\n        <p class="att_lightbox_subhheader">'+subtitle+'</p>\n <div class="att_buttonwrapper">\n          <a href="'+buttonLink+'" class="att_lightbox_button" rel="nofollow noopener">'+buttonText+'</a>\n        <a id="att_lightbox_close" class="att_lightbox_button" href="#">'+declineText+"</a>\n      </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n",bgImage=null!=att_config.imageUrl&&att_config.imageUrl?"background-image: url("+att_config.imageUrl+");":"",style="\n#att_lightbox {\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n.att_lightbox_background {\n  display: block;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: black;\n  opacity: 0.75;\n  z-index: 1000;\n  margin: 0;\n  padding: 0;\n}\n.att_popup * {\n  font-family: Helvetica, Arial, sans-serif;\n}\n.att_popup {\n  max-width: 800px;\n  max-height: 500px;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  z-index: 1001;\n  border-radius: 1px;\n}\n.att_lightbox_left {\n  max-width: 540px;\n  width: 100%;\n  height: 100%;\n background-repeat:no-repeat;\n  background-color: white;\n  "+bgImage+"\n  background-size: auto 100%;\n  background-position: center;\n}\n.att_lightbox_right {\n  background-color: white;\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.att_lightbox_right_contents {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n  height: calc(100% - 40px);\n  width: calc(100% - 40px);\n}\n.att_lightbox_header {\n  text-align: center;\n  font-size: 20px;\n  color: #221E1F;\n  margin: 0;\n  padding: 1rem;\n  line-height: 1.35;\n}\n.att_lightbox_subhheader {\n  font-size: 16px;\n  text-align: center;\n  color: #221E1F;\n  line-height: 1.35;\n  margin: 20px 30px;\n  padding: 0;\n}\n.att_lightbox_button {\n  height: 42px;\n  width: auto;\n  min-width: 20%;\n  background-color: #005EB8;\n  color: white;\n  border-radius: 20px;\n  text-decoration: none;\n  display: inline-flex;\n  justify-content: center;\n  align-items: left;\n  font-size: 16px;\n  margin: 10px;\n padding: 10px;\n}\n.att_lightbox_button:hover {\n  background-color: #388E3C;\n  text-decoration: none;\n  cursor: pointer;\n}\n.att_lightbox_button:active {\n  background-color: #4CAF50;\n  text-decoration: none;\n  cursor: pointer;\n}\n.att_lightbox_button[disabled=disabled],\n.att_lightbox_button:disabled {\n  background-color: #D8D8D8;\n  text-decoration: none;\n}\n.att_buttonwrapper {\n  color: #4A4A4A;\n  text-align: center;\n  text-decoration: none;\n  \n display: flex;\n align-items: right;\n}\n#att_lightbox_close {\n  color: #4A4A4A;\n  text-align: center;\n  text-decoration: none;\n   font-weight: 300;\n display: flex;\n align-items: right;\n}\n#att_lightbox_close:hover {\n  text-decoration: underline;\n}\n@media (max-width: 801px) {\n  .att_popup {\n    margin-top: -90px; \n  max-width: 400px;\n display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column; \n }\n ",handlers=function(){var t=null!=att_config.delay&&att_config.delay?att_config.delay:5;function n(){document.getElementById("att_lightbox").style.display="none"}!1!==att_config.delay&&setTimeout(function(){att_config.fired||(document.getElementById("att_lightbox").style.display="flex",att_config.fired=!0)},1e3*t),document.getElementById("att_lightbox_close").addEventListener("click",function(t){t.preventDefault(),n()}),document.querySelector(".att_lightbox_background").addEventListener("click",function(t){att_config.clickBackgroundToClose&&(t.preventDefault(),n())})};injector({template:template,style:style,handlers:handlers});
"use strict";function injector(e){var t=null!=e.el&&e.el?e.el:document.body,l=document.createElement("div");e.templateClass&&l.classList.add(e.templateClass),l.innerHTML=null!=e.template&&e.template?e.template.replace(/(\r\n\t|\n|\r\t)/gm,""):"",t.appendChild(l);var n=document.createElement("style");n.innerText=null!=e.style&&e.style?e.style.replace(/(\r\n\t|\n|\r\t)/gm,""):"",document.head.appendChild(n),null!=e.handlers&&"function"==typeof e.handlers&&e.handlers()}})();
</script>