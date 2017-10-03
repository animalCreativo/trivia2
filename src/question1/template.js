var yo = require('yo-yo');    

var login= yo`
      <div class="row " style="height: 100%;">
        <div class="row align-self-middle" > 
          <div class="columns small-10 small-offset-1 text-center ">
              <br>
              <h5 id="q1texto" class="textSpecial text-center" style=" line-height: 1.2; padding-bottom: 20px;">¿Cual de estos ingrediente es de origen mapuche?</h5>
          </div> 
          <div class="columns small-8  small-offset-3" >  
               <button type="button" class="button buttonQ1" id="q1btn1"><span>A</span>Alt1</button>
               <img  id="q1img1" width="auto" height="auto" src="item11.png" style="margin-left: -20px;" /> 
          </div> 
          <div class="columns small-8  small-offset-3" >     
               <button type="button" class=" button buttonQ1" id="q1btn2"><span>B</span>Alt2</button>
               <img  id="q1img2" width="auto" height="auto" src="item12.png" style="margin-left: -40px;"  />   
          </div> 
          <div class="columns small-8  small-offset-3" >   
                <button type="button" class="button buttonQ1" id="q1btn3"><span>C</span>Alt3</button>
               <img  id="q1img3" width="auto" height="auto" src="item13.png" style="margin-left: -50px;" />  
          </div>   
        </div>
      </div>
`;

module.exports = login;


