AFRAME.registerComponent("coins",{
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
        var terrainEl = document.querySelector("#treasureCoins")
        var coinEl  = document.createElement("a-entity")
        coinEl.setAttribute("position", position)
        coinEl.setAttribute("id",id)
        coinEl.setAttribute("animation", {property: "rotation", to: "0 360 0", loop: "true", dur: 1000})
        coinEl.setAttribute("geometry", {primitive: "circle", radius: 1})
        coinEl.setAttribute("material", "color", "#ff9900")
        terrainEl.appendChild(coinEl)
    }
})