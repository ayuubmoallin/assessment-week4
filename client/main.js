const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneBtn");
const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("nameInput");
const deleteComplimentInput = document.getElementById('deleteComplimentInput');
const updateComplimentInput = document.getElementById('updateComplimentInput');
const deleteFortuneInput = document.getElementById('deleteFortuneInput');
const updateFortuneInput = document.getElementById('updateFortuneInput');

oldCompliment = '';
oldFortune = '';

// Get a compliment, 
const getCompliment = async () => {
    const res = await axios.get('http://localhost:3000/api/compliment/');
    oldCompliment = res.data;
    deleteComplimentInput.value = oldCompliment;
    updateComplimentInput.value = oldCompliment;
    console.log(res.data);
};


// Get a compliment
const getFortune = async () => {
  const res = await axios.get('http://localhost:3000/api/fortune/');
  oldFortune = res.data;
  deleteFortuneInput.value = oldFortune;
  updateFortuneInput.value = oldFortune;
  console.log("Fortune : ",res.data);
};


// Update a compliment
const updateCompliment = async (event) => {
  event.preventDefault();
  const newCompliment = document.getElementById('updateComplimentInput').value;
  const data = {
    oldCompliment: oldCompliment,
    newCompliment: newCompliment
  };
  console.log(oldCompliment);
  const res = await axios.put('http://localhost:3000/api/updateCompliment',data);
  console.log(res.data);
  oldCompliment = '';
};

// Update a fortune
const updateFortune = async (event) => {
  event.preventDefault();
  const updateFortuneInput = document.getElementById('updateFortuneInput').value;
  const data = {
    oldFortune: oldFortune,
    newFortune: updateFortuneInput
  };
  console.log(oldCompliment);
  const res = await axios.put('http://localhost:3000/api/updateFortune',data);
  console.log(res.data);
  oldFortune = '';
};

// Delete a compliment
const deleteCompliment = async (event) => {
  event.preventDefault();
  const toBeDelete = document.getElementById('deleteComplimentInput').value;
  console.log(toBeDelete);
  const res = await axios.delete(`http://localhost:3000/api/deleteCompliment?deleteCompliment=${toBeDelete}`);
  console.log(res.data);
};

// Delete a fortune
const deleteFortune = async (event) => {
  event.preventDefault();
  const toBeDelete = document.getElementById('deleteFortuneInput').value;
  console.log(toBeDelete);
  const res = await axios.delete(`http://localhost:3000/api/deleteFortune?deleteFortune=${toBeDelete}`);
  console.log(res.data);
};
document.getElementById('deleteFortuneBtn').addEventListener('click', deleteFortune);
document.getElementById('deleteComplimentBtn').addEventListener('click', deleteCompliment);
document.getElementById('updateFortuneBtn').addEventListener('click', updateFortune);
document.getElementById('complimentButton').addEventListener('click', getCompliment);
document.getElementById('updateComplimentBtn').addEventListener('click', updateCompliment);
document.getElementById('fortuneBtn').addEventListener('click', getFortune);