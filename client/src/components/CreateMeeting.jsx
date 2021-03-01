import React from "react";

/*
APIs to create Meetings:

POST https://lisjk.sse.codesandbox.io/api/:meetings
Accepts a meeting of the following form:
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

Everything is optional, there is no validation on anything

And returns that object with an id.
*/

const CreateMeeting = () => {
  return <div>Schedule all the meetings! Who needs focus time anyway?</div>;
};

export default CreateMeeting;
