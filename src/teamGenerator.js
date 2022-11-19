const managersCard = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">groups</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Phone Number: ${manager.phoneNum}</p>
            </div>
        </div>
    </div>`
};

const juniorDeveloperCard = function(juniorDeveloper) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${juniorDeveloper.name}</h3>
                <h4>juniorDeveloper</h4><i class="material-icons">juniorDeveloper</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${juniorDeveloper.id}</p>
                <p class="email">Email: <a href="mailto:${juniorDeveloper.email}">${juniorDeveloper.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${juniorDeveloper.github}">${juniorDeveloper.github}</a></p>
            </div>
        </div>
    </div>`
};

const seniorEngineerCard = function(seniorEngineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${seniorEngineer.name}</h3>
                <h4>seniorEngineer</h4><i class="material-icons"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${seniorEngineer.id}</p>
                <p class="email">Email:<a href="mailto:${seniorEngineer.email}">${seniorEngineer.email}</a></p>
            </div>
    </div>
</div>`
};

const generateHTML = function(data) {
    pageArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = managersCard(employee);
            pageArray.push(managerCard);
        }

        if (role === 'juniorDeveloper') {
            const juniorDeveloperCard = juniorDeveloperCard(employee);
            pageArray.push(juniorDeveloperCard);
        }

        if (role === 'seniorEngineer') {
            const seniorEngineerCard = seniorEngineerCard(employee);
            pageArray.push(seniorEngineerCard);
        }

    }
    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
};


const generateTeamPage = function(employeeCards) {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>

  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  ${employeeCards}
              </div>
          </div>
      </main>
  </body>
  
  </html>`
};

module.exports = generateHTML;