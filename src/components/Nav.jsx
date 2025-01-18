import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

function Nav({ onAboutClick, onLoginClick, handleSaveClick, activeSection }) {
  return (
    <div>
      <div className="flex w-full justify-between items-center p-2 sm:p-6 bg-black text-white fixed top-0 z-50 shadow-lg">
        {/* SEAVPHOV Logo (as a refresh button) */}
        <div
          onClick={() => window.location.reload()} // Refresh the page
          className="text-center text-xl sm:text-3xl font-bold tracking-widest uppercase cursor-pointer hover:text-gray-300"
          aria-label="Refresh"
        >
          SEAVPHOV
        </div>

        <div className="flex space-x-4">
          {/* Login Button */}
          <div
            className={`text-white p-2 rounded-full ${
              activeSection === "login" ? "bg-green-700" : "bg-[#000000]"
            } hover:shadow-lg hover:bg-green-700`}
          >
            <button
              onClick={onLoginClick}
              className="p-0 sm:p-1 text-base sm:text-lg font-semibold"
              aria-label="Login"
            >
              Login
            </button>
          </div>

          {/* Save Button */}
          <div
            className={`text-white p-2 rounded-full ${
              activeSection === "save" ? "bg-yellow-500" : "bg-[#000000]"
            } hover:shadow-lg hover:bg-yellow-500`}
          >
            <button
              onClick={handleSaveClick}
              className="p-0 sm:p-1 text-base sm:text-lg font-semibold"
              aria-label="Save"
            >
              Save
            </button>
          </div>

          {/* About Button */}
          <div
            className={`text-white p-2 rounded-full ${
              activeSection === "about" ? "bg-blue-700" : "bg-[#000000]"
            } hover:shadow-lg hover:bg-blue-700`}
          >
            <button
              onClick={onAboutClick}
              className="p-0 sm:p-1 text-base sm:text-lg font-semibold"
              aria-label="About"
            >
              About
            </button>
          </div>

          {/* GitHub Button */}
          <div className="text-white p-2 rounded-full bg-[#000000] hover:shadow-lg hover:bg-[#24292e]">
            <a
              href="https://github.com/Vichetsopheaktradev"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit GitHub profile"
              className="flex items-center"
            >
              <FaGithub className="text-xl sm:text-2xl" />
              <span className="hidden sm:block text-base sm:text-lg font-semibold ml-2">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Nav.propTypes = {
  onAboutClick: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
  activeSection: PropTypes.string,
};

export default Nav;
