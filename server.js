const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const faker = require("faker");
const uuid = require("uuid");

const app = express();
const port = process.env.PORT || 5000;

const numMeetings = 250;

const meetings = {
  ids: [],
  data: {}
};

const durations = [
  15 * 60 * 1000,
  30 * 60 * 1000,
  45 * 60 * 1000,
  60 * 60 * 1000,
  90 * 60 * 1000,
  120 * 60 * 1000,
  150 * 60 * 1000
];

for (let i = 0; i < numMeetings; i++) {
  const attendees = [];
  const topics = [];

  const numOfAttendees = Math.floor(Math.random() * 10) + 1;
  const numOfTopics = Math.floor(Math.random() * 10);

  for (let iatt = 0; iatt < numOfAttendees; iatt++) {
    attendees.push({
      name: faker.name.findName(),
      avatar: faker.image.avatar()
    });
  }

  for (let itop = 0; itop < numOfTopics; itop++) {
    topics.push({
      text: faker.company.bs(),
      presenter: attendees[Math.floor(Math.random() * numOfAttendees)]
    });
  }

  const id = uuid.v4();

  meetings.ids.push(id);
  meetings.data[id] = {
    title: faker.company.bs(),
    startDate: faker.date.future(),
    duration: durations[Math.floor(Math.random() * 7)],
    attendees,
    topics
  };
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/meetings", (req, res) => {
  const offset = req.query.offset || 0;
  const next = req.query.next || 50;

  const resultSet = meetings.ids.slice(offset, next);

  res.send({
    meetings: resultSet.map((id) => {
      const { title, startDate, duration, attendees } = meetings.data[id];

      return {
        id,
        title,
        startDate,
        duration,
        attendees
      };
    })
  });
});

app.post("/api/meetings", (req, res) => {
  const id = uuid.v4();

  if (req.body) {
    meetings.ids.push(id);
    meetings.data[id] = req.body;
  }

  res.send({ ...req.body, id });
});

app.get("/api/meetings/:meetingId", (req, res) => {
  const { meetingId } = req.params;

  res
    .status(meetings.data[meetingId] ? 200 : 404)
    .send(meetingId ? meetings.data[meetingId] : {});
});

app.patch("/api/meetings/:meetingId", (req, res) => {
  const { meetingId } = req.params;

  if (req.body) {
    meetings.data[meetingId] = req.body;
  }

  res
    .status(meetings.data[meetingId] ? 200 : 404)
    .send(meetingId ? meetings.data[meetingId] : {});
});

app.delete("/api/meetings/:meetingId", (req, res) => {
  const { meetingId } = req.params;

  if (meetingId) {
    delete meetings.data[meetingId];
    const index = meetings.indexOf(meetingId);
    if (index !== -1) {
      meetings.splice(index, 1);
    }
  }

  res.status(200).send();
});

// Serve any static files
app.use(express.static(path.join(__dirname, "client/serv")));

// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/serv", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
