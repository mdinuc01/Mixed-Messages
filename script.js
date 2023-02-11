//array of jokes
const jokes = [
  {
    whoseThere: "Tank",
    punchLine: "You're welcome."
  },
  {
    whoseThere: "Leaf",
    punchLine: "Leaf me alone!"
  },
  {
    whoseThere: "Butter",
    punchLine: "Butter let me in or I'll freeze!"
  },
  {
    whoseThere: "Leash",
    punchLine: "Lease you could do is answer the doorbell!"
  },
  {
    whoseThere: "A broken pencil",
    punchLine: "Never mind. It’s pointless."
  },
  {
    whoseThere: "Leon",
    punchLine: "Leon me ... when you're not strong!"
  },
  {
    whoseThere: "Elly",
    punchLine: "Elly-mentary, my dear Watson!"
  },
  {
    whoseThere: "Euripides",
    punchLine: "Euripides clothes, you pay for them!"
  },
  {
    whoseThere: "A wood wok",
    punchLine: "A wood wok 500 miles, and a wood wok 500 more!"
  },
  {
    whoseThere: "Cargo",
    punchLine: "Car go beep, beep!"
  }
];

//generating random number to pick joke to display
let jokeNumber = Math.floor(Math.random() * 10);

//function to display messages at different times
let showMessage = (message, interval) => {
  setTimeout(() => {
    console.log(message);
  }, interval * 1000);
};

//displaying knock knock joke
showMessage("Knock Knock", 1);
showMessage("Who's there?", 3);
showMessage(`${jokes[jokeNumber].whoseThere}`, 5);
showMessage(`${jokes[jokeNumber].whoseThere} who?`, 7);
showMessage(`${jokes[jokeNumber].punchLine}`, 9);
