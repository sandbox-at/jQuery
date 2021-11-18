<script>
// Lightbox Exit intent
var att_config = {
  // =========================== USER DEFINED CONFIGURATION ===========================
  // Use the main title to grab attention. Try to keep it under 40 characters!
  title: "Save 10% on your Home Insurance",
  
    //Add color of title 
   titleColor:"#221E1F",
   
  // The sub title should entice your customer. Keep it short and sweet under 80 characters.
  subtitle: "Why leave when you can safeguard your dream home at an instant 10% online discount?",
  
//Add subititle color
 subtitleColor:"#221E1F",
 
  // Customize the link that closes the lightbox. Keep it under 30 characters.
  secondaryCTAText: "Retrieve a quote",
    //add secondaryCTA button background color
   secondaryCTABgColor: "white",
   
   //border color of primary and secondary CTA 
   borderColor: "",
    
    //right panel background color
    rightBackgroundColor:"white",
  
  // Host your image and place a link to it here. The image should be clear and concise.
  // Try to keep the dimensions to 400px wide x 500px high.
  imageUrl: "https://www.halifax.co.uk/assets/img/insurance/home-insurance/191209-home-insurance-hero-banner-couple_img_m_2x.jpg",
  // The button text should provide clear instructions. Keep it under 30 characters for maximum impact.
  primaryCTAText: "Get a Quote now",
  //Change the background color of second button
  primaryCTABackgroundColor:"#005EB8",
  //Change the text color of first button
  primaryCTATextColor:"#fff",
  //Change the text color of second button
  secondaryCTATxtColor:"#005EB8",
  
  //Hover color
  hoverColor:"#fff",
  
  //Hover secondary color
  hoverSecondaryColor:"#071d49",
  
  //Hover background color
  hoverBackgroundColor:"#071d49",
  
  //Hover border color
  hoverBorderColor:"#071d49",
  
  //If need to keep secondary CTA background color different 
  hoverSecondaryBackgroundColor:"white",
  
  // Once the customer has clicked, where do you want to redirect them?
  primaryCTALink: "https://home-quote.halifax.co.uk/",
  
   // Once the customer has clicked, where do you want to redirect them for secondaryCTA button?
  secondaryCTALink: "https://home-quote.halifax.co.uk/#/retrieve-quote",

  // Set to true to close lightbox when the area outside the lightbox is clicked.
  clickBackgroundToClose: true
  
  // Add display:none for .att_lightbox_left{} after @Media section to hide the image panel
  // =========================== END USER DEFINED CONFIGURATION ===========================
};
(function(){"use strict";var title=null!=att_config.title&&att_config.title?att_config.title:"",
titleColor=null!=att_config.titleColor&&att_config.titleColor?att_config.titleColor:"",
subtitle=null!=att_config.subtitle&&att_config.subtitle?att_config.subtitle:"",
subtitleColor=null!=att_config.subtitleColor&&att_config.subtitleColor?att_config.subtitleColor:"",
primaryCTABackgroundColor=null!=att_config.primaryCTABackgroundColor&&att_config.primaryCTABackgroundColor?att_config.primaryCTABackgroundColor:"",
secondaryCTABgColor=null!=att_config.secondaryCTABgColor&&att_config.secondaryCTABgColor?att_config.secondaryCTABgColor:"",

rightBackgroundColor=null!=att_config.rightBackgroundColor&&att_config.rightBackgroundColor?att_config.rightBackgroundColor:"",

hoverColor=null!=att_config.hoverColor&&att_config.hoverColor?att_config.hoverColor:"",

hoverSecondaryColor=null!=att_config.hoverSecondaryColor&&att_config.hoverSecondaryColor?att_config.hoverSecondaryColor:"",

hoverBackgroundColor=null!=att_config.hoverBackgroundColor&&att_config.hoverBackgroundColor?att_config.hoverBackgroundColor:"",

hoverSecondaryBackgroundColor=null!=att_config.hoverSecondaryBackgroundColor&&att_config.hoverSecondaryBackgroundColor?att_config.hoverSecondaryBackgroundColor:"",

borderColor=null!=att_config.borderColor&&att_config.borderColor?att_config.borderColor:"",

hoverBorderColor=null!=att_config.hoverBorderColor&&att_config.hoverBorderColor?att_config.hoverBorderColor:"",

secondaryCTATxtColor=null!=att_config.secondaryCTATxtColor&&att_config.secondaryCTATxtColor?att_config.secondaryCTATxtColor:"",

primaryCTAText=null!=att_config.primaryCTAText&&att_config.primaryCTAText?att_config.primaryCTAText:"",
primaryCTATextColor=null!=att_config.primaryCTATextColor&&att_config.primaryCTATextColor?att_config.primaryCTATextColor:"",

primaryCTALink=null!=att_config.primaryCTALink&&att_config.primaryCTALink?att_config.primaryCTALink:"",
secondaryCTALink=null!=att_config.secondaryCTALink&&att_config.secondaryCTALink?att_config.secondaryCTALink:"",
secondaryCTAText=null!=att_config.secondaryCTAText&&att_config.secondaryCTAText?att_config.secondaryCTAText:"",template='\n<div id="att_lightbox"><div class="att_lightbox_background"></div>\n  <div class="att_popup">\n <div  id="att_lightbox_close" >+</div>\n      <div class="att_lightbox_left">\n    </div>\n    <div class="att_lightbox_right">\n      <div class="att_lightbox_right_contents">\n <h1 class="att_lightbox_header">'+title+'</h1>\n        <p class="att_lightbox_subhheader">'+subtitle+'</p>\n <div class="att_buttonwrapper">\n          <a href="'+primaryCTALink+'" class="att_lightbox_button" rel="nofollow noopener">'+primaryCTAText+'</a>\n        <a class="att_lightbox_button btn2" href='+secondaryCTALink+'>'+secondaryCTAText+"</a>\n      </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n",bgImage=null!=att_config.imageUrl&&att_config.imageUrl?"background-image: url("+att_config.imageUrl+");":"",style="\n#att_lightbox {\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n.att_lightbox_background {\n  display: block;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: black;\n  opacity: 0.75;\n  z-index: 1000;\n  margin: 0;\n  padding: 0;\n}\n.att_popup * {\n  font-family: Helvetica, Arial, sans-serif;\n}\n.att_popup {\n  max-width: 800px;\n  max-height: 500px;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  z-index: 1001;\n  border-radius: 1px;\n position:relative \n}\n.att_lightbox_left {\n  max-width: 540px;\n  width: 100%;\n  height: 100%;\n background-repeat:no-repeat;\n  background-color: white;\n  "+bgImage+"\n  background-size: auto 100%;\n  background-position: center;\n }\n.att_lightbox_right {\n  background-color:"+rightBackgroundColor+";\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n#att_lightbox_close {\n    position: absolute;\n top:0;\n right:10px;\n top:0;\n font-size:42px;\n transform:rotate(45deg);\n z-index: 1001;\n}\n.att_lightbox_right_contents {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n  height: calc(100% - 40px);\n  width: calc(100% - 40px);\n}\n.att_lightbox_header {\n  text-align: center;\n  font-size: 20px;\n  color:"+titleColor+";\n  margin: 0;\n  padding: 1rem;\n  line-height: 1.35;\n}\n.att_lightbox_subhheader {\n  font-size: 16px;\n  text-align: center;\n  color:"+subtitleColor+";\n  line-height: 1.15;\n  margin: 70px 20px;\n  padding: 0;\n line-height: 2; \n line-height: 2; \n letter-spacing: 1.4px;\n }\n.att_lightbox_button {\n  height: 42px;\n  width: auto;\n  min-width: 20%;\n  background-color: "+primaryCTABackgroundColor+";\n  color:"+primaryCTATextColor+";\n  border-radius: 20px;\n  text-decoration: none;\n  display: inline-flex;\n  justify-content: center;\n  align-items: left;\n  font-size: 16px;\n  margin: 10px;\n padding: 10px;\n } \n a.att_lightbox_button{\n  color:"+primaryCTATextColor+";\n  border: 2px solid "+borderColor+"; \n}\n  a.att_lightbox_button:hover{\n  color:"+hoverColor+";\n}\n a.btn2{\n  color:"+secondaryCTATxtColor+";\n}\n .att_lightbox_button:hover { \n  cursor: pointer; \n  background-color: "+hoverBackgroundColor+";\n color:"+hoverColor+";\n \n text-decoration:underline;\n  border: 2px solid "+hoverBorderColor+"; \n}\n.att_lightbox_button:active {\n  background-color: "+primaryCTABackgroundColor+";\n  text-decoration: none;\n  cursor: pointer;\n}\n.att_lightbox_button[disabled=disabled],\n.att_lightbox_button:disabled {\n  background-color: #D8D8D8;\n  text-decoration: none;\n}\n.att_buttonwrapper {\n  text-align: center;\n  text-decoration: none;\n  \n display: flex;\n align-items: right;\n}\n#att_lightbox_close {\n  color: #4A4A4A;\n  text-align: center;\n  text-decoration: none;\n   font-weight: 300;\n display: flex;\n align-items: right;\n}\n.btn2 {\n  color: "+secondaryCTATxtColor+";\n background-color: "+secondaryCTABgColor+";\n  border: 2px solid "+borderColor+"; \n}\n a.btn2:hover {\n  background-color: "+hoverSecondaryBackgroundColor+";\n color:"+hoverSecondaryColor+";\n border: 2px solid "+hoverBorderColor+"; \n}\n@media (max-width: 801px) {\n#att_lightbox_close {\n    position: absolute;\n top:0;\n right:10px;\n top:0;\n font-size:42px;\n transform:rotate(45deg);\n z-index: 1001;\n}\n  .att_popup {\n    margin-top: 0px; \n  max-width: 400px;\n display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column; \n }\n.att_lightbox_left {\n    display: none\n  }\n}\n ",handlers=function(){function n(){document.getElementById("att_lightbox").style.display="none"}document.querySelector("html").addEventListener("mouseleave",function(t){t.clientY<25&&(att_config.fired||(document.getElementById("att_lightbox").style.display="flex",att_config.fired=!0))}),document.getElementById("att_lightbox_close").addEventListener("click",function(t){t.preventDefault(),n()}),document.querySelector(".att_lightbox_background").addEventListener("click",function(t){att_config.clickBackgroundToClose&&(t.preventDefault(),n())})};injector({template:template,style:style,handlers:handlers});
"use strict";function injector(e){var t=null!=e.el&&e.el?e.el:document.body,l=document.createElement("div");e.templateClass&&l.classList.add(e.templateClass),l.innerHTML=null!=e.template&&e.template?e.template.replace(/(\r\n\t|\n|\r\t)/gm,""):"",t.appendChild(l);var n=document.createElement("style");n.innerText=null!=e.style&&e.style?e.style.replace(/(\r\n\t|\n|\r\t)/gm,""):"",document.head.appendChild(n),null!=e.handlers&&"function"==typeof e.handlers&&e.handlers()}})();
</script>
