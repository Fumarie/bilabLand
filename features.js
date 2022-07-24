const featureText = [
    ["Интеграция данных", "BILAB имеет большой опыт в реализации решений для интеграции данных на BI платформах."],
    ["Big Data", "Использование Big Data помогает вашему предприятию управлять и извлекать выгоду из огромного объема данных, получаемых из постоянно увеличивающихся источников."],
    ["Бизнес аналитика", "BILAB имеет большой опыт в реализации решений для интеграции данных на BI платформах."],
    ["Инновационное развитие и перспективные проекты", ""],
    ["Собственная разработка ПО", ""],
]

const changeFeature = (index) => {

    const textNode = document.getElementById("featureText")

    console.log()

    textNode.children[0].innerHTML = featureText[index][0]
    textNode.children[1].innerHTML = featureText[index][1]

    let features = []
    document.querySelectorAll(".features").forEach(elem => features.push(...elem.childNodes))
    features = features.filter(node => node.nodeName !== "#text")
    features.forEach((elem, i) => {
        if(i === index) {
            elem.classList.add("activeFeature")
        } else {
            elem.classList.remove("activeFeature")
        }
    })
}
