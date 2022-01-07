function generateHTML(employeeArray) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    ${employeeArray.map(employee => {
        return createCard(employee);
    })}
</body>
</html>
  `;
  }

  function createCard(employee) {
    let thirdProp = ''
      if (employee.getRole() === 'Manager') {
        thirdProp = employee.getOfficeNumber();
      } else if (employee.getRole() === 'Engineer') {
        thirdProp = employee.getGithub();
      } else if (employee.getRole() === 'Intern') {
        thirdProp = employee.getSchool();
      }
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${employee.getName()}</h5>
        <p class="card-text">${employee.getRole()}.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${employee.getId()}</li>
        <li class="list-group-item">${employee.getEmail()}</li>
        <li class="list-group-item">${thirdProp}</li>
      </ul>
    </div>
    `;
  }
  
  module.exports = generateHTML;