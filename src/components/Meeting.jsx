import React from "react";
import { InlineWidget } from "react-calendly";

const Meeting = () => {
  return (
    <div className=" h-48">
      <InlineWidget
        url="https://calendly.com/kashi-dev96/meetingwithkashif"
        styles={{
          height: "1000px",
          width:"450px",
          padding:"10px",
          overflow:"hidden",
           
        }}
        
      />
    </div>
  );
};
export default Meeting;




