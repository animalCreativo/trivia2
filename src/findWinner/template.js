var yo = require('yo-yo');    

var login= yo`
    <div id="todo" class="fondoPrincipal">
      <div class="row" style="height:100%;">
        <div class="row align-self-middle" style="margin-top:-400px;"> 
          <div class="columns small-12  text-center imgContain" > 
              <h5 class="textTrivia text-center" style=" line-height: 1.2; padding-bottom: 20px;">TRIVIA</h5>      
               <img  width="185px" height="240px" src="logo.svg"   /> 
               <h5 class="textWin text-center" style=" line-height: 1.2;padding-top: 50px; padding-bottom: 20px;">¡Buscar Ganador!</h5>  
          </div> 
          <div class="columns small-10 small-offset-1 text-center ">
              <br>
              <h5 id="name" class="textWin2 text-center" style=" line-height: 1.2; padding-bottom: 20px;">Nombre.</h5>
              <h5 id="email" class="textWin2 text-center" style=" line-height: 1.2; padding-bottom: 20px;">Email.</h5>

          </div> 
          <div class="columns small-12 text-center" >   
                <button id="btnBuscar" type="button" class="buttonBegin button " style="width:40vw;" ><span>Buscar</span></button>  
          </div>   
        </div>
      </div>
    </div>
`;

module.exports = login;


