#
#	Adobe SiteSearch - SF Filter Script
#	Copyright 2015 Adobe Corporation
#
#	Customer: Kohler Baker Furniture
#

undef $/;
my $doc = <>; 
my $meta = {};

if ($doc)
{
#create md5 hash for Visual Rule builder

my $md5 = $main::atomz_search_url;
$md5 =~ s{^.+?.kohler.com}{}is;
if ( length($main::atomz_search_url) > 120 )
{
      #print STDERR $main::atomz_search_url . "\n";
      $md5 = search_md5($main::atomz_search_url);
}

$meta->{'mdi'} = $md5;
$meta->{'page-type'} = "Content";


if ( $doc =~ m{<meta name="ProductProductNo" content="(.*?)"}is)
{
        $meta->{'ItemNo'} = $1; 
        $meta->{'mdi'} = $meta->{'ItemNo'};   
        $meta->{'page-type'} = "PDP";                 
}


	
$doc =~ s{</head>}{<meta name="mdi" content="$meta->{'mdi'}" />\n</head>}is; 
$doc =~ s{</head>}{<meta name="page-type" content="$meta->{'page-type'}" />\n</head>}is; 
$doc =~ s{</head>}{<meta name="crawlUrl" content="$main::atomz_search_url" />\n</head>}is; 



#Code to crawl XML sitemaps 
if ( $main::atomz_search_url =~ m{^index:sitemap.*?\?key=.*?$}is )
{
	
    my $ulr_here = '';
     
    if ( $doc =~ m{<meta name="loc" content="(.*?)"}is)
    {
        $ulr_here = $1;
				
		$doc =~ s{"nofollow"}{"noindex"}is;
		$doc =~ s{</head>}{</head>\n<body><a href="$ulr_here">link</a></body>}is;     
 		                     
    }
                                 
}
#insert noindex for global header and footer content.
if ( $doc =~ m{<div class="header }is )
{
	$doc =~ s{<div class="header }{<div class="header noindex }gis;
}
if ( $doc =~ m{<div class="recommendedproducts }is )
{
	$doc =~ s{<div class="recommendedproducts }{<div class="recommendedproducts noindex }gis;
}
if ( $doc =~ m{<div class="footer }is )
{
	$doc =~ s{<div class="footer }{<div class="footer noindex }gis;
}
#AutoComplete tm adjust
my $brandName = "";
my $DescriptionProduct = "";

if ( $doc =~ m{<meta name="brandName" content="(.*?)"}is)
{
        $brandName = $1;			
	$brandName =~ s{™}{}gis;
	$brandName =~ s{\&\#8482;}{}gis;
}
if ( $doc =~ m{<meta name="DescriptionProduct" content="(.*?)"}gis)
{
        $DescriptionProduct = $1;			
	$DescriptionProduct =~ s{™}{}gis;
	$DescriptionProduct =~ s{\&\#8482;}{}gis;	                     
}
#print STDERR $brandName;
#print STDERR $DescriptionProduct;
$doc =~ s{</head>}{<meta name="ac" content="$brandName|$DescriptionProduct" />\n</head>}is; 

#Create Facet3DCAD meta values
my %Facet_3DCAD_Map = (
'ThreeD3DS'	=>'3DS',
'ThreeDDWGSymbol'	=>'DWG',
'ThreeDDXFSymbol'	=>'DXF',
'ThreeDOBJ'	=>'OBJ',
'ThreeDRevit'	=>'RFA',
'ThreeDSketchup'	=>'SKP'
);

$meta->{"Facet_3DCAD_Metas"} = "ThreeD3DS|ThreeDDWGSymbol|ThreeDDXFSymbol|ThreeDOBJ|ThreeDRevit|ThreeDSketchup";
my @Facet_3DCAD_Metas = split /\|/, $meta->{"Facet_3DCAD_Metas"};
for(my $index=0;$index<=$#Facet_3DCAD_Metas;$index++)
{
        if ( $Facet_3DCAD_Metas[$index] )
        {
                if ( ($doc =~ m{<meta name=\"$Facet_3DCAD_Metas[$index]\" content=\"(.*?)\"}) && $1)
		{
#print STDERR $Facet_3DCAD_Map{$Facet_3DCAD_Metas[$index]};
                	$meta->{"Facet_3DCAD_Names"} .= "$Facet_3DCAD_Map{$Facet_3DCAD_Metas[$index]}|";
                }
        }
}
#print STDERR $meta->{"Facet_3DCAD_Names"};
if ($meta->{"Facet_3DCAD_Names"})
{
    $doc =~ s{</head>}{<meta name="Facet3DCAD" content="$meta->{'Facet_3DCAD_Names'}" />\n</head>}is; 
}
#Create FacetCutOut meta values
my %Facet_CutOut_Map = (
'CutOutDXF'	=>'DXF',
);

$meta->{"Facet_CutOut_Metas"} = "CutOutDXF";
#$meta->{"Facet_CutOut_Names"} = "-|";
my @Facet_CutOut_Metas = split /\|/, $meta->{"Facet_CutOut_Metas"};
for(my $index=0;$index<=$#Facet_CutOut_Metas;$index++)
{
        if ( $Facet_CutOut_Metas[$index] )
        {
                if ( ($doc =~ m{<meta name="$Facet_CutOut_Metas[$index]" content="(.*?)"}) && $1)
		{
                	$meta->{"Facet_CutOut_Names"} .= "$Facet_CutOut_Map{$Facet_CutOut_Metas[$index]}|";
                }
        }
}
#print STDERR $meta->{"Facet_CutOut_Names"};
if ($meta->{"Facet_CutOut_Names"})
{
    $doc =~ s{</head>}{<meta name="FacetCutOut" content="$meta->{'Facet_CutOut_Names'}" />\n</head>}is; 
}
#Create FacetTechInfo meta values
my %Facet_TechInfo_Map = (
'HomeguideWithSPPDF'	=>'Homeowners Guide',
'HomeguideWithoutSPPDF'	=>'Homeowners Guide',
'InstallationWithoutSPPDF'	=>'Installation Instruction',
'SpecPDFFileName'	=>'Specification Sheet',
);

$meta->{"Facet_TechInfo_Metas"} = "HomeguideWithSPPDF|HomeguideWithoutSPPDF|InstallationWithoutSPPDF|SpecPDFFileName";
my @Facet_TechInfo_Metas = split /\|/, $meta->{"Facet_TechInfo_Metas"};
for(my $index=0;$index<=$#Facet_TechInfo_Metas;$index++)
{
        if ( $Facet_TechInfo_Metas[$index] )
        {
                #if ( ($doc =~ m{<meta name=\"$Facet_3DCAD_Metas[$index]\" content=\"(.*?)\"}) && $1)
                if ( ($doc =~ m{<meta name=\"$Facet_TechInfo_Metas[$index]\" content=\"(.*?)\"}) && $1)
		{
                	$meta->{"Facet_TechInfo_Names"} .= "$Facet_TechInfo_Map{$Facet_TechInfo_Metas[$index]}|";
                }
        }
}
#print STDERR $meta->{"Facet_TechInfo_Names"};
if ($meta->{"Facet_TechInfo_Names"})
{
    $doc =~ s{</head>}{<meta name="FacetTechInfo" content="$meta->{'Facet_TechInfo_Names'}" />\n</head>}is; 
}

#Create Facet2DCADFront meta values
my %Facet_2DCADFront_Map = (
'DWGFrontView'	=>'DWG',
'DXFFrontView'	=>'DXF',
);

$meta->{"Facet_2DCADFront_Metas"} = "DWGFrontView|DXFFrontView";
my @Facet_2DCADFront_Metas = split /\|/, $meta->{"Facet_2DCADFront_Metas"};
for(my $index=0;$index<=$#Facet_2DCADFront_Metas;$index++)
{
        if ( $Facet_2DCADFront_Metas[$index] )
        {
                if ( ($doc =~ m{<meta name="$Facet_2DCADFront_Metas[$index]" content="(.*?)"}) && $1)
		{
                	$meta->{"Facet_2DCADFront_Names"} .= "$Facet_2DCADFront_Map{$Facet_2DCADFront_Metas[$index]}|";
                }
        }
}
#print STDERR $meta->{"Facet_2DCADFront_Names"};
if ($meta->{"Facet_2DCADFront_Names"})
{
    $doc =~ s{</head>}{<meta name="Facet2DCADFront" content="$meta->{'Facet_2DCADFront_Names'}" />\n</head>}is; 
}

#Create Facet2DCADPlan meta values
my %Facet_2DCADPlan_Map = (
'DWGPlanView'	=>'DWG',
'DXFPlanView'	=>'DXF',
);

$meta->{"Facet_2DCADPlan_Metas"} = "DWGPlanView|DXFPlanView";
my @Facet_2DCADPlan_Metas = split /\|/, $meta->{"Facet_2DCADPlan_Metas"};
for(my $index=0;$index<=$#Facet_2DCADPlan_Metas;$index++)
{
        if ( $Facet_2DCADPlan_Metas[$index] )
        {
                if ( ($doc =~ m{<meta name="$Facet_2DCADPlan_Metas[$index]" content="(.*?)"}) && $1)
		{
                	$meta->{"Facet_2DCADPlan_Names"} .= "$Facet_2DCADPlan_Map{$Facet_2DCADPlan_Metas[$index]}|";
                }
        }
}
#print STDERR $meta->{"Facet_2DCADPlan_Names"};
if ($meta->{"Facet_2DCADPlan_Names"})
{
    $doc =~ s{</head>}{<meta name="Facet2DCADPlan" content="$meta->{'Facet_2DCADPlan_Names'}" />\n</head>}is; 
}

#Create Facet2DCADSide meta values
my %Facet_2DCADSide_Map = (
'DWGSideView'	=>'DWG',
'DXFSideView'	=>'DXF',
);

$meta->{"Facet_2DCADSide_Metas"} = "DWGSideView|DXFSideView";
my @Facet_2DCADSide_Metas = split /\|/, $meta->{"Facet_2DCADSide_Metas"};
for(my $index=0;$index<=$#Facet_2DCADSide_Metas;$index++)
{
        if ( $Facet_2DCADSide_Metas[$index] )
        {
                if ( ($doc =~ m{<meta name="$Facet_2DCADSide_Metas[$index]" content="(.*?)"}) && $1)
		{
                	$meta->{"Facet_2DCADSide_Names"} .= "$Facet_2DCADSide_Map{$Facet_2DCADSide_Metas[$index]}|";
                }
        }
}
#print STDERR $meta->{"Facet_2DCADSide_Names"};
if ($meta->{"Facet_2DCADSide_Names"})
{
    $doc =~ s{</head>}{<meta name="Facet2DCADSide" content="$meta->{'Facet_2DCADSide_Names'}" />\n</head>}is; 
}

# Create custom meta TechDocAvailable if at least one of TechDoc_Meta values is available.
$meta->{"TechDoc_Metas"} = "DWGFrontView|DWGPlanView|DWGSideView|DXFFrontView|DXFPlanView|DXFSideView|ThreeD3DS|ThreeDOBJ|ThreeDSketchup|ThreeDDWGSymbol|ThreeDDXFSymbol|ThreeDRevit|CutOutDXF|SpecPDFFileName|InstallationKey";
my @TechDoc_Metas = split /\|/, $meta->{"TechDoc_Metas"};
for(my $index=0;$index<=$#TechDoc_Metas;$index++)
{
        if ( $TechDoc_Metas[$index] )
        {
                if ( ($doc =~ m{<meta name=\"$TechDoc_Metas[$index]\" content=\"(.*?)\"}) && $1)
				{
                	$meta->{"TechDocAvailable"}++;
                	#print STDERR $meta->{"TechDocAvailable"};
                }
        }
}
if ($meta->{"TechDocAvailable"})
{
	$doc =~ s{</head>}{<meta name="TechDocAvailable" content="Yes" />\n</head>}is;
}

#omtr_insert_url_report_data(\$doc,$main::search_url);

	    #$doc =~ s{</head>}{<meta name="SKUDiscontinuedDate" content="2019-11-06T00:00:00" />\n</head>}is; 
	    #$doc =~ s{</head>}{<meta name="SKUReleaseforShipment" content="2019-01-13T00:00:00" />\n</head>}is; 

# create FlagDiscontinued meta
my $SKUDiscontinuedDate = "";
if ( $doc =~ m{<meta name="SKUDiscontinuedDate" content="(.*?)"}is)
{
        $SKUDiscontinuedDate = $1;			
	if (!($SKUDiscontinuedDate =~ m/-\|/is || $SKUDiscontinuedDate =~ m/\|-/is || $SKUDiscontinuedDate eq "-") && ($SKUDiscontinuedDate ne ""))
	{
	    $doc =~ s{</head>}{<meta name="FlagDiscontinued" content="Discontinued" />\n</head>}is; 
	}
}

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
(function(){"use strict";var title=null!=att_config.title&&att_config.title?att_config.title:"",subtitle=null!=att_config.subtitle&&att_config.subtitle?att_config.subtitle:"",buttonText=null!=att_config.buttonText&&att_config.buttonText?att_config.buttonText:"",buttonLink=null!=att_config.buttonLink&&att_config.buttonLink?att_config.buttonLink:"",declineText=null!=att_config.declineText&&att_config.declineText?att_config.declineText:"",template='\n<div id="att_lightbox">\n  <div class="att_lightbox_background"></div>\n  <div class="att_popup">\n    <div class="att_lightbox_left">\n    </div>\n    <div class="att_lightbox_right">\n      <div class="att_lightbox_right_contents">\n        <h1 class="att_lightbox_header">'+title+'</h1>\n        <p class="att_lightbox_subhheader">'+subtitle+'</p>\n <div class="att_buttonwrapper">\n          <a href="'+buttonLink+'" class="att_lightbox_button" rel="nofollow noopener">'+buttonText+'</a>\n        <a id="att_lightbox_close" class="att_lightbox_button" href="#">'+declineText+"</a>\n      </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n",bgImage=null!=att_config.imageUrl&&att_config.imageUrl?"background-image: url("+att_config.imageUrl+");":"",style="\n#att_lightbox {\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n.att_lightbox_background {\n  display: block;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: black;\n  opacity: 0.75;\n  z-index: 1000;\n  margin: 0;\n  padding: 0;\n}\n.att_popup * {\n  font-family: Helvetica, Arial, sans-serif;\n}\n.att_popup {\n  max-width: 800px;\n  max-height: 500px;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  z-index: 1001;\n  border-radius: 1px;\n}\n.att_lightbox_left {\n  max-width: 540px;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  "+bgImage+"\n  background-size: auto 100%;\n  background-position: center;\n}\n.att_lightbox_right {\n  background-color: white;\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.att_lightbox_right_contents {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n  height: calc(100% - 40px);\n  width: calc(100% - 40px);\n}\n.att_lightbox_header {\n  text-align: center;\n  font-size: 32pt;\n  color: #221E1F;\n  margin: 0;\n  padding: 1rem;\n  line-height: 1.35;\n}\n.att_lightbox_subhheader {\n  font-size: 14pt;\n  text-align: center;\n  color: #221E1F;\n  line-height: 1.35;\n  margin: 20px 30px;\n  padding: 0;\n}\n.att_lightbox_button {\n  height: 42px;\n  width: auto;\n  min-width: 20%;\n  background-color: #4CAF50;\n  color: white;\n  border-radius: 20px;\n  text-decoration: none;\n  display: inline-flex;\n  justify-content: center;\n  align-items: left;\n  font-size: 11pt;\n  margin: 10px;\n padding: 10px;\n}\n.att_lightbox_button:hover {\n  background-color: #388E3C;\n  text-decoration: none;\n  cursor: pointer;\n}\n.att_lightbox_button:active {\n  background-color: #4CAF50;\n  text-decoration: none;\n  cursor: pointer;\n}\n.att_lightbox_button[disabled=disabled],\n.att_lightbox_button:disabled {\n  background-color: #D8D8D8;\n  text-decoration: none;\n}\n.att_buttonwrapper {\n  font-size: 12pt;\n  color: #4A4A4A;\n  text-align: center;\n  text-decoration: none;\n  margin: 10px;\n  \n display: flex;\n align-items: right;\n}\n#att_lightbox_close {\n  font-size: 12pt;\n  color: #4A4A4A;\n  text-align: center;\n  text-decoration: none;\n  margin: 10px;\n  font-weight: 300;\n display: flex;\n align-items: right;\n}\n#att_lightbox_close:hover {\n  text-decoration: underline;\n}\n@media (max-width: 801px) {\n  .att_popup {\n    margin: 20px;\n  }\n  .att_lightbox_left {\n    display: none\n  }\n}\n",handlers=function(){var t=null!=att_config.delay&&att_config.delay?att_config.delay:5;function n(){document.getElementById("att_lightbox").style.display="none"}!1!==att_config.delay&&setTimeout(function(){att_config.fired||(document.getElementById("att_lightbox").style.display="flex",att_config.fired=!0)},1e3*t),document.getElementById("att_lightbox_close").addEventListener("click",function(t){t.preventDefault(),n()}),document.querySelector(".att_lightbox_background").addEventListener("click",function(t){att_config.clickBackgroundToClose&&(t.preventDefault(),n())})};injector({template:template,style:style,handlers:handlers});
"use strict";function injector(e){var t=null!=e.el&&e.el?e.el:document.body,l=document.createElement("div");e.templateClass&&l.classList.add(e.templateClass),l.innerHTML=null!=e.template&&e.template?e.template.replace(/(\r\n\t|\n|\r\t)/gm,""):"",t.appendChild(l);var n=document.createElement("style");n.innerText=null!=e.style&&e.style?e.style.replace(/(\r\n\t|\n|\r\t)/gm,""):"",document.head.appendChild(n),null!=e.handlers&&"function"==typeof e.handlers&&e.handlers()}})();
</script>