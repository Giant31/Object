var btn = document.querySelector("button")
function addTask(e) {
    console.log(e)
    var task = prompt("Enter a task")

    var tableRow = `
        <tr>
            <td>1</td>
            <td>${task}</td>
            <td>2019-1-12</td>
            <td>completed</td>
        </tr>
                    `

    document.querySelector('tbody').innerHTML += tableRow
}
btn.onclick = addTask

var sNo = 1;
for (sNo; sNo < 10; sNo++) {
    console.log(sNo)
}
