import logo from './ciota.svg';

const Intro = () => {
  return (
    <div className="px-4">  
      {/* Logo Section */}
      <div className="flex justify-center">
        <img 
          src={logo} 
          className="h-24 sm:h-32 md:h-40 w-auto" 
          alt="Logo" 
        />
      </div>
      
      {/* Main Content Section */}
      <div className="bg-blue-800 text-white p-4 sm:p-6 rounded-sm mx-auto max-w-6xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2">
          THE CHARTERED INSTITUTE OF TRANSPORT ADMINISTRATION OF NIGERIA
        </h1>
        <h1 className="text-lg sm:text-xl md:text-2xl text-center font-semibold mb-3">
          {"{CIOTA}"}
        </h1>
        <div className="text-center space-y-2">
          <h2 className="text-sm sm:text-base md:text-lg">
            Established in 1986 | Chartered by Act No. 27 of 2019
          </h2>
          <h2 className="text-sm sm:text-base md:text-lg leading-tight">
            Premier Transport Professional body, with the Responsibility of Advancing the Study,
          </h2>
          <h2 className="text-sm sm:text-base md:text-lg leading-tight">
            Training and Regulating the Practice of Transport Management and Administration in Nigeria in all Ramifications
          </h2>    
        </div>
      </div>
      
      {/* Journal Section */}
      <div className="text-center mt-6 sm:mt-8">
        <br />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          African Journal of Transport
        </h1>
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mt-2">
          (2025)
        </h1>
      </div>
    </div>
  );
};

export default Intro;
