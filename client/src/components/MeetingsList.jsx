import React from "react";

/*
APIs to get Meetings:

GET https://lisjk.sse.codesandbox.io/api/meetings
Returns a list of meetings that look like this:
{
    id:String(unique),
    title:String
    startDate:String(w/ timezone)
    duration:Number
    attendees: {
      name:String,
      avatar:String(url),
    },
}
Note that this is aggregated information, not the entire item!



If you want the entire item, you need to make a detail call:
GET https://lisjk.sse.codesandbox.io/api/meetings/:meetingId
Returns full details of a specific meeting by id
{
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

const MeetingsList = () => {
  return <div>List your meetings here somehow!</div>;
};

export default MeetingsList;
