console.log('js');

$( document ).ready( readyNow );

function readyNow () {
    console.log('JQ');
    $("#addEmployeeButton").on('click',addEmployeeButtonClick)
}//end doc reay
var employees = []

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
    
    employees.push(newEmployee);
    console.log(employees);
    calculateSalaries();
}//end addEmployeeButtonClick

function calculateSalaries () {
    console.log( 'in calculateSalaries');
    var totalSalaries = 0;
    //loop through employees array
    for (let i = 0; i < employees.length; i++) {
        console.log( employees[ i ] );
        //convert each salary to a number
        console.log(employees[i].salary)
        //add salary to total salaries
        totalSalaries += Number( employees[i].salary);
    }//end for each employee
    console.log('total salaries:', totalSalaries)
    var monthlySalaryCost = totalSalaries/12;
    console.log('monthly cost', monthlySalaryCost)
    //convert eacj salary to a number

    //add salary to total salaries

};//end calculateSalaries monthlyS