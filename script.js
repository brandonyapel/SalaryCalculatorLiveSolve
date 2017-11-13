console.log('js');

$( document ).ready( readyNow );

function readyNow () {
    console.log('JQ');
    $("#addEmployeeButton").on('click',addEmployeeButtonClick)
}//end doc reay

function addEmployeeButtonClick () {
    console.log('in addEmployeeButtonClick')
}//end addEmployeeButtonClick