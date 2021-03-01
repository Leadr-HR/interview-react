import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hacking together an interview, don't judge ;D */}
      {/* Also trying to avoid ANY css so I don't influence you. */}

      {/* <p>Welcome to the Frontend Day of Code for Leadr!</p>
      <p>First things first, open a new terminal on the bottom right corner</p>
      <img alt="helping :)" src="./helpinout.png" width={600} />
      <p>
        and type <b>yarn client</b> in the new terminal
      </p>
      <img alt="helping :)" src="./curseyousandbox.png" width={600} />

      <p>Then Click Here</p>
      <img alt="helping :)" src="./helpinoutmore.png" width={600} /> */}

      <p>Your task, should you choose to accept it (You should)</p>
      <ul>
        <li>
          You are writing a simple CRUD application that will be hitting a
          meetings API. If you want to see the implementation details, check
          server.js.
        </li>
        <img alt="helping :)" src="./directions1.png" width={150} />
        <br />
        <br />
        <li>
          You are free to build this however you want. You can use any react
          state library (or react state by itself), as well as any CSS
          implementation (though we use CSS-in-JS, incase you don't like that,
          better to know now). You can install dependencies via the terminal, or
          just by opening package.json and specifying them there.
        </li>
        <li>
          The files below will have some guidelines for each step of the CRUD
          process
        </li>
        <br />
        <br />
        <img alt="helping :)" src="./directions2.png" width={300} />
        <br />
        <br />
        <li>
          Thats it! This is super open ended on purpose. Feel free to ask any
          clarifying questions. You will have 30 minutes to get more details and
          direction if you need it, then an hour on your own, then a final 30
          minutes to go over code and discuss. Also, I could not get hot reload
          working here, so you gotta refresh yourself. Sorry : (
        </li>
        <li>
          Also, there is a very basic fetch utility in the utils folder. Feel
          free to use it, or bring in your own!
        </li>
      </ul>
    </div>
  );
};

export default Home;
