/* global initializeMap, initializeDataTable */
/* 1. === Setting up Map === */
/* set up with zoom 5, may change, changed lat
and long from 34,0836417742618, -118.5298649280784 */
var imbounds = new L.LatLngBounds(
    new L.LatLng(45.9814, -22.8472),
    new L.LatLng(62.2015143, 12.28));
    

    
var inbounds = new L.LatLngBounds(
    new L.LatLng(4.7891, 58.0936),
    new L.LatLng(36.4607, 101.0598));
    
var bounds = new L.LatLngBounds(
    new L.LatLng(-9.2009, -18.1474),
    new L.LatLng(70.4855, 102.7610));

var maxbounds = new L.LatLngBounds(
    new L.LatLng(-62, -201),
    new L.LatLng(80.2, 115)
)

var worldbounds = new L.LatLngBounds(
		new L.LatLng(-59.3612948,-179.4239418),
		new L.LatLng(74.0848814,97.7829441)
)

var greenbounds = new L.LatLngBounds(
		new L.LatLng(-65.55,-199.5),
		new L.LatLng(77.417,117.7)
);

let map = L.map('map', {zoomControl: false, center: bounds.getCenter(), maxBounds: maxbounds,maxBoundsViscosity: 1.0, maxZoom:6, minZoom:3 }).setView([11.3, -49], 3);
map.fitBounds(bounds);




const basemap = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
var WhiteCanvas = L.tileLayer(basemap, {
  attribution,
});

var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, ' +
    'AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community', 
    opacity: 0.7
});

var Jawg_Dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd'
});

let baseLayers = {
    "Satellite": Esri_WorldImagery,
    "Grey Canvas": Jawg_Dark,
    "White Canvas": WhiteCanvas
};

var layerControl = L.control.layers(baseLayers, null, {position: 'bottomright',collapsed:false}).addTo(map);
map.addLayer(WhiteCanvas);
map.addControl(layerControl);


sidebarContentController("story-slide");


let dataT = [];

/* PM LAYERS */
var layerPM_1998 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_1998.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "1998"
});

var layerPM_1999 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_1999.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "1999"
});

var layerPM_2000 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2000.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2000"
});

var layerPM_2001 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2001.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2001"
});

var layerPM_2002 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2002.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2002"
});

var layerPM_2003 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2003.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2003"
});

var layerPM_2004 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2004.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2004"
});

var layerPM_2005 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2005.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2005"
});

var layerPM_2006 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2006.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2006"
});

var layerPM_2007 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2007.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2007"
});

var layerPM_2008 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2008.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2008"
});

var layerPM_2009 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2009.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2009"
});

var layerPM_2010 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2010.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2010"
});

var layerPM_2011 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2011.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2011"
});

var layerPM_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2012.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerPM_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2013.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerPM_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2014.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerPM_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2015.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerPM_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2016.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerPM_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2017.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

var layerPM_2018 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2018.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2018"
});

var layerPM_2019 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2019.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2019"
});

var layerPM_2020 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2020.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2020"
});

var layerPM_2021 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/PM_2021.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2021"
});

/* OZONE LAYERS */
var layerOZONE_1990 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_1990.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "1990"
});

var layerOZONE_1991 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_1991.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "1991"
});

var layerOZONE_1992 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_1992.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "1992"
});

var layerOZONE_1993 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_1993.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "1993"
});

var layerOZONE_1994 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_1994.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "1994"
});

var layerOZONE_1995 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_1995.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "1995"
});

var layerOZONE_1996 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_1996.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "1996"
});

var layerOZONE_1997 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_1997.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "1997"
});

var layerOZONE_1998 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_1998.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "1998"
});

var layerOZONE_1999 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_1999.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "1999"
});

var layerOZONE_2000 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2000.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2000"
});

var layerOZONE_2001 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2001.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2001"
});

var layerOZONE_2002 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2002.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2002"
});

