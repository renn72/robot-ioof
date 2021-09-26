# IOOF Robot

I decided to take a few liberties with Robot brief and build it out into a react app.

## Structure

Built from a functional paradigm
├── App.js
├── components
│ └── Board.js
│ ├── ControlPanel.js
│ └── Robot.js
├── context
│ ├── RobotContext.js

All of the logic is within the RobotContext, each robot is stored as an object in a useState array.

And the useContext provides the function endpoints to use and manipulate the data.

The frontend is run from the three components.

Board.js - renders the board and checks the context to see if any square also needs a robot rendered.

Robot.js - renders the robot, and points it in the right direction

ControlPanel.js - handles all the user inputs to manipulate the robots
