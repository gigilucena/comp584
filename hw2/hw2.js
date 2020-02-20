// Homework 2
// COMP 584
// Gigi Lucena

var employees =[];
var employeeId ;
var total = 0;

function add() {

  firstname = document.getElementById("firstname").value
  lastname = document.getElementById("lastname").value

  name = "Name: "+document.getElementById("firstname").value+' '+document.getElementById("lastname").value
  document.getElementById('name').textContent = name ;

  department = "Department: "+document.getElementById("department").value
  document.getElementById('department_div').textContent = department ;

  employeeId = Math.floor(Math.random() * 100000000);

  id = "Employee Id: "+employeeId
  document.getElementById('employeeId').textContent = id ;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  dateHired = "Hired date: "+today
  document.getElementById('date').textContent = dateHired ;

  total = total+1;
  document.getElementById("totalEmployee").textContent = "Total Employees: "+total;

  document.getElementById("browser").textContent = "Browser in use: "+navigator.appName


  var employee = {
       firstname: firstname,
       lastname: lastname,
       department: document.getElementById("department").value,
       id: employeeId,
       dateHired: today
   }
  employees.push(employee);

   console.log(employee)
   console.log(navigator.appName)

   send_to_php(employee)

}

function send_to_php(employee) {

        $.ajax({
            url: '/hw2/hw2.php',
            type: 'POST',
            dataType : 'json',
            data: {json:JSON.stringify(employee)},
            success: function (data) {
                document.getElementById("browser").textContent = "SUCESSS";
                //var obj = JSON.parse(data);
                console.log('sucess')
            },
            error: function (data) {
                console.log('error ');
            },
            complete: function () {

            },
            cache: false,
            contentType: "application/json",
            processData: false
        });

}
