const generateTeamProfile = team => {

    const generatemanager = manager => {

        return
    
   
        <div class="tile is-parent ">
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
  
    }

    const generateengineer = engineer => {


        <div class="tile is-parent ">
            <div class="tile is-child has-text-centered has-background-success box">
                    
                    <div>
                        <h1 class ="title is-2">${engineer.getname()}</h1>
                        <h1 class ="title is-3">${engineer.getrole()}</h1>
                        <h2 class ="title is-4">${engineer.getid()}</h2> 
                    </div>

                    <div>
                        <li class="is-size-4">Email: <a href="mailto:${engineer.getemail()}"></a> </li>
                        <li class="is-size-4">Github: <a href = "${enginner.getgit()}" target="_blank"></a></li>
                    </div>
                    
                </div>

            </div>

    }

}