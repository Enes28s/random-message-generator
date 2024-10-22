
const words = {
  sad: {
    subject: ["The boy", "The girl", "The dog", "The old man"],
    verb: ["cries", "sits alone", "remembers", "feels lost"],
    adverb: ["silently", "sadly", "quietly", "slowly"],
  },
  happy: {
    subject: ["The child", "The couple", "The puppy", "The family"],
    verb: ["laughs", "plays", "celebrates", "dances"],
    adverb: ["joyfully", "cheerfully", "excitedly", "happily"],
  },
  mysterious: {
    subject: ["The stranger", "The ghost", "The detective", "The ancient map"],
    verb: ["whispers", "hides", "investigates", "appears"],
    adverb: ["mysteriously", "silently", "suddenly", "enigmatically"],
  },
  romantic: {
    subject: ["The lovers", "The poet", "The sunset", "The couple"],
    verb: ["embraces", "whispers", "kisses", "dreams"],
    adverb: ["passionately", "tenderly", "romantically", "softly"],
  },
};

//random number generator
const generateRandomNumber = (range) => {
  return Math.floor(Math.random() * range);
};

//user input implementation
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askForCategory = () => {
  rl.question(
    "Enter a category (sad, happy, mysterious, romantic, random) or 'exit' to quit: ",
    (category) => {
      if (category === "exit") {
        console.log("Goodbye!");
        rl.close();
      } else if (words[category] || category === "random") {
        console.log(randomSentence(category));
        askForCategory();
      } else {
        console.log(
          "Invalid category. Please enter one of: sad, happy, mysterious, romantic, random."
        );
        askForCategory();
      }
    }
  );
};
askForCategory();

//random sentences generator
const randomSentence = (category) => {
  let randomNumbers;
  let randomCategory;
  if (category !== "random") {
    randomNumbers = [
      generateRandomNumber(words[category].subject.length),
      generateRandomNumber(words[category].verb.length),
      generateRandomNumber(words[category].adverb.length),
    ];
  } else {
    const categories = Object.keys(words);
    randomCategory = generateRandomNumber(Object.keys(words).length);
    randomNumbers = [
      generateRandomNumber(words[categories[randomCategory]].subject.length),
      generateRandomNumber(words[categories[randomCategory]].verb.length),
      generateRandomNumber(words[categories[randomCategory]].adverb.length),
    ];
  }

  switch (category) {
    case "sad":
      return `${words[category]["subject"][randomNumbers[0]]} ${
        words[category]["verb"][randomNumbers[1]]
      } ${words[category]["adverb"][randomNumbers[2]]}.`;

      break;
    case "happy":
      return `${words[category]["subject"][randomNumbers[0]]} ${
        words[category]["verb"][randomNumbers[1]]
      } ${words[category]["adverb"][randomNumbers[2]]}.`;

      break;
    case "mysterious":
      return `${words[category]["subject"][randomNumbers[0]]} ${
        words[category]["verb"][randomNumbers[1]]
      } ${words[category]["adverb"][randomNumbers[2]]}.`;

      break;
    case "romantic":
      return `${words[category]["subject"][randomNumbers[0]]} ${
        words[category]["verb"][randomNumbers[1]]
      } ${words[category]["adverb"][randomNumbers[2]]}.`;

      break;
    case "random":
      const categories = Object.keys(words);
      return `${
        words[categories[randomCategory]]["subject"][randomNumbers[0]]
      } ${words[categories[randomCategory]]["verb"][randomNumbers[1]]} ${
        words[categories[randomCategory]]["adverb"][randomNumbers[2]]
      }.`;

      break;
    default:
      console.log("Invalid category. Please enter a valid category.");
      break;
  }
};
