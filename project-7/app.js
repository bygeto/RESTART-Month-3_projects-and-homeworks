// const form = document.querySelector("#form");
// const operatorImg = document.querySelector("#detection-result img");
// form.onsubmit = (event) => {
//   event.preventDefault();
//   const submitData = new FormData(form);
//   const operator = detectMobileOperator(submitData.get("PhoneNumber"));

//   switch (operator) {
//     case "Beeline":
//       operatorImg.setAttribute(
//         "src",
//         "https://avatars.mds.yandex.net/i?id=efe041117b4d7829163243bdde14b6339f65676f-12569474-images-thumbs&n=13",
//       );
//       break;
//     case "Mega":
//       operatorImg.setAttribute(
//         "src",
//         "https://avatars.mds.yandex.net/i?id=25e6bb64ac4cc432b548ae4a96fe875a0f807a9a-12537594-images-thumbs&n=13",
//       );
//       break;
//     case "O!":
//       operatorImg.setAttribute(
//         "src",
//         "https://avatars.mds.yandex.net/i?id=4f74495599d0c84c9eb37c7ecacfce6b_l-5231845-images-thumbs&n=13",
//       );
//       break;
//     default:
//       operatorImg.setAttribute(
//         "src",
//         "https://avatars.mds.yandex.net/i?id=6cd185358c63965bd05afc717c857b0df5995c51-12421437-images-thumbs&n=13   ",
//       );
//   }
// };

// function detectMobileOperator(phoneNumber) {
//   let operatorCode = null;

//   if (isLocal(phoneNumber)) {
//     operatorCode = phoneNumber.slice(1, 4);
//   }

//   if (isInternational(phoneNumber)) {
//     operatorCode = phoneNumber.slice(4, 7);
//   }

//   return detectOperator(operatorCode);
// }

// function isLocal(phoneNumber) {
//   return (
//     phoneNumber &&
//     typeof phoneNumber === "string" &&
//     phoneNumber.length === 10 &&
//     phoneNumber.startsWith("0")
//   );
// }

// function isInternational(phoneNumber) {
//   return (
//     phoneNumber &&
//     typeof phoneNumber === "string" &&
//     phoneNumber.length === 13 &&
//     phoneNumber.startsWith("+996")
//   );
// }

// function detectOperator(code) {
//   const beelineCodes = [771, 772, 773, 774, 775, 776, 777, 778, 779, 220, 227];
//   const megaCodes = [550, 551, 552, 553, 554, 555, 556, 557, 559, 755, 999];
//   const oshkaCodes = [
//     500, 501, 502, 504, 505, 507, 508, 509, 700, 701, 702, 703, 704, 705, 706,
//     707, 708, 709,
//   ];

//   code = Number(code);

//   if (beelineCodes.includes(code)) return "Beeline";
//   if (megaCodes.includes(code)) return "Mega";
//   if (oshkaCodes.includes(code)) return "O!";

//   return null;
// }

// const submitBtn = document.querySelector("#detect-btn");
// const phoneInput = document.querySelector('input[name="PhoneNumber"]');

// phoneInput.addEventListener("input", () => {
//   const phoneNumber = phoneInput.value;
//   const isLocal = phoneNumber.length === 10 && phoneNumber.startsWith("0");
//   const isInternational =
//     phoneNumber.length === 13 && phoneNumber.startsWith("+996");
//   if (isLocal || isInternational) {
//     submitBtn.classList.remove("hidden");
//   } else {
//     submitBtn.classList.add("hidden");
//     operatorImg.setAttribute(
//       "src",
//       "https://alterradeveloper.github.io/geeks-projects/kg-operator-detector/images/error.png",
//     );
//   }
// });

const phoneInput = document.querySelector("#phone-number");
const detectBtn = document.querySelector("#detect-btn");
const form = document.querySelector("#form");

phoneInput.addEventListener("input", () => {
  const phoneNumber = phoneInput.value;
  const isLocal = checkIsLocalPhone(phoneNumber);
  const isInternational = checkIsInternationalPhone(phoneNumber);

  if (isLocal || isInternational) {
    phoneInput.style.color = "green";
    detectBtn.classList.remove("hidden");
  } else {
    phoneInput.style.color = "red";
    detectBtn.classList.add("hidden");
  }
});

function checkIsLocalPhone(phone) {
  return phone.length === 10 && phone.startsWith("0");
}

function checkIsInternationalPhone(phone) {
  return phone.length === 13 && phone.startsWith("+996");
}

phoneInput.focus();

form.onsubmit = (event) => {
  event.preventDefault();

  const phoneNumber = phoneInput.value;
  const phoneCode = Number(getCode(phoneNumber));
  const operator = getOperator(phoneCode);
  const resultImage = document.querySelector("#detection-result img");

  switch (operator) {
    case "Beeline":
      resultImage.src =
        "https://avatars.mds.yandex.net/i?id=efe041117b4d7829163243bdde14b6339f65676f-12569474-images-thumbs&n=13";
      break;
    case "MEGA":
      resultImage.src =
        "https://avatars.mds.yandex.net/i?id=25e6bb64ac4cc432b548ae4a96fe875a0f807a9a-12537594-images-thumbs&n=13";
      break;
    case "O!":
      resultImage.src =
        "https://avatars.mds.yandex.net/i?id=4f74495599d0c84c9eb37c7ecacfce6b_l-5231845-images-thumbs&n=13";
      break;
    default:
      resultImage.src =
        "https://avatars.mds.yandex.net/i?id=6cd185358c63965bd05afc717c857b0df5995c51-12421437-images-thumbs&n=13";
      break;
  }
};

function getCode(phoneNumber) {
  const isLocalPhone = checkIsLocalPhone(phoneNumber);

  if (isLocalPhone) {
    return phoneNumber.substring(1, 4);
  }

  const isInternational = checkIsInternationalPhone(phoneNumber);
  if (isInternational) {
    return phoneNumber.substring(4, 7);
  }

  return null;
}

function getOperator(code) {
  const beelineCodes = [771, 772, 773, 774, 775, 776, 777, 778, 779, 220, 227];
  const megaCodes = [550, 551, 552, 553, 554, 555, 556, 557, 559, 755, 999];
  const oshkaCodes = [
    500, 501, 502, 504, 505, 507, 508, 509, 700, 701, 702, 703, 704, 705, 706,
    707, 708, 709,
  ];

  if (megaCodes.includes(code)) return "MEGA";

  if (beelineCodes.includes(code)) return "BeeLine";

  if (oshkaCodes.includes(code)) return "O!";

  return null;
}
