import React from "react";

function Det() {
  return (
    <div>
      <p className="mt-4 flex-shrink p-4">
        As a blockchain developer with a year of experience, I've been breaking
        barriers and pushing boundaries in the industry. With a passion for
        coding and a commitment to innovation, I've honed my skills through
        programs I'm ready to bring my expertise and enthusiasm to the forefront
        of the blockchain revolution. Let's connect and create something
        incredible!
      </p>
      <div className="flex flex-col flex-s  text-yellow-600">
        <p>
          {" "}
          <span className="text-green-800 p-1">✔</span>Implantation and
          Development Of Blockchain
        </p>
        <p>
          {" "}
          <span className="text-green-800 p-1">✔</span> Security Consulting &
          Auditing
        </p>
        <p>
          <span className="text-green-800 p-1">✔</span> Advanced Technologies
          used{" "}
        </p>
        <p>
          {" "}
          <span className="text-green-800 p-1">✔</span> Research and Projects{" "}
        </p>
      </div>
      <div className="mt-8">
        <p className="font-bold text-blue-500 m-4">Technology Stacks</p>
        <ul>
          <li>ReactJs</li>
          <li>NodeJs</li>
          <li>Postgres/mongos</li>
          <li>Web3Js/EtherJs</li>
          <li>Solidity</li>
          <li>Chai/Mocha</li>
        </ul>
      </div>
    </div>
  );
}

export default Det;
