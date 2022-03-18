const generateTeamProfile = team => {

    const generatemanager = manager => {

        return`
    
   
        <div class="tile is-parent is-vertical ">
            <div class="tile is-child has-text-centered has-background-success box">
                    
                    <div>
                        <h1 class ="title is-2">${manager.getname()}</h1>
                        <h1 class ="title is-3">${manager.getrole()}</h1>
                        <h2 class ="title is-4">${manager.getid()}</h2> 
                    </div>

                    <div>
                        <li class="is-size-4">Email: <a href="mailto:${manager.getemail()}"></a> </li>
                        <li class="is-size-4">Office: ${manager.getoffice()}</li>
                    </div>
                    
                </div>

            </div>
            `;
  
    };

    const generateengineer = engineer => {
        return `

        <div class="tile is-parent is-vertical">
            <div class="tile is-child has-text-centered has-background-success box">
                    
                    <div>
                        <h1 class ="title is-2">${engineer.getname()}</h1>
                        <h1 class ="title is-3">${engineer.getrole()}</h1>
                        <h2 class ="title is-4">${engineer.getid()}</h2> 
                    </div>

                    <div>
                        <li class="is-size-4">Email: <a href="mailto:${engineer.getemail()}"></a> </li>
                        <li class="is-size-4">Github: <a href = "${engineer.getgit()}" target="_blank"></a></li>
                    </div>
                    
                </div>

            </div>
            `;

    };

    const generateintern = intern => {
        return`
        <div class="tile is-parent is-vertical">
            <div class="tile is-child has-text-centered has-background-success box">
                    
                    <div>
                        <h1 class ="title is-2">${intern.getname()}</h1>
                        <h1 class ="title is-3">${intern.getrole()}</h1>
                        <h2 class ="title is-4">${intern.getid()}</h2> 
                    </div>

                    <div>
                        <li class="is-size-4">Email: <a href="mailto:${intern.getemail()}"></a> </li>
                        <li class="is-size-4">School: ${intern.getschool()}</li>
                    </div>
                    
                </div>

            </div>
            `;

    };

    const page = [];

    page.push(team
        .filter(employee => employee.getrole() === "manager")
        .map(manager => generatemanager(manager))
        );

        page.push(team
            .filter(employee => employee.getrole() === "engineer")
            .map(engineer => generateengineer(engineer))
            .join("")
        );

        page.push(team
            .filter(employee => employee.getrole() === "intern")
            .map(intern => generateintern(intern))
            .join("")
        );
        
        return page.join("");
}

module.exports = team => {


    return`

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

</head>

<body class="has-background-warning">
    <div class="container has-background-info">
        <h1 class="has-text-primary-light title is-1 has-text-centered">The Team</h1>
    </div>
    <br>
    <div class ="container is-fluid">
        <div class="tile is-ancestor">

        ${generateTeamProfile(team)}


        </div>
    </div>
</body>
</html>

    `;
}