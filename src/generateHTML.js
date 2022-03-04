
const generateManager = Manager => {
  if (!Manager) {
      return '';
  } else {
  return `
  <!-- Employee -->
  <div class="teamCardSpacing">
    <div>
      <p class="cardContent">Susan${name}</p>
    </div>
    <img class="cardIcon" src="./assets/images/profile4.png" alt="" />
    <div>
      <p class="cardContent">
        <i class="fa-brands fa-connectdevelop ${role}"></i> Manager ${role}
      </p>
      <p class="cardContent">ID: 421 ${id}</p>
      <p class="cardContent">
        Email: <a href="mailto:Susan@gmail.com ${email}"> Susan@gmail.com ${email}</a>
      </p>
      <p class="cardContent">Office Number: 421 ${office}</p>
    </div>
  </div>
  `
      };
  };

function generateHTML(teamData) {

  // unpack Team Data
  const { Manager, Intern, Engineer} = teamData;

  // get the Team Name
  const { teamName } = teamData[0];

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

      ${generateManager(Manager)}  

      </div>
    </main>
  </body>
</html>
`;
};

module.exports = { generateHTML };