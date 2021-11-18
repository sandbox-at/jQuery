<script>
	// Lightbox - Exit Intent
	var att_config = {
		// =========================== USER DEFINED CONFIGURATION ===========================
		// Use the main title to grab attention. Try to keep it under 40 characters!
		title: "Why leave when you can",

		//Add color of title 
		titleColor: "#FFF",
		// The sub title should entice your customer. Keep it short and sweet under 80 characters.
		subtitle: "safeguard your dream home with an instant <b>10%</b> online discount.It only takes a couple of minutes to get a quote!",
		//Add subititle color
		subtitleColor: "#FFF",
		// Host your image and place a link to it here. The image should be clear and concise.
		// Try to keep the dimensions to 400px wide x 500px high.
		imageUrl: "https://www.halifax.co.uk/assets/img/insurance/home-insurance/191209-home-insurance-hero-banner-couple_img_m_2x.jpg",

		//Add background color of pop up
		popUpColor: "#025EB8",

		//Change the background color of button
		buttonBackgroundColor: "#005EB8",
		//Change the color of button text
		btnTxtColor: "#fff",
		// The button text should provide clear instructions. Keep it under 30 characters for maximum impact.
		buttonText: "Click here, to get quote",
		//Add color of link
		linkTextColor: "#fff",

		//hoverColor
		hoverColor: "#071d49",
		// Once the customer has clicked, where do you want to redirect them?

		buttonLink: "https://home-quote.halifax.co.uk/",
        //Add list icon
       img_icon: ("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle stroke='%2300a2b3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' cx='12' cy='12' r='11'/%3E%3Cpath stroke='%2300a2b3' stroke-width='2' d='M6 12.625 9.273 16 18 7'/%3E%3C/g%3E%3C/svg%3E"),

        //Add lists text
        list1:"Save 10% if you buy online",
        list2:"Choose from 3 levels of cover",
        list3:"Pay monthly at no extra cost",
        
      //Add opacticy of popup 
       opacity : "1",
    
		// Set to true to close lightbox when the area outside the lightbox is clicked.
       
		clickBackgroundToClose: false
		// =========================== END USER DEFINED CONFIGURATION ===========================
	};
