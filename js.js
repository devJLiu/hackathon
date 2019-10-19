var map = L.map('map').setView([41.66, -4.72], 15);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

var wmsLayer = L.tileLayer.wms('https://image.discomap.eea.europa.eu/arcgis/services/Corine/CLC2018_WM/MapServer/WMSServer?', {
    layers: '12,13',
    opacity: 0.75
});
var l = L.tileLayer.wms('https://image.discomap.eea.europa.eu/arcgis/services/Corine/CLC2018_WM/MapServer/WMSServer?', {
    layers: '12,13',
    opacity: 0
});

var layerNasaBlueMarble = L.tileLayer.wms('https://neo.sci.gsfc.nasa.gov/wms/wms', {
    layers: 'BlueMarbleNG',
    crs: L.CRS.EPSG4326,
    opacity: 0.75
}).addTo(map);
var layerNasaAerosolOpticalThickness = L.tileLayer.wms('https://neo.sci.gsfc.nasa.gov/wms/wms', {
    layers: 'MODAL2_M_AER_OD',
    crs: L.CRS.EPSG4326,
    opacity: 0.75
}).addTo(map);
var layerNasaAerosolParticleRadius = L.tileLayer.wms('https://neo.sci.gsfc.nasa.gov/wms/wms', {
    layers: 'MODAL2_M_AER_RA',
    crs: L.CRS.EPSG4326,
    opacity: 0.75
}).addTo(map);
var layerNasaOceansTemp = L.tileLayer.wms('https://neo.sci.gsfc.nasa.gov/wms/wms', {
    layers: 'AVHRR_CLIM_M',
    crs: L.CRS.EPSG4326,
    opacity: 0.75
}).addTo(map);
var layerNasaTempDay = L.tileLayer.wms('https://neo.sci.gsfc.nasa.gov/wms/wms', {
    layers: 'MOD_LSTD_CLIM_M',
    crs: L.CRS.EPSG4326,
    opacity: 0.75
}).addTo(map);
var layerNasaTempNight = L.tileLayer.wms('https://neo.sci.gsfc.nasa.gov/wms/wms', {
    layers: 'MOD_LSTN_CLIM_M',
    crs: L.CRS.EPSG4326,
    opacity: 0.75
}).addTo(map);
var layerNasaBathymetry = L.tileLayer.wms('https://neo.sci.gsfc.nasa.gov/wms/wms', {
    layers: 'GEBCO_BATHY',
    crs: L.CRS.EPSG4326,
    opacity: 0.75
}).addTo(map);
var layerNasaCO = L.tileLayer.wms('https://neo.sci.gsfc.nasa.gov/wms/wms', {
    layers: 'MOP_CO_M',
    crs: L.CRS.EPSG4326,
    opacity: 0.75
}).addTo(map);
var layerNasaNetPrimaryProductivity = L.tileLayer.wms('https://neo.sci.gsfc.nasa.gov/wms/wms', {
    layers: 'MOD17A2_M_PSN',
    crs: L.CRS.EPSG4326,
    opacity: 0.75
}).addTo(map);
var layerNasaPopulation = L.tileLayer.wms('https://neo.sci.gsfc.nasa.gov/wms/wms', {
    layers: 'SEDAC_POP',
    crs: L.CRS.EPSG4326,
    opacity: 0.75
}).addTo(map);

var overlayMaps = {
    "Vacio": l,
    "CLC": wmsLayer,
    "Población": layerNasaPopulation,
    "Canica Azul": layerNasaBlueMarble,
    "Densidad óptica de aerosol": layerNasaAerosolOpticalThickness,
    "Radio de particulas de aerosol": layerNasaAerosolParticleRadius,
    "Temperatura del oceano": layerNasaOceansTemp,
    "Temperatura media de dia": layerNasaTempDay,
    "Temperatura media de noche": layerNasaTempNight,
    "Batimetría": layerNasaBathymetry,
    "Monoxido de carbono": layerNasaCO,
    "PPN": layerNasaNetPrimaryProductivity
};
L.control.layers(overlayMaps).addTo(map);
L.control.scale().addTo(map);
L.Control.Watermark = L.Control.extend({
    onAdd: function(map) {
        var img = L.DomUtil.create('img');

        img.src = 'logo.svg';
        img.style.width = '100px';

        return img;
    },

    onRemove: function(map) {}
});

L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}

L.control.watermark({ position: 'bottomleft' }).addTo(map);