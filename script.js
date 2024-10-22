//bir tane kelimeler objesi ve icinde kelime dizileri 
//bir tane random fonksiyonu
//ana fonksiyon, bir adet parametre alip o pparametreye gore random cumle olusturcak -parametre cumlenin turunu isticek
const words = {
    sad: {
        subject: ["The boy", "The girl", "The dog", "The old man"],
        verb: ["cries", "sits alone", "remembers", "feels lost"],
        adverb: ["silently", "sadly", "quietly", "slowly"]
    },
    happy: {
        subject: ["The child", "The couple", "The puppy", "The family"],
        verb: ["laughs", "plays", "celebrates", "dances"],
        adverb: ["joyfully", "cheerfully", "excitedly", "happily"]
    },
    mysterious: {
        subject: ["The stranger", "The ghost", "The detective", "The ancient map"],
        verb: ["whispers", "hides", "investigates", "appears"],
        adverb: ["mysteriously", "silently", "suddenly", "enigmatically"]
    },
    romantic: {
        subject: ["The lovers", "The poet", "The sunset", "The couple"],
        verb: ["embraces", "whispers", "kisses", "dreams"],
        adverb: ["passionately", "tenderly", "romantically", "softly"]
    }
};

const randomNum = (range) =>{
    return Math.floor(Math.random() * range);
};

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a category (sad, happy, mysterious, romantic or random): ", (category) => {
    if (words[category]) {
        console.log(randomSentence(category));
    } else {
        console.log("Invalid category. Please enter one of: sad, happy, mysterious, romantic.");
    }
    rl.close(); 
});