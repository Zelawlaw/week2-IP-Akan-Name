const DAY_NAME_MAP = new Map([
  [0, ["Kwasi", "Akosua"]],
  [1, ["Kwadwo", "Adwoa"]],
  [2, ["Kwabena", "Abenaa"]],
  [3, ["Kwaku", "Akua"]],
  [4, ["Yaw", "Yaa"]],
  [5, ["Kofi", "Afua"]],
  [6, ["Kwame", "Ama"]],
]);

let thedate;
let gender;
let akan_name;
let button = document.getElementById("submit");
let akanelement = document.getElementById("akanName");

const validateDate = (date) => {
  if (date > new Date()) {
    alert("Birth Date is in the Future! Kindly enter correct Date of Birth");
    return false;
  } else if (date === null) {
    alert("incorrect Date! Kindly enter correct date");
    return false;
  } else {
    return true;
  }
};

button.addEventListener("click", () => {
  thedate = document.getElementById("birthday").valueAsDate;
  gender = document.getElementById("gender").value;

  if (!validateDate(thedate)) {
    return;
  }

  let day_of_week = thedate.getUTCDay();
  switch (gender) {
    case "male":
      akan_name = DAY_NAME_MAP.get(day_of_week)[0];
      break;
    case "female":
      akan_name = DAY_NAME_MAP.get(day_of_week)[1];
      break;
    default:
      alert("Kindly choose Gender!");
      return;
  }
  akanelement.innerHTML = akan_name;
});

const clearAkan = () => {
  akanelement.innerHTML = "";
};

document.getElementById("birthday").addEventListener("focus", clearAkan);
document.getElementById("gender").addEventListener("focus", clearAkan);
