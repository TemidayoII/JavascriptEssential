//initialize employee array object
const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'python' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'java' },
      //... More employee records can be added here
    ];
// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}
//calculate total salaries
function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }
//display employees based on department
function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
//display employee based on ID
function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
       }
   } 
   //Display employee with JS specialization
   // Display employees with Javascript specialization
function displayJavascriptEmployees() {
    const javascriptEmployees = employees.filter(
        employee => employee.specialization === 'Javascript'
    );

    if (javascriptEmployees.length > 0) {
        document.getElementById('employeesDetails').innerHTML =
            javascriptEmployees
                .map(employee =>
                    `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization}</p>`
                )
                .join('');
    } else {
        document.getElementById('employeesDetails').innerHTML =
            'No employee found with Javascript specialization';
    }
}