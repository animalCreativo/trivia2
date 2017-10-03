var yo = require('yo-yo');    

var login= yo`
     <div class="row " style="height: 100%;">
        <div class="row align-self-middle" > 
          <div class="columns small-10 small-offset-1 text-center ">
              <br>
              <h5 id="q2texto" class="textSpecial text-center" style=" line-height: 1.2; padding-bottom: 20px;">¿Cual de estos ingrediente es de origen mapuche?</h5>
          </div> 
          <div class="columns small-12  text-center" style="padding-top:50px;">  
               <button type="button" id="q2btn1" class="button buttonTrue" style="width:40vw;" ><span>A</span>Alt1</button>
          </div> 
          <div class="columns small-12  text-center"  style="padding-top:50px;">     
               <button type="button" id="q2btn2" class=" button buttonTrue" style="width:40vw;" ><span>B</span>Alt2</button>
          </div> 
          <div class="columns small-12  text-center" style="padding-top:50px;">   
                <button type="button" id="q2btn3" class="button buttonTrue" style="width:40vw;" ><span>C</span>Alt3</button> 
          </div>   
        </div>
      </div>
`;

module.exports = login;


