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

  employees.push({
       firstname: firstname,
       lastname: lastname,
       department: department,
       id: employeeId,
       dateHired: dateHired
   });

   send_to_php(employees)

}

function send_to_php(employees) {
        $.ajax({
            url: '/hw2/hw2.php',
            type: 'POST',
            // json
            data: {json: JSON.stringify(employees)},
            dataType: 'json',
            success: function (data) {
                document.getElementById("gigi").textContent = "HELLO"
                //var obj = JSON.parse(data);
                //$("#test").val( obj.result );
            },
            error: function (data) {
                console.log(data);
            },
            complete: function () {

            },
            cache: false,
            contentType: false,
            processData: false
        });
}
