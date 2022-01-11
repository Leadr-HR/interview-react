import React from "react";

/*
APIs to get Meetings:

GET http://localhost:5000/api/meetings/
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
GET http://localhost:5000/api/meetings/:meetingId
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
  /**
   * Get List of Meetings
   * 
   * You must set up the api call using the methods in fetch.js
   * fetch.js can be found in ../utils/fetch.js
   * API documentation can be found in the comment above to give you an idea of expected structure.
   * Once you have the response from the API, time to display your meetings!
   */

  return <div>List your meetings here somehow!</div>;
};

export default MeetingsList;
