let block = null
if (/products/.test(window.location.href)) {
    block = document.getElementById("products")
    if (block) {
        block.classList.add("active")
    }
} else if (/industries/.test(window.location.href)) {
    block = document.getElementById("industries")
    if (block) {
        block.classList.add("active")
    }
} else if (/blog/.test(window.location.href)) {
    block = document.getElementById("blog")
    if (block) {
        block.classList.add("active")
    }
} else if (/contacts/.test(window.location.href)) {
    block = document.getElementById("contacts")
    if (block) {
        block.classList.add("active")
    }
} else {
    block = document.getElementById("main")
    if (block) {
        block.classList.add("active")
    }
}

const toggleBurger = () => {
    const headerNavigation = document.querySelector(".headerNavigation")

    const toggled =     headerNavigation.classList.contains("toggle")
    if(toggled) {
        headerNavigation.classList.remove("toggle")
    } else {
        headerNavigation.classList.add("toggle")
    }
}