var layerOZONE_2003 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2003.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2003"
});

var layerOZONE_2004 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2004.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2004"
});

var layerOZONE_2005 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2005.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2005"
});

var layerOZONE_2006 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2006.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2006"
});

var layerOZONE_2007 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2007.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2007"
});

var layerOZONE_2008 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2008.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2008"
});

var layerOZONE_2009 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2009.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2009"
});

var layerOZONE_2010 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2010.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2010"
});

var layerOZONE_2011 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2011.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2011"
});

var layerOZONE_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2012.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerOZONE_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2013.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerOZONE_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2014.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerOZONE_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2015.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerOZONE_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2016.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerOZONE_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/OZONE_2017.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

/* NO2 LAYERS */
var layerNO_2005 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2005.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2005"
});

var layerNO_2006 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2006.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2006"
});

var layerNO_2007 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2007.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2007"
});

var layerNO_2008 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2008.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2008"
});

var layerNO_2009 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2009.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2009"
});

var layerNO_2010 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2010.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2010"
});

var layerNO_2011 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2011.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2011"
});

var layerNO_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2012.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerNO_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2013.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerNO_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2014.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerNO_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2015.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerNO_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2016.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerNO_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2017.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

var layerNO_2018 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2018.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2018"
});

var layerNO_2019 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2019.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2019"
});

var layerNO_2020 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/NO_2020.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2020"
});


/* LIGHT LAYERS */ 
var layerLIGHT_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/LIGHT_2012.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerLIGHT_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/LIGHT_2013.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerLIGHT_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/LIGHT_2014.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerLIGHT_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/LIGHT_2015.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerLIGHT_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/LIGHT_2016.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerLIGHT_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/LIGHT_2017.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

var layerLIGHT_2018 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/LIGHT_2018.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2018"
});

var layerLIGHT_2019 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/LIGHT_2019.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2019"
});

var layerLIGHT_2020 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/LIGHT_2020.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2020"
});

var layerLIGHT_2021 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/LIGHT_2021.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2021"
});



var layerBLUE_2000 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/BLUESPACE.png", worldbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2000-2012"
});


var layerGREEN_2000 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2000.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2000"
});

var layerGREEN_2001 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2001_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2001"
});

var layerGREEN_2002 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2002_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2002"
});

var layerGREEN_2003 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2003_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2003"
});

var layerGREEN_2004 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2004_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2004"
});

var layerGREEN_2005 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2005_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2005"
});

var layerGREEN_2006 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2006_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2006"
});

var layerGREEN_2007 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2007_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2007"
});

var layerGREEN_2008 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2008_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2008"
});

var layerGREEN_2009 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2009_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2009"
});

var layerGREEN_2010 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2010_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2010"
});

var layerGREEN_2011 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2011_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2011"
});

var layerGREEN_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2012_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerGREEN_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2013_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerGREEN_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2014_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerGREEN_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2015_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerGREEN_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2016_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerGREEN_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2017_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

var layerGREEN_2018 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2018_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2018"
});

var layerGREEN_2019 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2019_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2019"
});

var layerGREEN_2020 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2020_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2020"
});

var layerGREEN_2021 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2021_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2021"
});

var layerGREEN_2022 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap//GREEN_2022_NEWEST.png", greenbounds, {
    opacity: 1.0,
    interactive: false,
    time: "2022"
}); 


const legendvars = {
  PMTFV: "https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/Legends/pm_legend.jpg",
  OZONE: "https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/Legends/ozone_legend.jpg",
  NOTWO: "https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/Legends/notwo_legend.jpg",
  LIGHT: "https://raw.githubusercontent.com/aidanpcole/png_repo_mexico/main/data/Legends/light_legend.jpg",
  GREEN: "https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/Legends/green_legend.jpg",
  BLUES: "https://raw.githubusercontent.com/aidanpcole/EXPOSOME_IRELAND_UK/main/blue_legend2.jpg",
};


