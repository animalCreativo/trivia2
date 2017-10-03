var yo = require('yo-yo');    

var login= yo`
    <div class="row " style="height: 100%;">
        <div class="row align-self-middle" style="margin-top:-220px"> 
          <div class="columns small-12  imgContain text-center " >     
               <img  width="185px" height="240px" src="logo.svg"   /> 
               <h5 class="textTrivia text-center" style=" line-height: 1.2; padding-bottom: 20px;">Trivia</h5>  
          </div> 
          <div class="columns small-10 small-offset-1 text-center ">
              <br>
              <h5 class="textLogin1 text-center" style=" line-height: 1.2; padding-bottom: 20px;">Ingresa tus datos y participa</h5>
              <h5 class="textLogin2 text-center" style=" line-height: 1.2; padding-bottom: 20px;">¡Premios sorpresa te esperan!</h5>
          </div> 
          <div class="columns small-6 small-offset-3  text-center"  style="height:80px; margin-bottom:40px;">  
             <input type="text" id="name" class="middle-label" placeholder="Nombre" style="height:100%;">
      
          </div> 
          <div class="columns small-6 small-offset-3 text-center" style="height:80px;margin-bottom:40px;" >     
            
             <input type="text" id="email" class="middle-label" placeholder="Email" style="height:100%;">
          </div> 
          <div class="columns small-12 text-center" >   
                <button id="btnBegin" type="button" class="buttonBegin button " style="width:40vw;" ><span>Comenzar</span></button>  
          </div>   
        </div>
    </div>
`;

module.exports = login;


