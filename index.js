document.querySelectorAll(".menu-icon").forEach(function(icon) {
    icon.addEventListener("click", function(){
        const menuIconInner = document.getElementById("menuIconInner");
        if(menuIconInner.style.display === "none" || menuIconInner.style.display === ""){
            menuIconInner.style.display = "block"
        } else {
            menuIconInner.style.display = "none";
        }
    })
})

document.querySelector(".asset-menu-icon").addEventListener("click", function(){
        const assetIconInner = document.getElementById("assetIconInner");
        if(assetIconInner.style.display === "none" || assetIconInner.style.display === ""){
            assetIconInner.style.display = "block"
        } else {
            assetIconInner.style.display = "none";
        }
    });