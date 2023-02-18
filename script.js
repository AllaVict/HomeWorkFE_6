// Задача 1 -----------   Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На данном этапе делать процесс обратимым при повторном клике необязательно.
let paragraphTask1 = document.createElement("p");
paragraphTask1.innerText = "Task 1 ---------------";
document.body.append(paragraphTask1);

let daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let mainDiv1 = document.createElement("div");
document.body.append(mainDiv1);
for (let i = 0; i < daysOfWeek.length; i++) {
  let paragraph = document.createElement("p");
  paragraph.classList.add("p1");
  paragraph.innerText = daysOfWeek[i];
  mainDiv1.append(paragraph);
  paragraph.addEventListener("click", function () {
    paragraph.innerText = "**********";
  });
}

// Задача 2 -----------  Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active.  В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.
//  Задача 3 -----------    Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.
let paragraphTask2 = document.createElement("p");
paragraphTask2.innerText = "Task 2 ---------------";
document.body.append(paragraphTask2);

let mainDiv2 = document.createElement("div");
document.body.append(mainDiv2);
for (let i = 0; i < 10; i++) {
  let internalDiv = document.createElement("div");
  internalDiv.innerText = [i];
  mainDiv2.append(internalDiv);
  internalDiv.addEventListener("click", function () {
    internalDiv.classList.add("active");
    internalDiv.classList.toggle("activeReverse");
  });
}

let paragraphTask3 = document.createElement("p");
paragraphTask3.innerText = "Task 3 ---------------";
document.body.append(paragraphTask3);

let mainDiv3 = document.createElement("div");
document.body.append(mainDiv3);
for (let i = 0; i < 10; i++) {
  let internalDiv = document.createElement("div");
  internalDiv.classList.add("active");
  internalDiv.innerText = [i];
  mainDiv3.append(internalDiv);
  internalDiv.addEventListener("click", function () {
    internalDiv.classList.add("active");
    internalDiv.classList.toggle("activeReverse");
  });
  let c = i;
  if (c == i) {
    internalDiv.addEventListener("click", function () {
      internalDiv.classList.remove("active");
    });
  }
}

// Задача 4 -----------      В JS объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. Так, пользователь, нажимая на маленькие картинки видит их отображение в большем размере.

let paragraphTask4 = document.createElement("p");
paragraphTask4.innerText = "Task 4 ---------------";
document.body.append(paragraphTask4);
let imagesLink = [
  "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/2366147c-9d05-4414-b016-2bd0e3233b1a/shutterstock_97506335_0.jpg",
  "https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png",
  "https://www.ixbt.com/img/n1/news/2023/1/5/ixbtmedia_beautiful_cat_42d115e0-5c24-4309-b023-cb3fdd824f5b_large.png",
  "https://m3.netinfo.bg/media/images/47563/47563615/r-960-540-zhivotni-kuche-kotka-oktopod.jpg",
];

for (let i = 0; i < imagesLink.length; i++) {
  let img = document.createElement("img");
  img.classList.add("image");
  img.setAttribute("src", imagesLink[i]);
  document.body.append(img);
  img.addEventListener("click", function () {
    img.classList.toggle("image_big");

  });
}

// Задача 5 -----------   Есть массив из объектов. Каждый объект имеет свойства en и ru. В свойстве en написано слово на английском, а в свойстве ru на русском. Необходимо реализовать карточки, при нажатии на которые слова с русского меняются на английский и обратно.     Подсказка. В каждой карточке должно быть два параграфа. В одном написано на русском, а во втором на английском и при нажатии на карточку один параграф получает класс с display none а второй с display block.
// Задача 6 -----------   Добавить внизу кнопки RU и EN при нажатии на которые все карточки переключаются на русский или английский соответственно.
// Задача ВЫПОЛНЕНА исходя из того что было на лекциях!!!.  На уроках не разбиралась темы как создавать и работать с массивом обектов,НЕ было ни одного  примера с работой именно массивов обектов и  .поэтому было бы не плохо чтобы это тема была на уроке, мы платим за обучение.

let paragraphTask5 = document.createElement("p");
paragraphTask5.innerText = "Task 5, 6 ---------------";
document.body.append(paragraphTask5);

