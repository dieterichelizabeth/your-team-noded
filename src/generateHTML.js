// Generate the HTML page
function generateHTML(teamData) {

  // get the Team Name
  teamName = teamData[0];
  console.log(teamData);

  // remove Team Name from array
  teamData.shift();
  // console.log(teamData);

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
      <p>~ Team Dashboard ~</p>
    </header>

    <!-- Employee Section -->
    <main>
      <div class="teamCards">

      ${teamData
        .filter(teamData => teamData.constructor.name === 'Manager')
        .map(({ name, id, email, office }) => {
          // random number for profile photo
          var profile = Math.floor(Math.random() * 6) + 1;
          
          return `
          <!-- Manager -->
          <div id="card" class="teamCardSpacing">
            <div>
              <p class="cardContent">${name}</p>
            </div>
            <img class="cardIcon" src="./assets/images/profile${profile}.png" alt="" />
            <div>
              <p class="cardContent">
                <i class="fa-solid fa-mug-hot"></i> Manager
              </p>
              <p class="cardContent">ID: ${id}</p>
              <p class="cardContent">
                Email: <a href="mailto:${email}"> ${email}</a>
              </p>
              <p class="cardContent">Office Number: ${office}</p>
            </div>
          </div>
        `;
        })
        .join('')}

      ${teamData
        .filter(teamData => teamData.constructor.name === 'Intern')
        .map(({ name, id, email, school, role }) => {
          // random number for profile photo
          var profile = Math.floor(Math.random() * 6) + 1;
          
          return `
          <!-- Intern -->
          <div id="card" class="teamCardSpacing">
            <div>
              <p class="cardContent">${name}</p>
            </div>
            <img class="cardIcon" src="./assets/images/profile${profile}.png" alt="" />
            <div>
              <p class="cardContent">
              <i class="fa-solid fa-graduation-cap"></i> Intern
              </p>
              <p class="cardContent">ID: ${id}</p>
              <p class="cardContent">
                Email: <a href="mailto:${email}"> ${email}</a>
              </p>
              <p class="cardContent">School: ${school}</p>
            </div>
          </div>
        `;
        })
        .join('')}

      ${teamData
        .filter(teamData => teamData.constructor.name === 'Engineer')
        .map(({ name, id, email, github, role }) => {
          // random number for profile photo
          var profile = Math.floor(Math.random() * 6) + 1;
            
          return `
          <!-- Engineer -->
          <div id="card" class="teamCardSpacing">
            <div>
              <p class="cardContent">${name}</p>
            </div>
            <img class="cardIcon" src="./assets/images/profile${profile}.png" alt="" />
            <div>
              <p class="cardContent">
              <i class="fa-brands fa-connectdevelop"></i> Engineer
              </p>
              <p class="cardContent">ID: ${id}</p>
              <p class="cardContent">
                Email: <a href="mailto:${email}"> ${email}</a>
              </p>
              <p id="employeeInfo" class="cardContent">
              Github:
              <a
                href="https://github.com/${github}"
                rel="noopener noreferrer"
                target="_blank"
                >https://github.com/${github}</a
              >
            </p>
            </div>
          </div>
        `;
        })
        .join('')}

      </div>
    </main>
  </body>
</html>
`;
};

module.exports = generateHTML;