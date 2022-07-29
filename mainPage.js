const section = document.querySelector(".infoSection")
const isEnglish = window.location.href.includes("/en/")

let sliderIndex = 1

const setNextPage = () => {
    console.log("SLIDe")
    if(++sliderIndex > 3) sliderIndex = 1
    section.style.background = isEnglish ?
        `url('../images/mainSlider${sliderIndex}.png')` :
        `url('./images/mainSlider${sliderIndex}.png')`
    section.style.backgroundRepeat = "no-repeat"
    section.style.backgroundSize = "cover"

}


setInterval(setNextPage, 4000)
