const input = document.querySelector('#itemInput');

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const {value} = input;
        // console.log(value); 
        const todo = {
            name: value,
            isDone: false,
            date: new Date().toLocaleDateString(),
        } 
        addToDB(todo);
    }
});

// show  input value

 function addToDB(todo){
    //  i can also distructure the todo object given above       ( const {name, isdone, date} = todo; } )
    //  console.log(todo);
    const ul = document.getElementById('itemList');
    const div = document.createElement('div');
    div.innerHTML =`
    <li class="list-group-item mb-2">
    <div class="row">
        <div class="col">
        <span class="">${todo.name} </span>
            <span class="text-muted">${todo.date}</span>
        </div>
        <div class="col-lg-2">
            <div class="d-flex align-items-center">
                <button class="fas fa-trash-alt badge bg-danger del-btn btn-sm" data-id="1">
                    ::
            </button>
                <button class="fas fa-check badge bg-primary done-btn btn-sm" data-id="1">
                    ::
            </button>
        </div>
        </div>

    </div>

</li>
    `
    ul.appendChild(div);
    console.log(div);
    // console.log(li);
 }



















