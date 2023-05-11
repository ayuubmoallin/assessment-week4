const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
const fortunes = ["Believe it can be done.", 'At the touch of love, everyone becomes a poet.', 'Better ask twice than lose yourself once.','Chance favors those in motion.','Believe it can be done.', 'Change is happening in your life, so go with the flow!', 'Curiosity kills boredom. Nothing can kill curiosity.', "Do not let ambitions overshadow small success."];
module.exports = {
    getCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {

        let randomInt = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomInt];
      
        res.status(200).send(randomFortune);
    },
    
    updateCompliment : (req, res) => {
        const { oldCompliment, newCompliment } = req.body;
        const index = compliments.indexOf(oldCompliment);
        if (index !== -1 && newCompliment) {
            compliments[index] = newCompliment;
            res.status(200).send(compliments);
        } 

    },
    updateFortune : (req, res) => {
        const { oldFortune, newFortune } = req.body;
        const index = fortunes.indexOf(oldFortune);
        if (index !== -1 && newFortune) {
            fortunes[index] = newFortune;
            res.status(200).send(fortunes);
        } 
        
    },
    deleteCompliment : (req, res) => {
        const toBeDeleted = req.query.deleteCompliment;
        const index = compliments.findIndex(compliment => compliment === toBeDeleted);

        if (index > -1) {
            compliments.splice(index, 1);
            res.status(200).send({message : 'Compliment deleted successfully', data : compliments});
        }
    },
    deleteFortune : (req, res) => {
        const toBeDeleted = req.query.deleteFortune;
        const index = fortunes.findIndex(fortune => fortune === toBeDeleted);
        if (index > -1) {
            fortunes.splice(index, 1);
            res.status(200).send({message : 'Fortune deleted successfully', data : fortunes});
        } 
    }
}