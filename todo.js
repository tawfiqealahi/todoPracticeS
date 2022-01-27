const input = document.qurySelector('input')








// const input = document.querySelector('#itemInput');
// let lists = [];
// const ul = document.getElementById('itemList');
// input.addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         const {value} = input;
//         // console.log(value); 
//         const todo = {
//             _id: lists.length+1,
//             name: value,
//             isDone: false,
//             date: new Date().toLocaleDateString(),
//         } 
//         // addToDB(todo);
//         lists.push(todo);
//         // console.log(lists);
//         showlist();
//     }
// });
// // show  input value
//  function addToDB(todo){
//     //  i can also distructure the todo object given above       ( const {name, isdone, date} = todo; } )
//     //  console.log(todo);
//     const div = document.createElement('div');
//     div.innerHTML =`
//     <li class="list-group-item mb-2">
//     <div class="row">
//         <div class="col">
//         <span class="${todo.isDone ? "done" : "" }">${todo.name} </span>
//             <span class="text-muted">${todo.date}</span>
//         </div>
//         <div class="col-lg-2">
//             <div class="d-flex align-items-center">
//                 <button onclick="test(${todo._id})" class="fas fa-trash-alt badge bg-danger del-btn btn-sm" data-id="${todo._id}">
//                     ::
//             </button>
//                 <button onclick="handleDone(${todo._id})" class="fas fa-check badge bg-primary done-btn btn-sm" data-id="1">
//                     ::
//             </button>
//         </div>
//         </div>

//     </div>

// </li>
//     `
//     ul.appendChild(div);
//     // console.log(div);
//     // console.log(li);
//  };
// //  
// function showlist(){
//     ul.textContent = '';
//     lists.forEach((todo) =>{
//         addToDB(todo);
//     })
// }
// //  delete mathod
// function test(id) {
//     // console.log(id);
//     const deleted = lists.filter(todo => todo._id !== id);
//     lists = deleted;
//     // console.log('ok');
//     showlist();
// }
// // done mathod
// function handleDone(id) {
//     // console.log(id);
//     const done = lists.find(todo => todo._id == id);
//     done.isDone = !done.isDone;
//     console.log(lists);
//     showlist();
// }