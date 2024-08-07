AFRAME.registerComponent("fish",{
    init: function() {
        for (var i = 1; i<=10; i++){
            id = 'coin${i}';
            var posX =(Math.random() * 100 + (-50));      
            var posY = (Math.random() * 5 + (5));
            var posZ = (Math.random() * 60 + -40);
        var position = {x:posX,y:posY,z:posZ}

        this.flyingBirds(id,position)
        }
    },
    flyingBirds:(id, position) => {
        var terrainEl = document.querySelector("#fishModels")
        var fishEl  = document.createElement("a-entity")
        fishEl.setAttribute("position", position)
        fishEl.setAttribute("id",id)
        fishEl.setAttribute("animation", {property: "rotation", to: "100 10 -20", loop: "true", dur: 20000})
        fishEl.setAttribute("rotation", {x:0,y:180,z:0})
        fishEl.setAttribute("scale", {x:0.3,y:0.3,z:0.3})
        fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf")
        terrainEl.appendChild(fishEl)
    }
})