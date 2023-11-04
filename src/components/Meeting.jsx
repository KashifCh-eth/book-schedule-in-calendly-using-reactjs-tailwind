import React from "react";
import { InlineWidget } from "react-calendly";
const Meeting = () => {
  return (
    <div className=" h-48">
      <InlineWidget
        url="https://calendly.com/kashi-dev96/meetingwithkashif?hide_event_type_details=1&hide_gdpr_banner=1"
        styles={{
          height: "800px",
          width:"400px",
          padding:"10px",
          overflow:"hidden",
          overflowy: "hidden", /* Hide vertical scrollbar */
          overflowx: "hidden", 
          overflow:"hidden",
        }}
      />
    </div>
  );
};
export default Meeting;
