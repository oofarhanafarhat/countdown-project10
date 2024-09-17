import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";

const answer = await inquirer.prompt([
  {
    name: "time",
    type: "number",
    message: "please Enter the Amount of second",
    validate: (store) => {
        if (isNaN(store)) {
          return "Please enter a valid number";
        } else if (store > 60) {
          return "Seconds must be between  0 to 60";
        } else {
          return true;
        }
      },
  },
]);
let store = answer.time;

function startTime(value: number) {
  const intervalTime = new Date(new Date().getTime() + value * 1000);
  const intervalId = setInterval(() => {
    const currTime = new Date();
    const timeDiff = differenceInSeconds(intervalTime, currTime);
    if (timeDiff <= 0) {
      console.log("Timer has expired");
      clearInterval(intervalId);
      process.exit();
    }
    const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
    const sec = Math.floor(timeDiff % 60);
    console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
  }, 1000);
}

startTime(store);



