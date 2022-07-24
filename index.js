window.onload = () => {
    let block = null
    if (/index.html/.test(window.location.href)) {
        block = document.getElementById("main")
        if (block) {
            block.classList.add("active")
        }
    } else if (/products/.test(window.location.href)) {
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
    }
}
