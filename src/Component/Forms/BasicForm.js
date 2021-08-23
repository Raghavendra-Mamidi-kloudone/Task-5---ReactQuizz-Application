import React from 'react';
import {useState} from 'react';
import {Link, BrowserRouter} from 'react-router-dom';

const Basicform = () =>{
const[email, setEmail]= useState("");
const[password, setPassword]=useState("");

const[allEntry, setAllEntry] = useState([]);
 const submitForm = (e) =>{
   e.preventDefault();
   const newEntry= {email:email, password:password};
   setAllEntry([...allEntry, newEntry]);
   console.log(allEntry);
 }


    return(
<div className="App">
    <form action="" onSubmit={submitForm}>
    <div class="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl mx-auto text-center">
    <span class="text-2xl font-light">Login to your account</span>
    <div claass="relative mt-4 h-5 bg-white shadow-md sm:rounded-lg text-left">
      <div class="h-2 bg-green-400 rounded-t-md"></div>
      <div class="py-6 px-8 bg-pink-200">
        <label htmlFor="email" class="block font-semibold text-left"> Email</label>
        <input type="text" value={email} placeholder="Email" name="email" id="email" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"  onChange={(e)=>setEmail(e.target.value)}></input>

        
        
        <label htmlFor="password"class="block mt-3 font-semibold text-left">Password</label>
        <input type="password" value={password} placeholder="Password" name="password" id="password" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" onChange={(e)=>setPassword(e.target.value)}></input>
        
        l
        <div class="flex justify-between items-baseline">
      
       <button class="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg">Login</button>
       
          <a class="text-sm hover:underline"> <Link to="./SelectTopic"><div>Forgot password?</div> </Link></a>
        </div>
      </div>
    </div>
  </div>
</div>

</form>
<div>
  {
    allEntry.map((curElem)=>{
      return (
        <div>
          <p>{curElem.email}</p>
          <p>{curElem.password}</p>

          </div>
      );

    })
  }
</div>
</div>
    );
}
export default Basicform;