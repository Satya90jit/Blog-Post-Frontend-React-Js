import React from "react";


function Additional(){
    return(
        <>
        
  {/* component */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    #spin {\n  \n    }\n    #spin:after {\n        content:"";\n        animation: spin 10s linear infinite;\n    }\n    @keyframes spin {\n        0% { content:"marketing"; }\n        20% { content:"content"; }\n        40% { content:"engineering"; }\n        60% { content:"crypto"; }\n        80% { content:"consulting"; }\n        100% { content:"business"; }\n    }\n'
    }}
  />
  <div className="flex items-center justify-center min-h-screen ">
    <div className="bg-slate-800 blur-3 bg-opacity-30">
      <div className="bg-slate-700 shadow-md  rounded  m-16 border border-indigo-500/50 blur-3 bg-opacity-30  shadow-indigo-500/50">
        <div className="flex flex-col p-10  px-16 space-y-6 items-center text-center">
          <h1 className="font-light md:text-6xl text-5xl text-white tracking-wide ">
            Hire the{" "}
            <span
              id="spin"
              className="text-transparent font-normal bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 "
            />{" "}
            <br /> expert you need
          </h1>
          <p className="text-gray-400 md:text-2xl text-xl px-18">
            {" "}
            Create a job to connect with freelancers and agencies who can
            increase your sales, make your website stand out, and more
          </p>
          <button className="rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white text-lg py-4 px-6">
            Find Expert
          </button>
        </div>
      </div>
    </div>
  </div>

        
        
        
        </>
    )
};
export default Additional;