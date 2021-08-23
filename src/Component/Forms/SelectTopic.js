import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const SelectTopic = () => {

    const history = useHistory();
   
    
    function SelectRedirect(){
        debugger;
         let path = `Html`; 
    history.push(path);



        //switch(document.getElementById('s1').value)
//{
//case "Html":
//window.location="../Component/Forms/Html.js";
////break;

//case "Javascript":
//window.location="../asp-tutorial/site_map.php";
//break;
}


    return(
        <div>
            <div class="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl mx-auto text-center">
    <span class="text-2xl font-light">Select Your Topic</span>
    <label class="block font-semibold mt-4 text-left">Select Your Topic</label>
        <select id="s1" NAME="section" onChange={SelectRedirect} class="border w-full py-2 rounded-md">
        <option placeholder="Select Your Topic....">Select Your Topic....</option>
        <option value="Html">ADDITION</option>
          <option>SUBTRACTION</option>
      
          </select>
    </div>
</div>
</div>





    );
}

export default SelectTopic;