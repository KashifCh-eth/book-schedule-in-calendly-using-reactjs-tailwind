import React, { useEffect, useState } from "react";
import Title from "../components/Title.jsx";
import { SocialIcon } from "react-social-icons";
import Det from "../components/Det.jsx";
import Contact from "../components/Contact.jsx";
import Meeting from "../components/Meeting.jsx";

function Home() {
  return (
    <div className=" flex justify-around text-center max-md:flex-col max-md:justify-center">
      <div className=" flex-shrink justify-center">
        <p className=" font-bold text-sm mt-12">
          Turning an Idea into Reality ⚡{" "}
        </p>
        <Title />
        <Det />
        <div className="flex flex-col">
          <p className="mt-8 font-semibold w-2/4 m-auto">
            Join (<span className="text-blue-500">social media</span>) community
            for BLockchain tips and tricks where we help Blockchain Community
            like you with better Future.
          </p>
          <Contact />
          <div>
            <SocialIcon
              network="github"
              url="https://github.com/KashifCh-eth"
              target="_blank"
              style={{ width: "40px", margin: "20px 0px" }}
            />
            <SocialIcon
              network="linkedin"
              url="https://www.linkedin.com/in/kashif-choudary/"
              target="_blank"
              style={{ width: "40px", margin: "20px" }}
            />
            <SocialIcon
              network="twitter"
              url="https://twitter.com/k_ashi0"
              target="_blank"
              style={{ width: "40px", margin: "20px 0px" }}
            />
            <SocialIcon
              network="youtube"
              url="https://www.youtube.com/@skillscodified"
              target="_blank"
              style={{ width: "40px", margin: "20px" }}
            />
          </div>

       
        </div>
      </div>
      <div className="p-4 text-center font-semibold">
        <p>Let's discuss your project 🌀. </p>
         <Meeting />
      </div>
    </div>
  );
}

export default Home;
