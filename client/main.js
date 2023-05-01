const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")
const submitBtn = document.getElementById("submitBtn")
const nameInput = document.getElementById("nameInput")


const getCompliment = () => {
    axios.get("http://localhost:5000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:5000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
function sendInputValues(){
    const inputData = nameInput.value;
    axios.post("http://localhost:5000/api/userValue/").then(res => {
        console.log(res)
    })

}
submitBtn.addEventListener("click", sendInputValues)

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)