/* make a layergroup for each type of pollution and then use checkies to decide which layergroup is shown */
PMTFVP = L.layerGroup([layerPM_1998,layerPM_1999,layerPM_2000,layerPM_2001,layerPM_2002,layerPM_2003,layerPM_2004,layerPM_2005,layerPM_2006,layerPM_2007,layerPM_2008,layerPM_2009,layerPM_2010,layerPM_2011,layerPM_2012,layerPM_2013,layerPM_2014,layerPM_2015,layerPM_2016,layerPM_2017,layerPM_2018,layerPM_2019,layerPM_2020,layerPM_2021]);
OZONEP = L.layerGroup([layerOZONE_1990,layerOZONE_1991,layerOZONE_1992,layerOZONE_1993,layerOZONE_1994,layerOZONE_1995,layerOZONE_1996,layerOZONE_1997,layerOZONE_1998,layerOZONE_1999,layerOZONE_2000,layerOZONE_2001,layerOZONE_2002,layerOZONE_2003,layerOZONE_2004,layerOZONE_2005,layerOZONE_2006,layerOZONE_2007,layerOZONE_2008,layerOZONE_2009,layerOZONE_2010,layerOZONE_2011,layerOZONE_2012,layerOZONE_2013,layerOZONE_2014,layerOZONE_2015,layerOZONE_2016,layerOZONE_2017]);
NOTWOP = L.layerGroup([layerNO_2005,layerNO_2006,layerNO_2007,layerNO_2008,layerNO_2009,layerNO_2010,layerNO_2011,layerNO_2012,layerNO_2013,layerNO_2014,layerNO_2015,layerNO_2016,layerNO_2017,layerNO_2018,layerNO_2019,layerNO_2020]);
LIGHTP = L.layerGroup([layerLIGHT_2012,layerLIGHT_2013,layerLIGHT_2014,layerLIGHT_2015,layerLIGHT_2016,layerLIGHT_2017,layerLIGHT_2018,layerLIGHT_2019,layerLIGHT_2020,layerLIGHT_2021]); 
GREENP = L.layerGroup([layerGREEN_2000,layerGREEN_2001,layerGREEN_2002,layerGREEN_2003,layerGREEN_2004,layerGREEN_2005,layerGREEN_2006,layerGREEN_2007,layerGREEN_2008,layerGREEN_2009,layerGREEN_2010,layerGREEN_2011,layerGREEN_2012,layerGREEN_2013,layerGREEN_2014,layerGREEN_2015,layerGREEN_2016,layerGREEN_2017,layerGREEN_2018,layerGREEN_2019,layerGREEN_2020,layerGREEN_2021,layerGREEN_2022]);
//SOURCEP = L.layerGroup([layerSOURCE_BIOFUEL]);
BLUESP = L.layerGroup([layerBLUE_2000]);

const picsvars = {
  PMTFV: PMTFVP,
  OZONE: OZONEP,
  NOTWO: NOTWOP,
  LIGHT: LIGHTP,
  GREEN: GREENP,
  BLUES: BLUESP,
};



