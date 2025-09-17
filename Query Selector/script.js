const code = document.querySelector("div")
console.log(body)
body.innerHTML = "<h1>Hacked!!</h1>"
console.log(body.innerHTML)
code.innerHTML = "<code>alert('Hello')</code>"

const username = document.querySelector("#username")
username.innerText = "Jhon Doe"
console.log(username.innerText)

const ele = document.querySelectorAll(".paragraph")
console.log(web)
console.log(ele.innerHTML)
ele.innerHTML = "This is a website"
console.log(ele.children)
ele.forEach((e) => {
    console.log(e.innerHTML);
});