const objects = [
  { en: "word", ru: "слово" },
  { en: "other word", ru: "другое слово" },
];
// objects.forEach(element => {
// });
let mainDiv56 = document.createElement("div");
// mainDiv56.classList.add("mainDiv56")
document.body.append(mainDiv56);

let mainDiv5 = document.createElement("div");
mainDiv5.classList.add("mainDiv5");
mainDiv56.append(mainDiv5);


let paragraphEn5 = document.createElement("p");
let paragraphRu5 = document.createElement("p");
paragraphEn5.classList.add("p_block");
paragraphEn5.innerText = "word";
mainDiv5.append(paragraphEn5);
mainDiv5.append(paragraphRu5);

let check = true;
function changeStyleParagraph5() {
  if (check) {
    paragraphEn5.classList.remove("p_block");
    paragraphEn5.innerText = "";
    paragraphRu5.innerText = "слово";
    paragraphRu5.classList.add("p_block");
  } else {
    paragraphRu5.classList.remove("p_block");
    paragraphRu5.innerText = "";
    paragraphEn5.innerText = "word";
    paragraphEn5.classList.add("p_block");
  }
  check = !check;
}

let mainDiv6 = document.createElement("div");
mainDiv6.classList.add("mainDiv6");
mainDiv56.append(mainDiv6);
let paragraphEn6 = document.createElement("p");
let paragraphRu6 = document.createElement("p");
paragraphEn6.classList.add("p_block");
paragraphEn6.innerText = "other word";
mainDiv6.append(paragraphEn6);
mainDiv6.append(paragraphRu6);

let check1 = true;
function changeStyleParagraph6() {
  if (check1) {
    paragraphEn6.classList.remove("p_block");
    paragraphEn6.innerText = "";
    paragraphRu6.innerText = "другое слово";
    paragraphRu6.classList.add("p_block");
  } else {
    paragraphRu6.classList.remove("p_block");
    paragraphRu6.innerText = "";
    paragraphEn6.innerText = "other word";
    paragraphEn6.classList.add("p_block");
  }
  check1 = !check1;
}
mainDiv5.addEventListener("click", changeStyleParagraph5);
mainDiv6.addEventListener("click", changeStyleParagraph6);

let buttonEn = document.createElement("button");
buttonEn.classList.add(".en");
buttonEn.innerText = "EN";
mainDiv56.append(buttonEn);
let buttonRu = document.createElement("button");
buttonRu.classList.add(".ru");
buttonRu.innerText = "RU";
mainDiv56.append(buttonRu);

function changeTextEnglish() {
  paragraphRu5.classList.remove("p_block");
  paragraphRu5.innerText = "";
  paragraphEn5.innerText = "word";
  paragraphEn5.classList.add("p_block");

  paragraphRu6.classList.remove("p_block");
  paragraphRu6.innerText = "";
  paragraphEn6.innerText = "other word";
  paragraphEn6.classList.add("p_block");
}
function changeTextRussia() {
  paragraphEn5.classList.remove("p_block");
  paragraphEn5.innerText = "";
  paragraphRu5.innerText = "слово";
  paragraphRu5.classList.add("p_block");
  paragraphEn6.classList.remove("p_block");
  paragraphEn6.innerText = "";
  paragraphRu6.innerText = "другое слово";
  paragraphRu6.classList.add("p_block");
}
buttonEn.addEventListener("click", changeTextEnglish);
buttonRu.addEventListener("click", changeTextRussia);

// Задача 7 -----------   Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.
let paragraphTask7 = document.createElement("p");
paragraphTask7.innerText = "Task 7 ---------------";
document.body.append(paragraphTask7);

let mainDiv7 = document.createElement("div");
document.body.append(mainDiv7);

for (let i = 0; i < 255; i = i + 5) {
  let internalDiv = document.createElement("div");
  internalDiv.innerText = [i];
  let indexOfColor = Number([i]);
  internalDiv.style.width = "100px";
  internalDiv.style.height = "20px";
  internalDiv.style.border = "1px solid black";
  internalDiv.style.backgroundColor = "rgb(128,128," + indexOfColor + ")";
  mainDiv7.append(internalDiv);
}