/* make a layergroup for each type of pollution and then use checkies to decide which layergroup is shown */ /*
PMTFVP = L.layerGroup([layerPM_2010,layerPM_2010_R,layerPM_2011,layerPM_2011_R,layerPM_2012,layerPM_2012_R,layerPM_2013,layerPM_2013_R,layerPM_2014,layerPM_2014_R,layerPM_2015,layerPM_2015_R,layerPM_2016,layerPM_2016_R,layerPM_2017,layerPM_2017_R,layerPM_2018,layerPM_2018_R,layerPM_2019,layerPM_2019_R]);
OZONEP = L.layerGroup([layerOZONE_1990,layerOZONE_1991,layerOZONE_1992,layerOZONE_1993,layerOZONE_1994,layerOZONE_1995,layerOZONE_1996,layerOZONE_1997,layerOZONE_1998,layerOZONE_1999,layerOZONE_2000,layerOZONE_2001,layerOZONE_2002,layerOZONE_2003,layerOZONE_2004,layerOZONE_2005,layerOZONE_2006,layerOZONE_2007,layerOZONE_2008,layerOZONE_2009,layerOZONE_2010,layerOZONE_2011,layerOZONE_2012,layerOZONE_2013,layerOZONE_2014,layerOZONE_2015,layerOZONE_2016,layerOZONE_2017]);
NOTWOP = L.layerGroup([layerNO_1990,layerNO_1995,layerNO_2000,layerNO_2005,layerNO_2006,layerNO_2007,layerNO_2008,layerNO_2009,layerNO_2010,layerNO_2011,layerNO_2012,layerNO_2013,layerNO_2014,layerNO_2015,layerNO_2016,layerNO_2017,layerNO_2018,layerNO_2019,layerNO_2020]);
/*LIGHTP = L.layerGroup([layerLIGHT_2012,layerLIGHT_2013,layerLIGHT_2014,layerLIGHT_2015,layerLIGHT_2016,layerLIGHT_2017,layerLIGHT_2018,layerLIGHT_2019,layerLIGHT_2020,layerLIGHT_2021]); 
SOURCEP = L.layerGroup([layerSOURCE_BIOFUEL]);*/ /*
BLUESP = L.layerGroup([layerBLUE_2000]);



const picsvars = {
  PMTFV: PMTFVP,
  OZONE: OZONEP,
  NOTWO: NOTWOP,
  BLUES: BLUESP,
/*  LIGHT: LIGHTP,
  SOURCE: SOURCEP,*/
//};


let picGroup = determinePics();
var sliderControl = L.control.sliderControl({position: "topright", layer: picGroup, timeAttribute: 'time', follow: 1, startTimeIdx: 0, timeStrLength: 4, alwaysShowDate: true});




function initializeTime() {
  console.log("INITIALIZETIME FN");
  	/* need to remove the initial pm 2.5 slider and update based on checks*/
	map.addControl(sliderControl);
	setInterval(function(){
            var current = $(this.sliderBoxContainer).slider("value");
            var max = sliderControl.options.maxValue + 1;
            var step = ++current % max;
            $(this.sliderBoxContainer).slider("value", step);
            sliderControl.slide(null, {value: step});
        }, 1500);
  console.log(sliderControl);
  sliderControl.startSlider();
}


function determinePics() {
	console.log("IN DETERMINEPICS");
	let pics = [];
	let names = [];
	if (checkies === undefined) {
		pics = PMTFVP;
	} else {
	checkies.forEach(c => {
		if (c.checked === true) {
			console.log(checkies);
			let n = c.id;
			names.push(n);
		}
	});
	names.forEach(name => {
		if (polygonLayers.includes(name)) {
			pics = picsvars[name];
		}
	});
} return pics;
}


let currentLayer = "White Canvas";
map.on('baselayerchange', function(e) {
	currentLayer = e.name;
})

let geoList;
let currentGeoJsonLayer; // Track the active GeoJSON layer globally

$.getJSON("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/world.geojson", function (json) {
    var geoLayer = L.geoJson(json, {
        onEachFeature: handleFeatureInteractions // Attach interactions initially
    }).addTo(map);

    geoList = new L.Control.GeoJSONSelector(geoLayer, {
        zoomToLayer: true,
        listDisabled: true,
        activeListFromLayer: false,
        activeLayerFromList: true,
        listOnlyVisibleLayers: false,
        collapsed: true,
        position: "bottomleft"
    }).addTo(map);

    currentGeoJsonLayer = geoLayer; // Initialize current layer globally
});

function removeAllSliders() {
    if (sliderControl) map.removeControl(sliderControl);
    $("#leaflet-slider").remove();
    $(".leaflet-control-slider").remove();
    $("#slider-timestamp").remove();
    $(".sliderBoxContainer").remove();
}

