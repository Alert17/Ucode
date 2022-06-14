

let base = document.querySelector("main");


let cond = {
    target: null
}

base.addEventListener("dblclick", event => {
    let module = event.target
    if (module.classList.contains("block")) {
        switch (module.getAttribute("accept")) {
            case "true":
                module.setAttribute("accept", "false");
                break;
            case "false":
                module.setAttribute("accept", "true");
                break;
        }
    }
})

base.onmousedown = ((event) => {
    let module = event.target
    if (module && module.classList.contains("block") && module.getAttribute("accept") === "true") {
        module.style.cursor = "none";
        cond.target = module;
        cond.offsetX = event.offsetX;
        cond.offsetY = event.offsetY;
    }
});

base.onmouseup = ((event ) => {
    let module = event.target
    module.style.cursor = "default";
    cond.target = null;
});

base.addEventListener("mousemove", e => {

    if (cond.target) {
        cond.target.style.left = (e.pageX - cond.offsetX) + "px";
        cond.target.style.top = (e.pageY - cond.offsetY) + "px";
    }
});

