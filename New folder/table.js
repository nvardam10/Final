var arr = [];

function addEmp(){
    event.preventDefault();
    validate();
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let designation = document.getElementById("role").value;
    let image = document.getElementById("img").value;
    let table = document.getElementById("table");
    let add = {};

    add['id'] = id;
    add['name'] = name;
    add['age'] = age;
    add['gender'] = gender;
    add['role'] = designation;
    add['img'] = image;
    add['table'] = table;

    arr.push(add);

    let str = " ";
    for(let i = 0; i< arr.length; i++) {
    str += `<tr>
                <td>${arr[i].id}</td>
                <td>${arr[i].name}</td>
                <td>${arr[i].age}</td>
                <td>${arr[i].gender}</td>    
                <td>${arr[i].designation}</td>
                <td>
                <button onclick = "updateEmp(${arr[i].id})" class="btn btn-edit btn-success btn-sm">EDIT</button>
                <button class = "btn btn-delete btn-danger btn-sm">Delete</button>
                <button class = "btn btn-view btn-info btn-sm">View</button>
            </td>
            </tr>`;
}
console.log(str);
document.getElementById("table-body").innerHTML=str;


}




function updateEmp(id) {
    let pop = document.getElementById("pop-up");
    pop.style.visibility = 'visible';
}
        
