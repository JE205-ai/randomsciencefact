const concepts = [
    { name: "Hydrogen", color: "#ff5733", info: "Hydrogen is the first element in the periodic table." },
    { name: "Helium", color: "#33c1ff", info: "Helium is a noble gas used in balloons." },
    { name: "Oxygen", color: "#ffcc33", info: "Oxygen is essential for respiration in most living organisms." },
    { name: "Carbon", color: "#3333ff", info: "Carbon is the basis of organic life and found in all living things." },
    { name: "Gravity", color: "#66ff33", info: "Gravity is a force that attracts two bodies toward each other." },
    { name: "Photosynthesis", color: "#ff33a1", info: "Photosynthesis is the process by which plants make their own food using sunlight." },
    { name: "Energy", color: "#ff33c1", info: "Energy cannot be created or destroyed, only transformed." },
    { name: "Molecule", color: "#33ff57", info: "A molecule is a group of atoms bonded together." },
];

const grid = document.getElementById('grid');
const infoDiv = document.getElementById('info');

// Create squares and add event listeners
concepts.forEach(concept => {
   const square = document.createElement('div');
   square.classList.add('square');
   square.style.backgroundColor = concept.color;
    square.innerText = concept.name;

    // Add click event to display concept info
    square.addEventListener('click', () => {
        infoDiv.innerText = concept.info;
    });

    grid.appendChild(square);
});