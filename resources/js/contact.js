
mapboxgl.accessToken =
    "pk.eyJ1Ijoic2h1LXZybyIsImEiOiJja2x4bndlYjUwMGhqMnJxN3oyYWE3cjRiIn0.b3G5Z9mGlV7XiSaSAwunEA";
var map = new mapboxgl.Map({
    style: "mapbox://styles/mapbox/light-v10",
    center: [-73.2658828, 10.4720457], 
    zoom: 18.5, 
    pitch: 45,
    bearing: -17.6,
    container: "map", 
    antialias: true,
});

map.on("load", function () {
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer(
        {
            id: "3d-buildings",
            source: "composite",
            "source-layer": "building",
            filter: ["==", "extrude", "true"],
            type: "fill-extrusion",
            minzoom: 15,
            paint: {
                "fill-extrusion-color": "#aaa",

                
                "fill-extrusion-height": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    15.05,
                    ["get", "height"],
                ],
                "fill-extrusion-base": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    15.05,
                    ["get", "min_height"],
                ],
                "fill-extrusion-opacity": 0.6,
            },
        },
        labelLayerId
    );
});

function vanillaTilt(element) {
    VanillaTilt.init(document.querySelector(element), {
        max: 10,
        speed: 200,
        glare: true,
        "max-glare": 0.5,
    });
}

vanillaTilt(".info1");
vanillaTilt(".info2");
vanillaTilt(".info3");



;
