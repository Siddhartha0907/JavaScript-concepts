const el = document.getElementById('username')
console.log(el)

el.setAttribute('aria', '345')
console.log(el.innerText)
el.innerText = "John Doe"

el.classList.add('red-color', 'underline')
console.log(el.classList)

el.classList.remove('red-color')
el.style.color = 'blue'
el.style.textDecoration = 'underline'

console.log(el.parentElement)
el.parentElement.style.background = 'red'
el.remove()
