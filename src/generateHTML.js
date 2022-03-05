// Generate Manager Card 
const generateManager = teamData => {
  // remove Team Name from array
  teamData.shift();
  console.log(teamData);

  // random number for profile photo
  var profile = Math.floor(Math.random() * 6) + 1;
  
  return `
  <!-- Manager -->
  <div id="card" class="teamCardSpacing">
    <div>
      <p class="cardContent">${teamData[0].name}</p>
    </div>
    <img class="cardIcon" src="./assets/images/profile${profile}.png" alt="" />
    <div>
      <p class="cardContent">
        <i class="fa-solid fa-mug-hot"></i> ${teamData[0].role}
      </p>
      <p class="cardContent">ID: ${teamData[0].id}</p>
      <p class="cardContent">
        Email: <a href="mailto:${teamData[0].email}"> ${teamData[0].email}</a>
      </p>
      <p class="cardContent">Office Number: ${teamData[0].office}</p>
    </div>
  </div>
  `
};

// Generate Intern Cards
const generateIntern = teamData => {
  // remove Team Name from array
  teamData.shift();
  console.log(teamData);

  const interns = teamData.filter(teamData => teamData.role === 'Intern');
  console.log(interns);

  for(let i=0; i < interns.length; i++) {
    // random number for profile photo
  var profile = Math.floor(Math.random() * 6) + 1;
  return `
  <!-- Intern -->
  <div id="card" class="teamCardSpacing">
    <div>
      <p class="cardContent">${teamData[i].name}</p>
    </div>
    <img class="cardIcon" src="./assets/images/profile${profile}.png" alt="" />
    <div>
      <p class="cardContent">
      <i class="fa-solid fa-graduation-cap"></i> ${teamData[i].role}
      </p>
      <p class="cardContent">ID: ${teamData[i].id}</p>
      <p class="cardContent">
        Email: <a href="mailto:${teamData[i].email}"> ${teamData[i].email}</a>
      </p>
      <p class="cardContent">School: ${teamData[i].school}</p>
    </div>
  </div>
  `
  }
}

// Generate Engineer Cards
const generateEngineer = teamData => {
  // remove Team Name from array
  teamData.shift();
  console.log(teamData);

  const engineers = teamData.filter(teamData => teamData.role === 'Engineer');
  console.log(engineers);

  for(let i=0; i < engineers.length; i++) {
    // random number for profile photo
  var profile = Math.floor(Math.random() * 6) + 1;
  return `
  <!-- Engineer -->
  <div id="card" class="teamCardSpacing">
    <div>
      <p class="cardContent">${teamData[i].name}</p>
    </div>
    <img class="cardIcon" src="./assets/images/profile${profile}.png" alt="" />
    <div>
      <p class="cardContent">
      <i class="fa-brands fa-connectdevelop"></i> ${teamData[i].role}
      </p>
      <p class="cardContent">ID: ${teamData[i].id}</p>
      <p class="cardContent">
        Email: <a href="mailto:${teamData[i].email}"> ${teamData[i].email}</a>
      </p>
      <p id="employeeInfo" class="cardContent">
      Github:
      <a
        href="https://github.com/${teamData[i].github}"
        rel="noopener noreferrer"
        target="_blank"
        >https://github.com/${teamData[i].github}</a
      >
    </p>
    </div>
  </div>
  `
  }
}

function generateHTML(teamData) {

  // get the Team Name
  teamName = teamData[0];

return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Font Awesome -->
    <script
      src="https://kit.fontawesome.com/1e188ab330.js"
      crossorigin="anonymous"
    ></script>

    <!-- css -->
    <link rel="stylesheet" href="./assets/style.css" />
    <title>Teams</title>
  </head>

  <body>
    <!-- Banner images -->
    <div id="banner">
      <img id="bannerIcon" src="./assets/images/bannerIcon1.png" alt="" />
    </div>

    <!-- Team Titles -->
    <header>
      <h1>${teamName}</h1>
      <p>~ Teams Dashboard ~</p>
    </header>

    <!-- Employee Section -->
    <main>
      <div class="teamCards">

    ${generateManager(teamData)}

    ${generateIntern(teamData)}

    ${generateEngineer(teamData)}

      </div>
    </main>
  </body>
</html>
`;
};

module.exports = generateHTML;