(function() {
	"use strict";
	var title = null != att_config.title && att_config.title ? att_config.title : "",
		titleColor = null != att_config.titleColor && att_config.titleColor ? att_config.titleColor : "",
		popUpColor = null != att_config.popUpColor && att_config.popUpColor ? att_config.popUpColor : "",
		buttonBackgroundColor = null != att_config.buttonBackgroundColor && att_config.buttonBackgroundColor ? att_config.buttonBackgroundColor : "",
		hoverColor = null != att_config.hoverColor && att_config.hoverColor ? att_config.hoverColor : "",
		btnTxtColor = null != att_config.btnTxtColor && att_config.btnTxtColor ? att_config.btnTxtColor : "",
		subtitle = null != att_config.subtitle && att_config.subtitle ? att_config.subtitle : "",
		subtitleColor = null != att_config.subtitleColor && att_config.subtitleColor ? att_config.subtitleColor : "",
		buttonText = null != att_config.buttonText && att_config.buttonText ? att_config.buttonText : "",
		linkTextColor = null != att_config.linkTextColor && att_config.linkTextColor ? att_config.linkTextColor : "",
		buttonLink = null != att_config.buttonLink && att_config.buttonLink ? att_config.buttonLink : "",
 
            list1 = null != att_config.list1 && att_config.list1 ? att_config.list1 : "",
 list2 = null != att_config.list2 && att_config.list2 ? att_config.list2 : "",
list3 = null != att_config.list3 && att_config.list3 ? att_config.list3 : "",

list3 = null != att_config.list3 && att_config.list3 ? att_config.list3 : "",
opacityPopup = null != att_config.opacity && att_config.opacity ? att_config.opacity : "",
     
		template = '\n<div id="att_lightbox">\n  <div class="att_lightbox_background"></div>\n  <div class="att_popup">\n <div id="att_lightbox_close" class="btn_close">+</div>\n<div class="att_lightbox_contents">\n      <h1 class="att_lightbox_header" style="color:' + titleColor + '; font-size: 30px">' + title + '</h1>\n      <p class="att_lightbox_subhheader" style="font-size:18px; color:' + subtitleColor + '">' + subtitle + '</p> <ul><li>'+list1+'</li><li>'+list2+'</li><li>'+list3+'</li></ul>\n      <a href="' + buttonLink + '" class="att_lightbox_button" rel="nofollow noopener" style="color: ' + linkTextColor + '; font-size: 18px"><u>' + buttonText + '</u></a>\n      <a id="secondary_button" class="btn_close" href="#" style="color: #FFF"><b><button type="button" style="font-size:18px; color:' + btnTxtColor + '; background-color:' + buttonBackgroundColor + '; padding-top: 10px; padding-right: 20px; padding-bottom: 10px; padding-left: 20px; border-radius: 20px">Return to eligibility check</button></a>\n    </div>\n  </div>\n</div>\n',
		bgImage = null != att_config.imageUrl && att_config.imageUrl ? "background: linear-gradient(rgba(255,255,255,0.15), rgba(255,255,255,0.05)), url(" + att_config.imageUrl + ");" : "",
       iconImage = null != att_config.img_icon && att_config.img_icon ? "background-image:url(\""+att_config.img_icon+"\")" :"" ,          
		style = "\n#att_lightbox {\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  center: 0;\n  z-index: 1000;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n letter-spacing:2px\n}\n.att_lightbox_background {\n  display: block;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  center: 0;\n  background-color: black;\n  opacity: 0.50;\n  z-index: 1000;\n  margin: 0;\n  padding: 0;\n}\n.att_popup * {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.att_popup {\n  positon: relative;\n  opacity: "+opacityPopup+";\n  max-width: 500px;\n  max-height: 350px;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: left;\n  flex-direction: row;\n  z-index: 1001;\n  border-radius: 1px;\n  background-color:" + popUpColor + ";\n  " + bgImage + "\n  background-size: cover;\n  background-position: center;\n}\n.att_lightbox_contents {\n  display: flex; \n  padding: 1rem;  flex-direction: column;\n  justify-content: left;\n  align-items: left;\n  margin: 20px;\n  height: calc(100% - 40px);\n  width: calc(100% - 40px);\n}\n.att_lightbox_header {\n  text-align: left;\n  font-size: 30pt;\n  color: #221E1F;\n  margin: 0;\n  line-height: 1.25;\n}\n.att_lightbox_subhheader {\n  font-size: 18pt;\n  text-align: left;\n  color: #221E1F;\n  line-height: 1;\n  font-weight: 200;\n  margin: 5px;\n  padding: 0;\n}\n #att_lightbox_close {\n  color: "+linkTextColor+";\n  text-align: center;\n  text-decoration: none;\n   font-weight: 300;\n display: flex;\n align-items: right;\n    position: absolute;\n top:10;\n right:10;\n margin-left:468px;\n font-size:42px;\n transform:rotate(45deg);\n z-index: 1001;\n}\n button{\n border:none;\n}\n .att_lightbox_button {\n  height: 42px;\n  width: auto;\n  min-width: 50%;\n  background-color: #;\n  color: black;\n  border-radius: 2px;\n  text-decoration: none;\n  display: flex;\n  justify-content: left;\n  align-items: left;\n  font-size: 15pt;\n  margin: 5px;\n}\n #att_lightbox_close:hover{\n cursor:pointer; \n} \n.att_lightbox_button:hover {\n  text-decoration: none;\n  cursor: pointer;\n color: "+hoverColor+" !important;\n}\n a:link, a:visited  {\n  border-bottom: none;\n}\n.att_lightbox_button:active {\n  background-color: #;\n  text-decoration: none;\n  cursor: pointer;\n}\n.att_lightbox_button[disabled=disabled],\n.att_lightbox_button:disabled {\n  background-color: #D8D8D8;\n  text-decoration: none;\n}\n #secondary_button {\n  font-size: 20pt;\n  color: #4A4A4A;\n  text-align: left;\n  text-decoration: none;\n  margin: 5px;\n  font-weight: 300;\n}\n #secondary_button > b > button:hover {\n text-decoration: underline;\n background-color:"+hoverColor+"!important;\n cursor:pointer;\n}\n@media (max-width: 801px) {\n  .att_popup {\n    margin: 20px;\n  }\n  .att_lightbox_left {\n    display: none\n  }\n}\n #att_lightbox > div.att_popup > div.att_lightbox_contents > ul > li {\n "+iconImage+";\n list-style: none;\n font-weight: 600;\n background-repeat: no-repeat;background-size: 24px 24px;color: #fff;line-height: 24px;list-style-type: none;margin-bottom: 5px;padding-bottom: 1px;padding-left: 42px;padding-top: 1px;}",
		
		
		handlers = function() {
			function n() {
				document.getElementById("att_lightbox").style.display = "none"
			}
			document.querySelector("html").addEventListener("mouseleave", function(t) {
				t.clientY < 25 && (att_config.fired || (document.getElementById("att_lightbox").style.display = "flex", att_config.fired = !0))
			}), document.querySelector("#secondary_button > b > button").addEventListener("click", function(t) {
				t.preventDefault(), n()
			}),
             document.querySelector(".btn_close").addEventListener("click", function(t) {
				t.preventDefault(), n()
			}),
            
          
            
            document.querySelector(".att_lightbox_background").addEventListener("click", function(t) {
				att_config.clickBackgroundToClose && (t.preventDefault(), n())
			})
		};
	injector({
		template: template,
		style: style,
		handlers: handlers
	});
	"use strict";

	function injector(e) {
		var t = null != e.el && e.el ? e.el : document.body,
			l = document.createElement("div");
		e.templateClass && l.classList.add(e.templateClass), l.innerHTML = null != e.template && e.template ? e.template.replace(/(\r\n\t|\n|\r\t)/gm, "") : "", t.appendChild(l);
		var n = document.createElement("style");
		n.innerText = null != e.style && e.style ? e.style.replace(/(\r\n\t|\n|\r\t)/gm, "") : "", document.head.appendChild(n), null != e.handlers && "function" == typeof e.handlers && e.handlers()
	}
})(); </script>
