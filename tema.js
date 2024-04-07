// //s-au listat toate postarile
// // fetch('https://jsonplaceholder.typicode.com/posts', {
// //     method: 'GET'
// // })
// // .then((response)=>response.json())
// // .then((data)=> console.log(data))

// // fetch('https://jsonplaceholder.typicode.com/posts/2', {
// //     method: 'GET'
// // })
// // .then((response)=>response.json())
// // .then((data)=> console.log(data)) //s-u listat 2 postari

// //POST
// const newPost = {
//     userId: 10,
//     id: 10,
//     title: "lorem10"

    
// }
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method:'POST',
//     body: JSON.stringify(newPost),
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8',
//       },
// })
// .then((response)=> response.json())
// .then((data) => console.log(data))
// //PUT
// fetch('https://jsonplaceholder.typicode.com/posts/2', {
//     method: 'PUT',
//     body: JSON.stringify({
//         userId: 20,
//         title: 'lorem dolores 20',
//         body:'lalalala'
//     }),
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8',
//       },
// })
// .then((res)=> res.json())
// .then((data)=>console.log(data))

// //delete
// fetch('https://jsonplaceholder.typicode.com/posts/3',{
//     methoid:'DELETE'

// })
const utilizatori = {
    '1':'alex',
    '2':'cristina',
    '3':'valeria',
    '4':'victor',
    '5':'igor',
    '6':'ana',
    '7':'eva',
    '8':'sandu',
    '9':'dan',
    '10':'natalia'
}
// const functia =(data)=>{
//     data.forEach((post)=>{
//     utilizatori.userId = post.userId
//     })
// }
// fetch('https://jsonplaceholder.typicode.com/posts',{
    
// })
// .then((res)=>res.json())
// .then((data)=>functia(data))
// .catch((err)=>console.log('ups, eroare', err))

// functia()

const lista = document.getElementById('lista')
const functia =(list)=>{
    list.forEach((post)=>{
        const el = document.createElement('li')
        el.innerText = `${post.id} utilizatori['1']`
        utilizatori.userId = post.userId
        lista.appendChild(el)
    })
}
fetch('https://jsonplaceholder.typicode.com/posts',{
    
})
.then((res)=>res.json())
.then((data)=>functia(data))
.catch((err)=>console.log('ups, eroare', err))

functia()