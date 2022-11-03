// let isIgnite = true
// function changeCard(event) {
//     const card = (event.currentTarget)
//     const backgroundImage = isIgnite 
//     ? "url(./assets/bg-explorer.svg)"
//     : "url(./assets/bg-ignite.svg)"
//     isIgnite = !isIgnite
//     card.style.backgroundImage = backgroundImage
// }

let isIgnite = true
function changeCard(event) {
    const card = (event.currentTarget)
    const bg = isIgnite 
    ? "explorer"
    : "ignite"
    isIgnite = !isIgnite
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}