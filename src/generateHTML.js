
const generateEmployee = teamData => {
  // remove Team Name from array
  teamData.shift();
  console.log(teamData);

  for(let i=0; i < teamData.length; i++) {
    if (teamData[i].role = 'Manager'){
      // random number for profile photo
      var profile = Math.floor(Math.random() * 6) + 1;

      return `
      <!-- Manager -->
      <div id="card" class="teamCardSpacing">
        <div>
          <p class="cardContent">${teamData[i].name}</p>
        </div>
        <img class="cardIcon" src="./assets/images/profile${profile}.png" alt="" />
        <div>
          <p class="cardContent">
            <i class="fa-solid fa-mug-hot"></i> ${teamData[i].role}
          </p>
          <p class="cardContent">ID: ${teamData[i].id}</p>
          <p class="cardContent">
            Email: <a href="mailto:${teamData[i].email}"> ${teamData[i].email}</a>
          </p>
          <p class="cardContent">Office Number: ${teamData[i].office}</p>
        </div>
      </div>
      `
    } else if (teamData[i].role = 'Intern'){
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
      } else {
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
};

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

    ${generateEmployee(teamData)}
      </div>
    </main>
  </body>
</html>
`;
};

module.exports = generateHTML;