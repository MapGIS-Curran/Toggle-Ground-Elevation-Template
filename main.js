require(["esri/Map", "esri/views/SceneView"], 
function(Map, SceneView) {
  // Create the Map
  var map = new Map({
    basemap: "hybrid",
    ground: "world-elevation"
  });

  // Create the SceneView
  var view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: [-150.841, 62.633, 5000],
      tilt: 80
    }
  });

  view.when(function() {
    document
      .getElementById("elevationInput")
      .addEventListener("change", updateElevation);

    function updateElevation(ev) {
      // Turn ground layers visibility on/off
      map.ground.layers.forEach(function(layer) {
        layer.visible = ev.target.checked;
      });
    }
  });
});
