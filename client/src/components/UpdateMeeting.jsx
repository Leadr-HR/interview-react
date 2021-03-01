import React from "react";

/*
APIs to update Meetings:

PATCH https://lisjk.sse.codesandbox.io/api/meetings/:meetingId

Updates the specified meeting and returns the updated meeting
{
    id:String(unique),
    title:String
    startDate:String(w/ timezone)
    duration:Number
    attendees: {
      name:String,
      avatar:String(url),
    },
    topics: {
      text:String,
      presenter:Attendee(see above),
    }
}
*/

const UpdateMeeting = () => {
  return <div>We need to make this meeting longer!</div>;
};

export default UpdateMeeting;
