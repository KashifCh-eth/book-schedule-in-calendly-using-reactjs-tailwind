import React from "react";
import { PopupButton } from "react-calendly";

const MeetPop = () => {
  return (
    <div className=" m-12 p-4 backdrop-blur-sm bg-black/30 ">
      <p>Let's discuss your project 🌀. </p>
      <PopupButton
        url="https://calendly.com/kashi-dev96/meetingwithkashif"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule 15 Meeting"
        styles={{
            padding:"10px",
            background:"blue",
            color:"white",
            margin:"20px"
            
        }}
     
      />
    </div>
  );
};

export default MeetPop;

// <!-- Calendly badge widget begin -->
// <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
// <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
// <script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/kashi-dev96/meetingwithkashif', text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: true }); }</script>
// <!-- Calendly badge widget end --></link>
