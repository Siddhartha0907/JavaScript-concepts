const button = document.getElementById('clickButton')
const container = document.getElementById('my-container')

let count = 1

button.addEventListener('click', () => {
    //const el = document.createElement('h1')
    //const el = document.createElement('li')
    //el.innerText = "This heading is created dynamically."
    //container.innerHTML = el
    //container.innerHTML = "<h1>This heading is created dynamically.</h1>"
    el.innerText = count
    //count++
    container.appendChild(el)
    count++
})