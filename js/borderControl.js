const borderControlOne = document.getElementById("border-control-one");
const borderControlTwo = document.getElementById("border-control-two");
const borderControlThree = document.getElementById("border-control-three");

const percentageOne = document.getElementById("percentage-one");
const skillNameOne = document.getElementById("skill-name-one");

const percentageTwo = document.getElementById("percentage-two");
const skillNameTwo = document.getElementById("skill-name-two");

const percentageThree = document.getElementById("percentage-three");
const skillNameThree = document.getElementById("skill-name-three");

const boxSkills = document.getElementById("box-skills");

boxSkills.style.display = "none";

const frontEndItemOne = {
  percentage: "60%",
  skill: "CSS3",
};
const frontEndItemTwo = {
  percentage: "80%",
  skill: "HTML5",
};
const frontEndItemThree = {
  percentage: "60%",
  skill: "React.js",
};
const backEndItemOne = {
  percentage: "60%",
  skill: "Node.js",
};
const backEndItemTwo = {
  percentage: "40%",
  skill: "Java",
};
const backEndItemThree = {
  percentage: "20%",
  skill: "Golang",
};
const infraItemOne = {
  percentage: "60%",
  skill: "Docker",
};
const infraItemTwo = {
  percentage: "70%",
  skill: "Database",
};
const infraItemThree = {
  percentage: "10%",
  skill: "GCP",
};

const arrayFrontEndItems = [
  frontEndItemOne,
  frontEndItemTwo,
  frontEndItemThree,
];
const arrayBackEndItems = [backEndItemOne, backEndItemTwo, backEndItemThree];
const arrayInfraItems = [infraItemOne, infraItemTwo, infraItemThree];

const borderControl = (element, elementTwo, elementThree, arrayItems) => {
  element.addEventListener("click", () => {
    boxSkills.style.display = "flex";
    percentageOne.textContent = arrayItems[0].percentage;
    skillNameOne.textContent = arrayItems[0].skill;
    percentageTwo.textContent = arrayItems[1].percentage;
    skillNameTwo.textContent = arrayItems[1].skill;
    percentageThree.textContent = arrayItems[2].percentage;
    skillNameThree.textContent = arrayItems[2].skill;

    element.style.borderBottom = "2px solid var(--green)";
    elementTwo.style.borderBottom = "none";
    elementThree.style.borderBottom = "none";
  });
};
borderControl(
  borderControlOne,
  borderControlTwo,
  borderControlThree,
  arrayFrontEndItems
);
borderControl(
  borderControlTwo,
  borderControlOne,
  borderControlThree,
  arrayBackEndItems
);
borderControl(
  borderControlThree,
  borderControlOne,
  borderControlTwo,
  arrayInfraItems
);
