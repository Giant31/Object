var btn = document.querySelector("button")


function addTodos(task,created){
var sNo = 1;  
var sirelNo = document.querySelector("tbody tr:last-child td")    
    
    if(sirelNo){
        sNo=parseInt(sirelNo.innerText)+1;
    }
    var table=`
                        <td>${sNo}</td>
                        <td>${task}</td>
                        <td>${created}</td>
                        <td onclick="deleteAll(this)"><button>delete</button></td>
    `
    document.querySelector("tbody").innerHTML += table
}



function deleteAll(e){
    console.log(e.parentElement.parentElement.remove())
}
btn.onclick = addTodos

console.log(btn)

console.log(document.querySelectorAll('button'))


document.querySelector('form').onsubmit = function(e){
    e.preventDefault()
    console.log(e.srcElement[0],e.srcElement[1 ] )
    var task = e.srcElement[0].value;
    var created = e.srcElement[1].value;

    console.log('The values of the inputs', e.srcElement[0].value )
    console.log('The values of the inputs', e.srcElement[1].value )
    //addTodos(e.srcElement[0].value,e.srcElement[1].value)
    addTodos(task,created)
}