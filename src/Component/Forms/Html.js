import React from 'react';
import { useState } from 'react';

const Html = () => {

    /*function selradio(){
        document.getElementById('value').innerHTML;
console.log(value);

    }*/
 const [count,setCount] = useState(0);
 const [seconds, setSeconds] = useState(20);

 React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('Your Score is' +  count  +  'out of 5' );
    }
  });

 function selopt(e){
     debugger;
     var y= e.target.value;
     console.log(y);
     if(y=="True")
     {
        setCount(count +1);
     }
 }
console.log(count);
function Clickedgetresult(){
 var z= document.getElementById("clickedresult").innerHTML="You Scored" + count;

}
    return(
        <div>
            <div  class="row">
            <h1 class="text-center mt-80"><u>Addition  Quiz</u></h1>
            <div class="row">
            <div class="text-center text-3xl text-green-400">
        {seconds}
      </div>

            <div class="col-md-12 col-sm-12 col-12">
            <h2 class="ml-2 mt-5">1. what is value of 2+2?</h2>
            </div>
            <div class="col-md-3 col-sm-3 col-3"> <input class="ml-3" type="radio" name="1" id="" onClick={selopt} value="false"/>
    <label for="" class="ml-2">2</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="1" id="" onClick={selopt} value="false"/>
    <label for="" class="ml-2">7</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="1" id="" onClick={selopt} value="false"/>
    <label for="" class="ml-2">9</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="1" id="" onClick={selopt} value="True"/>
    <label for="" class="ml-2">4</label></div>





            <div class="col-md-12 col-sm-12 col-12">
            <h2 class="ml-2 mt-5">2. what is value of 5+6?</h2>
            </div>
            <div class="col-md-3 col-sm-3 col-3"> <input class="ml-3" type="radio" name="2" onClick={selopt}  id="" value="false"/>
    <label for="" class="ml-2">3</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="2" id="" onClick={selopt}  value="false"/>
    <label for="" class="ml-2">1</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="2" id="" onClick={selopt}  value="false"/>
    <label for="" class="ml-2">4</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="2" id="" onClick={selopt}  value="True"/>
    <label for="" class="ml-2">11</label></div>






            <div class="col-md-12 col-sm-12 col-12">
            <h2 class="ml-2 mt-5">3. what is value of 3+4?</h2>
            </div>
            <div class="col-md-3 col-sm-3 col-3"> <input class="ml-3" type="radio" name="3"  onClick={selopt} id="" value="false"/>
    <label for="" class="ml-2">2</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="3" id="" onClick={selopt}  value="false"/>
    <label for="" class="ml-2">6</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="3" id=""  onClick={selopt} value="True"/>
    <label for="" class="ml-2">7</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="3" id="" onClick={selopt}  value="false"/>
    <label for="" class="ml-2">1</label></div>





            <div class="col-md-12 col-sm-12 col-12">
            <h2 class="ml-2 mt-5">4. what is value of 5+6?</h2>
            </div>
            <div class="col-md-3 col-sm-3 col-3"> <input class="ml-3" type="radio" name="2" id="" onClick={selopt}  value="false"/>
    <label for="" class="ml-2">24</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="2" id="" onClick={selopt}  value="false"/>
    <label for="" class="ml-2">15</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="2" id="" onClick={selopt}  value="True"/>
    <label for="" class="ml-2">11</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="2" id="" onClick={selopt}  value="false"/>
    <label for="" class="ml-2">9</label></div>



    
    <div class="col-md-12 col-sm-12 col-12">
            <h2 class="ml-2 mt-5">5. what is value of 44+99?</h2>
            </div>
            <div class="col-md-3 col-sm-3 col-3"> <input class="ml-3" type="radio" name="2" id="" onClick={selopt}  value="Ture"/>
    <label for="" class="ml-2">143</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="2" id="" onClick={selopt}  value="false"/>
    <label for="" class="ml-2">111</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="2" id="" onClick={selopt}  value="false"/>
    <label for="" class="ml-2">190</label></div>
    <div class="col-md-3 col-sm-3 col-3"> <input type="radio" name="2" id=""  onClick={selopt} value="false"/>
    <label for="" class="ml-2">123</label></div>



            <div class="col-md-12 col-sm-12 col-12">
            
          </div>
          <div class="btn  md:w-1/3 btn-warning w-50 ml-20 mt-5 col-md-12 col-sm-12 col-12 text-center" id="clickedresult" onClick={Clickedgetresult}>
              Submit 
          </div>
          </div>
          </div>
          </div>
    );
}

export default Html;