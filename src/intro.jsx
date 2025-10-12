import logo from './ciota.svg';


const Intro = () =>{
return (
<div>  
    <div className="flex justify-center">
            <img src={logo} className="h-40 w-auto" alt="Logo" />
          </div>
          <div className="justify-items-center bg-blue-800 text-pink-50 ml-4 rounded-sm">
<h1 className= "text-3xl font-bold ">THE CHARTERED INSTITUTE OF TRANSPORT ADMINISTRATION OF NIGERIA</h1>
<h1 className= "text-2xl">{"{CIOTA}"}</h1>
<h2>Established in 1986 | Chartered by Act No. 27 of 2019</h2>
<h2>Premier Transport Professional body, with the Responsibility of Advancing the Study,</h2>
<h2> Training and Regulating the Practice of Transport Management and Administration in Nigeria in all Ramifications</h2>    
</div>
<div className= "justify-items-center">
  <br />
<h1 className= "text-4xl font-bold">African Journal of Transport</h1>
<h1 className= "font-bold text-3xl">(2025)</h1>
</div>
</div>
);
};

export default Intro;