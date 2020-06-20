document.addEventListener("DOMContentLoaded", () => {

    const icon = document.querySelector("#icon");
    const audio = document.querySelector("#audio");



    audio.addEventListener("play", () => {
        icon.setAttribute("class", "fab fa-napster fa-5x fa-spin")
        console.log(audio.duration);
        console.log(audio.currentTime)
    })

    audio.addEventListener("pause", () => {
        icon.setAttribute("class", "fab fa-napster fa-5x")
    })
})


