var yo = require('yo-yo');    

var login= yo`
    <div class="row " style="height: 100%;">
        <div class="row align-self-middle" > 
          <div class="columns small-10 small-offset-1 text-center ">
              <br>
              <h5 id="q3texto" class="textSpecial text-center" style=" line-height: 1.2; padding-bottom: 20px;">¿Cual de estos ingrediente es de origen mapuche?</h5>
          </div> 
          <div class="columns small-12 text-center"   style="padding-top:50px;" >  
               <button id="q3btn1" type="button" class="button buttonTrue" style="width:40vw;" ><span>Verdadero</span></button>
          </div> 
          <div class="columns small-12 text-center"   style="padding-top:50px;" >     
               <button id="q3btn2" type="button" class=" button buttonTrue" style="width:40vw;" ><span>Falso</span></button>
          </div> 
       
      </div>
`;

module.exports = login;


