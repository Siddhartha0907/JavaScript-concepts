
function handleClickButton() {
    console.log("Heyyy I am Clicked")
    alert('Helllo')
}
const el = document.getElementById("clickButton")
const nameBlock = document.getElementById("name-block")
el.addEventListener("click", () => {
    if (nameBlock.style.color == "red") {
        nameBlock.style.color = "blue"
    }
    else {
        nameBlock.style.color = "red"
    }
})
el.onclick = () => {
    console.log("Hello it is clicked")
}
function doClickEvent() {
    console.log("Hello it is working")
}
el.addEventListener("click", doClickEvent)
el.addEventListener('click', () => {
    console.log("It is clicked")
})
console.log(document.querySelector("body").children)
const allChildren = document.querySelector("body").children

for (let i = 0; i < allChildren.length; i++) {
    allChildren.item(i).addEventListener("click", () => {
        allChildren.item(i).remove()
    })
}