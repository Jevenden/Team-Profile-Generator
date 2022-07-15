// import Manager from "../lib/Manager";

export default function createTeam(newStaff) {
  let mainHTML = "";
  for (let i = 0; i < newStaff.length; i++) {
    mainHTML += `<div class="employee-card">
    <h2 class = "employee-header">${newStaff[i].name}</h2>
    <p class = "detail-item">${newStaff[i].id}</p>
    <p class = "detail-item">${newStaff[i].email}</p>
    `;
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
          <div class="container-fluid">
            <div class="row">
              <div class="teamArea col-12 d-flex justify-content-center">${mainHTML}</div>
            </div>
          </div>
        </main>
      </body>
    </html>       
        `;
}
