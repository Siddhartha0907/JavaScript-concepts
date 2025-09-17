let a = 10
let b = 20

let result = a+b

async function getData(){
    let resultFromServer = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
   )
   console.log(await resultFromServer.json())
}
// let resultFromServer = await fetch(
//     "https://jsonplaceholder.typicode.com/posts"
// )

//console.log(resultFromServer)

//console.log(result)
getData()
// fetch("https://jsonplaceholder.typicode.com/posts")
//  .then((data) => { 
//     console.log(data)
//  })
//  .catch((error) => { 
//     console.log(error) 
// })
//  .finally(() => {})
console.log(result)