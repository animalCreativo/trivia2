var yo = require('yo-yo');    

var login= yo`
    <div id="todo" class="fondoPrincipal">
      <div class="row" style="height:100%;">
        <div class="row align-self-middle" style="margin-top:-400px;"> 
          <div class="columns small-12  text-center" > 
              <h5 class="textTrivia text-center" style=" line-height: 1.2; padding-bottom: 20px;">TRIVIA</h5>      
               <img  width="185px" height="240px" src="logo.svg" style="margin-left: -40px;"  /> 
               <h5 class="textLoser text-center" style=" line-height: 1.2; padding-bottom: 20px;">Has perdido</h5>  
          </div> 
          <div class="columns small-10 small-offset-1 text-center ">
              <br>
              <h5 class="textLoser2 text-center" style=" line-height: 1.2; padding-bottom: 20px;">Gracias por participar.</h5>
              <h5 class="textLoser2 text-center" style=" line-height: 1.2; padding-bottom: 20px;">Continúa disfrutando de<br>\"El arte de la cocina\"<br>junto a Ilko.</h5>
          </div>   
        </div>
      </div>
    </div>
`;

module.exports = login;


