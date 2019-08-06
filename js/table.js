var btn = document.querySelector("button")

function addTask(e) {
    console.log(e)
    var task = prompt("Enter a task")
    var created = prompt("when did you created")
    //var status = prompt("whats the status")
    var sNo = 1 ;
    //Getting the last serial number
    var lastSN = document.querySelector('tbody tr:last-child td')
    if(lastSN){
         //Adding 1 to the last serial number
    sNo = parseInt(lastSN.innerText) + 1; 
    }
   
   // var colum=0;
   // var lastColum= document.querySelector('tbody tr:last=child td')
    //colum.remove(lastColum.innerText);
    
    var tableRow = `
        <tr>
            <td>${sNo}</td>
            <td>${task}</td>
            <td>${created}</td>
            <td>
                <button onclick="deleteTask(this)">delete</button>
                <button>remarks</button>
            </td>
            
        </tr>
                    `

    document.querySelector('tbody').innerHTML += tableRow

}
function deleteTask(e){
console.log(e.parentElement.parentElement.remove() )
}
btn.onclick = addTask



/*
var btn1= document.querySelector("tbody ")
function todelete(){
    delete(addTask)
}

/*
var remove = addTask
var btn2 = document.querySelector("button")
function deleteRow(e){
    console.log(e)
    remove(addTask)

}
btn2.onclick = deleteRow
*/ 
document.write("hello")

/*
btn
var sNo = 1;
for (sNo; sNo < 10; sNo++) {
    console.log(sNo)
}
*/
var row = {
    addTask
}
delete row.addTask;