function determineTime() {
    console.log("IN DETERMINE TIME");

    let selectedGeoItems = [];
    $(".geojson-list-group li input:checked").each(function () {
        selectedGeoItems.push($(this).parent().text().trim());
    });

    // Remove existing controls and layers
    map.removeControl(sliderControl);
    removeAllSliders();
    $("img.leaflet-control").remove();
    map.removeControl(geocoder);
    map.removeControl(legend);
    if (geoList) map.removeControl(geoList);

    let wasVelocityLayerActive = map.hasLayer(velocityLayer);
    map.eachLayer(layer => map.removeLayer(layer));
    if (wasVelocityLayerActive) map.addLayer(velocityLayer);

    // Add base and exposure layers
    let picGroupoink = determinePics();
    map.addLayer(baseLayers[currentLayer !== "White Canvas" ? currentLayer : "White Canvas"]);
    if (picGroupoink === LIGHTP) {
        map.removeLayer(baseLayers["White Canvas"]);
        map.removeLayer(baseLayers["Satellite"]);
        map.addLayer(baseLayers["Grey Canvas"]);
    }

    // Add new legend
    let legendOINK = determineLegend();
    let newLegend = L.control({ position: "bottomleft" });
    newLegend.onAdd = () => {
        let img = L.DomUtil.create("img");
        img.src = legendOINK;
        img.style.width = "143px";
        img.style.height = "80px";
        return img;
    };
    newLegend.addTo(map);

    // Re-add slider control
    sliderControl = L.control.sliderControl({
        position: "topright",
        layer: picGroupoink,
        timeAttribute: "time",
        follow: 1,
        startTimeIdx: 0,
        timeStrLength: 4,
        alwaysShowDate: true
    });
    map.addControl(sliderControl);
    sliderControl.startSlider();

    // Reload GeoJSON and selector
    reloadGeoJsonLayer(selectedGeoItems);

    // Re-add geocoder
    map.addControl(geocoder);
}

function reloadGeoJsonLayer(selectedGeoItems) {
    if (currentGeoJsonLayer && map.hasLayer(currentGeoJsonLayer)) {
        map.removeLayer(currentGeoJsonLayer);
    }

    $.getJSON("https://raw.githubusercontent.com/aidanpcole/WORLDEXPOSOME/main/data/DataForMap/world.geojson", function (json) {
        currentGeoJsonLayer = L.geoJson(json, {
            onEachFeature: handleFeatureInteractions
        }).addTo(map);

        // Recreate GeoJSON selector and add it to the map
        geoList = new L.Control.GeoJSONSelector(currentGeoJsonLayer, {
            zoomToLayer: true,
            listDisabled: true,
            activeListFromLayer: false,
            activeLayerFromList: true,
            listOnlyVisibleLayers: false,
            collapsed: true,
            position: "bottomleft"
        }).addTo(map);

        // Restore selection
        currentGeoJsonLayer.eachLayer(layer => {
            const countryName = layer.feature.properties.name;
            if (selectedGeoItems.includes(countryName)) {
                layer.setStyle(geoList.options.selectStyle);
                layer.selected = true;
            } else {
                enableCountryInteraction(layer); // Ensure interactions are restored
            }
        });

        reapplyGeoJsonSelectorInteractions(selectedGeoItems);
    });
}

function handleFeatureInteractions(feature, layer) {
    enableCountryInteraction(layer);
}

function enableCountryInteraction(layer) {
    layer.on("click", function () {
        if (layer.selected) return;

        currentGeoJsonLayer.eachLayer(l => {
            l.setStyle(geoList.options.style);
            l.selected = false;
        });

        layer.setStyle(geoList.options.selectStyle);
        layer.selected = true;

        const countryName = layer.feature.properties.name;
        disableGeoJsonListItem([countryName]);

        geoList.fire("selector:change", { selected: true, layers: [layer] });

        if (layer.getBounds) {
            map.flyTo(layer.getBounds().getCenter(), map.getBoundsZoom(layer.getBounds()), {
                animate: true,
                duration: 1.5
            });
        }
    });

    layer.on("mouseover", function () {
        if (!layer.selected) {
            layer.setStyle(geoList.options.activeStyle);
        }
    });

    layer.on("mouseout", function () {
        if (!layer.selected) {
            layer.setStyle(geoList.options.style);
        }
    });
}

