import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";
function Hero() {
  return (
    <div className="hero w-full mt-20">
      <div className="hero-content flex flex-col md:flex-row-reverse">
        <img
          src="../../assets/ai-hero-pic.png"
          className="max-w-sm rounded-xl shadow-lg md:w-1/2"
        />
        <div className="sm:ml-10 content">
          <h2 className="text-3xl sm:text-4xl font-bold font-mono mx-4 sm:mx-20">
            Free AI-Powered Tools for Students
          </h2>
          <p className="py-4 sm:py-6 font-mono mx-4 sm:mx-20 text-base sm:text-lg overflow-hidden">
            Save your time and brain energy by leveraging the power of
            Artificial Intelligence to automate tasks like generating study
            notes of any topic, extracting important points from any paragraph,
            generating questions in seconds and much more for free by using the
            tools offered by AI Text Tools.
          </p>
          <Link to="/tools">
            <button className="mx-4 sm:mx-20 btn-grad">
              <FaTools className="mx-2 inline" />
              Browse tools
            </button>
          </Link>
            <a href="https://my-restore-photos-omega.vercel.app/" target="_blank">
              {" "}
              <button className="mx-4 sm:mx-20 btn-grad">
                <FaFileImage className="mx-2 inline" />
                Browse img tools
              </button>
            </a>
            <br></br>
            <br></br>
         <center>   <h2>🔥Top tools this week</h2>
            <Link to="/sql-gen"className="mx-4 sm:mx-20">
          <div className="mx-2 inline">
            {" "}
            <img
              className="svg-styles w-14 h-14 rounded-md"
              src="../../assets/code.svg"
            ></img><br></br>
            <h2 className="text-xl">Text to SQL Query</h2>
          </div>
        </Link>
        <Link to="/ideas-gen" className="mx-4 sm:mx-20">
          <div className="mx-2 inline">
            {" "}
            <img
              className="svg-styles w-14 h-14 rounded-md"
              src="../../assets/article-writer.svg"
            ></img>
            <h2 className="text-xl">Ideas generator</h2>
          </div>
        </Link>
        </center>
        </div>
      </div>
    </div>
  );
}

export default Hero;
