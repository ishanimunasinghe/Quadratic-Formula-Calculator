// Quadratic Formula Calculator by Ishani Munasinghe

// Event Listener
document.getElementById("find-x").addEventListener("click", quadratic_formula);

// Event Functions
function quadratic_formula() {
  // Input
  let valueA = +document.getElementById("numA").value;
  let valueB = +document.getElementById("numB").value;
  let valueC = +document.getElementById("numC").value;

  // Process
  let discriminant = Math.pow(valueB, 2) - (4*valueA*valueC);
  let x_value_1 =  (-Math.abs(valueB) + Math.sqrt(discriminant)) / (2*valueA);
  let x_value_2 =  (-Math.abs(valueB) - Math.sqrt(discriminant)) / (2*valueA);

  // Output
  document.getElementById("discriminant_value").innerHTML = discriminant;
  

  if (discriminant > 0) {
    document.getElementById("num_of_solutions").innerHTML = 2;
    document.getElementById("solution_1").innerHTML = x_value_1;
    document.getElementById("solution_2").innerHTML = x_value_2;

  } else if (discriminant = 0) {
    document.getElementById("num_of_solutions").innerHTML = 1;

  } else {
    document.getElementById("num_of_solutions").innerHTML = 0;
    document.getElementById("solution_1").innerHTML = 'complex solution';
    document.getElementById("solution_2").innerHTML = 'complex solution';
  }
}