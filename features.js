const featureText = [
    ["Интеграция данных", "Bilab имеет большой опыт в реализации решений для интеграции данных на BI платформах."],
    ["Big Data", "Использование Big Data помогает вашему предприятию управлять и извлекать выгоду из огромного объема данных, получаемых из постоянно увеличивающихся источников."],
    ["Бизнес аналитика", "Bilab имеет большой опыт в реализации решений для интеграции данных на BI платформах."],
    ["Инновационное развитие", "Bilab помогает внедрять самые инновационные технологии в бизнес процессы своих заказчиков"],
    ["Собственная разработка ПО", "Bilab имеет налаженную систему разработки новых продуктов на базе лаборатории"],
]

let currentIndex = 0

const changeFeature = (index) => {

    currentIndex = index

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

    reStartFeatureInterval()
}

const createFeatureInterval = () => {
    return setInterval(() => {
        if(currentIndex === 4) {
            changeFeature(0)
        } else {
            changeFeature(currentIndex + 1)
        }
    }, 2000)
}

let interval = createFeatureInterval()

const reStartFeatureInterval = () => {
    clearInterval(interval)
    interval = createFeatureInterval()
}
