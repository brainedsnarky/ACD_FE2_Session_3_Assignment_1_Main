
function listEmployee(...employee){
   console.log(employee.length);
}


var employee= [1,2,3,4,5,6];
console.log("Lenght of array :");
listEmployee(...employee);

function multiplyByTwo(...empolyee){

    employee.forEach (n  => console.log( n * 2 ));

}
 console.log("Multiplying each element of array by 2:");
 multiplyByTwo(employee);

//sort using rest parameter
function sortRestArgs(...employeeA) {
  var sortedArgs = employeeA.sort();
  return sortedArgs;
}
var employeeA = [5,4,3,2,1];
console.log("Sorted Array :")
console.log(sortRestArgs(...employeeA));