console.log('js');

$( document ).ready( readyNow );

function readyNow () {
    console.log('JQ');
    $("#addEmployeeButton").on('click',addEmployeeButtonClick)
}//end doc reay

function addEmployeeButtonClick () {
    console.log('in addEmployeeButtonClick');
    //get user input
    //put input into an object
    var newEmployee = {
        firstName: $("#firstNameIn").val(),
        lastName: $("#lastNameIn").val(),
        employeeID: $("#idIn").val(),
        salary: $('#salaryIn').val(),
    }
    console.log(newEmployee)
    //push the new object into an array
    var employees = []
    employees.push(newEmployee);
    console.log(employees);
    
    
}//end addEmployeeButtonClick