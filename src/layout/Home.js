import React from 'react';


let Home = ()=>{
  //d-flex flex-column justify-content-center align-item-center text-center h-100
  return(
    <React.Fragment>
      <div className='landing-page'>
      <div className='wrapper'>
      <div className=" pt-32 flex flex-col justify-center items-center text-center h-100">
           <p className="display-4 text-3xl sm:text-9xl text-gray-600 font-bold">Assignment <sub className='text-2xl sm:text-6xl '> by <span className='underline '> Relu consultancy</span> </sub></p>
                                         
      </div>
      </div>
      </div>
     
    </React.Fragment>
  )
}
export default Home;