function reapplyGeoJsonSelectorInteractions(selectedGeoItems) {
    $(".geojson-list-group li").each(function () {
        const itemText = $(this).text().trim();
        const input = $(this).find("input");

        if (selectedGeoItems.includes(itemText)) {
            // Selected country: disable interaction and set blue checkbox
            input.prop("checked", true);
            $(this)
                .css("font-weight", "bold")
                .css("pointer-events", "none")
                .css("cursor", "default");
        } else {
            // Non-selected countries: re-enable interactions and clear checkbox
            input.prop("checked", false);
            $(this)
                .css("font-weight", "")
                .css("pointer-events", "auto")
                .css("cursor", "pointer");
        }
    });

    currentGeoJsonLayer.eachLayer(layer => {
        const countryName = layer.feature.properties.name;
        if (selectedGeoItems.includes(countryName)) {
            disableCountryInteraction(layer); // Keep selected country unhoverable
        } else {
            enableCountryInteraction(layer); // Enable interaction for others
        }
    });
}


function disableCountryInteraction(layer) {
    layer.off("click mouseover mouseout");
    layer.setStyle(geoList.options.selectStyle);

    // Update the checkbox appearance for the selected item
    const listItem = layer.itemList;
    if (listItem) {
        $(listItem)
            .find("input")
            .css({
                "background-color": "#1978cf",
                "border-color": "#1978cf"
            });
    }
}





















initializeMap();
initializeTime();
var geocoder = L.Control.geocoder({position: 'topright', placeholder: 'Search for location...'})
geocoder.addTo(map);
L.control.zoom({
  position: 'bottomright'
}).addTo(map);



map.setView([11.3, -49], 3)


let velocityLayer;
$.getJSON("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/wind-global.json", function(data) {
  velocityLayer = L.velocityLayer({
    displayValues: false,
    displayOptions: {
      velocityType: "Global Wind",
      position: "bottomright",
      emptyString: "No wind data"
    },
    data: data,
    maxVelocity: 15
  });
  layerControl.addOverlay(velocityLayer, "Wind - Global");
});

/*var legendbounds = new L.LatLngBounds(
    new L.LatLng(11.850403911080494, 114.78228464710038),
    new L.LatLng(15.765228811080178, 117.34279637664724));
var pm25_scheme = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/pm25_scheme.png", legendbounds, {opacity: 1.0, interactive: false});
map.addLayer(pm25_scheme);
pm25_scheme.addTo(map);
var legenedControl = L.control.layers(pm25_scheme, null, {position: 'bottomright',collapsed:false}).addTo(map);
map.addControl(legendControl); */


function determineLegend() {
	console.log("IN DETERMINELEGEND");
	let legend = [];
	let names = [];
	if (checkies === undefined) {
		legend = PMLEGEND;
	} else {
		checkies.forEach(c => {
			if (c.checked === true) {
				console.log(checkies);
				let n = c.id;
				names.push(n);
			}
		});
		names.forEach(name => {
			if (polygonLayers.includes(name)) {
				legend = legendvars[name];
			}
		});
	} return legend;
}

var legend = L.control({position:'bottomleft'});

legend.onAdd = function(map) {
        var img = L.DomUtil.create('img', 'legendboy', this._container);
        let legendurl = determineLegend();
				
        img.src = legendurl;
        img.style.width = '143px';
        img.style.height = '80px';

        return img;
    };

legend.addTo(map);
console.log(legend);



