const elements = document.getElementsByClassName('web')
console.log(elements)
for (let i = 0; i < elements.length; i++) {
    elements.item(i).style.background = 'red'
    elements.item(i).style.textDecoration = 'underline'
}

const el = document.getElementsByClassName('paragraph')
for (let i = 0; i < el.length; i++) {
    el.item(i).remove()
}