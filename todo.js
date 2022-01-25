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
    //  console.log(todo);
    const li =`
    
    `
 }




















