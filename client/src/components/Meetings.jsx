import React from "react";

// Don't feel constrained by these files, organize things however you want!
import MeetingsList from "./MeetingsList";
import CreateMeeting from "./CreateMeeting";
import UpdateMeeting from "./UpdateMeeting";
import DeleteMeeting from "./DeleteMeeting";

/*
We need to make a CRUD interface for Meetings! Go in whatever order you want, 
building this however you want.

If you want to make an AWESOME meeting view, then focus only on that! 

If you wanna scaffold out the entire thing and talk about how you would 
make it pretty, go for it. 

Have fun with it, experiment, play around.

Each component imported above will have some details about the API for you,
or you can just check server.js
*/

const Meetings = () => {
  return (
    <div>
      <MeetingsList />
      {/* TODO: Create Meeting */}
      {/* TODO: Update Meeting */}
      {/* TODO: Delete Meeting */}
    </div>
  );
};

export default Meetings;
