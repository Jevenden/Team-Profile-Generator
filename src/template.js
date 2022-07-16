export default function createTeam(newStaff) {
  let mainHTML = "";
  for (let i = 0; i < newStaff.length; i++) {
    mainHTML += `
    <div class="col-3 employee-card text-white bg-primary mb-3">
    <div class="card-header text-center text-white"><h4>${newStaff[
      i
    ].getRole()}</h4></div>
    <h5 class="card-title">Name: ${newStaff[i].name}</h5>
    <p class="card-text">ID#: ${newStaff[i].id}</p>
    <p class="card-text">Email: ${newStaff[i].email}</p>
    `;
    let role = newStaff[i].getRole();
    if (role === "Manager") {
      mainHTML += `<p class="card-text">Work Phone: ${newStaff[i].officeNumber}</p></div><div class=col-1></div>`;
    } else if (role === "Engineer") {
      mainHTML += `<p class="card-text">Github: ${newStaff[i].github}</p></div><div class=col-1></div>`;
    } else {
      mainHTML += `<p class="card-text">School: ${newStaff[i].school}</p></div><div class=col-1></div>`;
    }
  }

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatable" content="ie=edge" />
        <title>Go Team</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <header class="hero bg-danger">
          <h1 class="display-3 text-center">Team Profile</h1>
        </header>
        <main>
          <div class="container">
            <div class="row">
            ${mainHTML}
            </div>
          </div>
        </main>
      </body>
    </html>       
        `;
}
