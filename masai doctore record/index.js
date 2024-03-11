
let myform = document.querySelector('form');
let inp1 =document.getElementById('name');
let inp2 = document.getElementById('employeeID');
let inp3 = document.getElementById('department');
let inp4 = document.getElementById('exp');
let inp5 = document.getElementById('email');
let inp6 = document.getElementById('mbl');
let tbody=document.querySelector('tbody');
let inp7 = document.getElementById('role');
let inp8 = document.getElementById('remove')
   let AllTask=[]
myform.addEventListener('submit',function(e)
{
   e.preventDefault();
   let Data ={};
   Data.name=inp1.value;
   Data.employeeID=inp2.value;
   Data.department=inp3.value;
   Data.exp=inp4.value;
   Data.email=inp5.value;
   Data.mb1=inp6.value;
   Data.role=inp7.value;
   Data.remove=inp8.value;



   AllTask.push(Data)
   console.log(AllTask)
   tbody.innerHTML=null;
   AllTask.map((ele)=>
   {
        let row = document.createElement('tr');
        let td1 =document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('Delete');
        td1.innerText=ele.name;
        td2.innerText=ele.employeeID;
        td3.innerText=ele.department;
        td4.innerText=ele.exp;
        td5.innerText=ele.email;
        td6.innerText=ele.mb1;
        td7.innerText=ele.role;
        td8.innerText=ele.remove

        row.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(row);

       
   })
})