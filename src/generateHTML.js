
const generateEmployee = teamData => {
  // remove Team Name from array
  teamData.shift();
  console.log(teamData);

  // set up the for loop
  // account for icon changes (manager, intern, engineer in If statements)
  // account for office#/github/current school differences
  // create a function to change profile pictures for each employee
  // 

for(let i=0; i < teamData.length; i++) {
  
  return `
  <!-- Employee -->
  <div id="card" class="teamCardSpacing">
    <div>
      <p class="cardContent">${teamData[i].name}</p>
    </div>
    <img class="cardIcon" src="./assets/images/profile4.png" alt="" />
    <div>
      <p class="cardContent">
        <i class="fa-brands fa-connectdevelop"></i> ${teamData[i].role}
      </p>
      <p class="cardContent">ID: ${teamData[i].id}</p>
      <p class="cardContent">
        Email: <a href="mailto:${teamData[i].email}"> ${teamData[i].email}</a>
      </p>
      <p class="cardContent">Office Number: ${teamData[i].office}</p>
    </div>
  </div>
  `
  }
  
};

function generateHTML(teamData) {

  // get the Team Name
  console.log(teamData);
  teamName = teamData[0];
  console.log(teamName);

  // console.log(employee1.name); // - RETURNS SUSAN!!!


  // run through each object. Target the role - filer or map?
  // send different objects to different places?

 // console.log(typeof(teamData)); - object
 // console.log(Object.values(teamData));

 // console.log(Object.values(Manager));
 //console.log(Manager); - undefined
 // console.log(Intern); - undefined
 //console.log(Engineer); - undefined
 //console.log(teamName); - can't access before initialization

  // get the Team Name
  // const { teamName } = teamData[0];
  // console.log(teamName);

    // ${generateManager(Manager)}  
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