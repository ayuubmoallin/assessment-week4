module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ["Believe it can be done.", 'At the touch of love, everyone becomes a poet.', 'Better ask twice than lose yourself once.','Chance favors those in motion.','Believe it can be done.', 'Change is happening in your life, so go with the flow!', 'Curiosity kills boredom. Nothing can kill curiosity.', "Do not let ambitions overshadow small success."];

        let randomInt = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomInt];
      
        res.status(200).send(randomFortune);
    }   
}