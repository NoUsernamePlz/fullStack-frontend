import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto py-2 flex flex-wrap  text-white">
        <div className="mr-auto bg-gray-600 hover:bg-gray-400 w-2/6 ">
          <div className="flex flex-row justify-start items-center  rounded-lg">
            <svg
              className=""
              width="30px"
              height="30px"
              fill="#ffff"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M27 24.57l-5.647-5.648a8.895 8.895 0 0 0 1.522-4.984C22.875 9.01 18.867 5 13.938 5 9.01 5 5 9.01 5 13.938c0 4.929 4.01 8.938 8.938 8.938a8.887 8.887 0 0 0 4.984-1.522L24.568 27 27 24.57zm-13.062-4.445a6.194 6.194 0 0 1-6.188-6.188 6.195 6.195 0 0 1 6.188-6.188 6.195 6.195 0 0 1 6.188 6.188 6.195 6.195 0 0 1-6.188 6.188z"></path>
              </g>
            </svg>
            <div>Search,8000+ tutorials </div>
          </div>
        </div>
        <div className="text-white flex items-center font-thin text-2xl">
          freeCodeCamp
          <svg
            className="px-1"
            fill="#ffff"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>freeCodeCamp icon</title>
            <path d="M19.885 3.906a.621.621 0 00-.354.12c-.08.08-.161.196-.161.313 0 .2.236.474.673.923 1.822 1.754 2.738 3.903 2.732 6.494-.007 2.867-.97 5.17-2.844 6.954-.394.353-.556.63-.557.867 0 .116.08.237.16.353.076.08.237.162.353.162.434 0 1.04-.512 1.833-1.509 1.542-1.89 2.24-3.978 2.279-6.824.036-2.847-.857-4.777-2.603-6.77-.63-.712-1.153-1.082-1.511-1.083zm-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824.791.997 1.398 1.51 1.832 1.509a.573.573 0 00.352-.162c.08-.116.16-.237.16-.353 0-.237-.162-.514-.556-.866-1.873-1.785-2.837-4.087-2.844-6.955-.006-2.591.91-4.74 2.732-6.494.437-.449.674-.722.673-.923 0-.117-.08-.233-.161-.313a.621.621 0 00-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386-.281-.18-2.001-1.5.402-5.423.466-.77 1.076-1.47 1.834-3.041 0 0 .67.946.32 2.998-.523 3.101 2.271 2.214 2.314 2.257.976 1.15-.808 3.17-.917 3.233-.108.061 5.096-3.13 1.399-7.935-.253.253-.582 1.442-1.267 1.266-.684-.174 2.125-3.494-2.868-7.468zM9.955 18.916c.023.016.038.024.038.024l-.038-.024z" />
          </svg>
        </div>
        <div className="ml-auto flex  self-end">
          <button className="bg-gray-800 hover:bg-white text-white hover:text-black border-2 border-white w-20 h-10 mr-2 text-lg tracking-wider">
            Menu
          </button>

          {location.pathname === "/main" ? null : (
            
              <Link to="/signup">
                <button className="bg-yellow-600 hover:bg-yellow-800 w-24 h-10 px-2 text-lg tracking-wider">
                  Sign Up
                </button>
              </Link>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
