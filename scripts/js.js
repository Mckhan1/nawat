let events = [
  {
    id: 1,
    title: "Приглашаем вас на праздник “Навруз” !",
    date: "26Фев 2023",
    img: "../assets/Screenshot_1.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit facere blanditiis ipsam explicabo expedita repudiandae magnam totam tempora veritatis temporibus nobis vitae possimus consequuntur sint eligendi sapiente pariatur, eaque sit minima. Illum, natus veritatis.",
  },
  {
    id: 2,
    title: "Приглашаем вас на шашлычок",
    date: "26Фев 2023",
    img: "../assets/Screenshot_2.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit facere blanditiis ipsam explicabo expedita repudiandae magnam totam tempora veritatis temporibus nobis vitae possimus consequuntur sint eligendi sapiente pariatur, eaque sit minima. Illum, natus veritatis.",
  },
  {
    id: 3,
    title: "Приглашаем вас на праздник “Хаким поженился” !",
    date: "1Июнь 2023",
    img: "../assets/Screenshot_4.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit facere blanditiis ipsam explicabo expedita repudiandae magnam totam tempora veritatis temporibus nobis vitae possimus consequuntur sint eligendi sapiente pariatur, eaque sit minima. Illum, natus veritatis.",
  },
  {
    id: 4,
    title: "Приглашаем вас на праздник “Курбан байрам” !",
    date: "26Фев 2023",
    img: "../assets/Screenshot_6.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit facere blanditiis ipsam explicabo expedita repudiandae magnam totam tempora veritatis temporibus nobis vitae possimus consequuntur sint eligendi sapiente pariatur, eaque sit minima. Illum, natus veritatis.",
  },
  {
    id: 5,
    title: "Приглашаем вас на праздник amira !",
    date: "22Июнь 2023",
    img: "../assets/Screenshot_7.png",
    description:
      "Lorem ipsum, dolor sit amet consemporibus nobis vitae possimus consequuntur sint eligendi sapiente pariatur, eaque sit minima. Illum, natus veritatis.",
  },
  {
    id: 6,
    title: "Приглашаем вас на праздник “ramadan” !",
    date: "20Фев 2023",
    img: "../assets/Screenshot_2.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit facere blanditiis ipsam explicabo expedita repudiandae magnam totam tempora veritatis.",
  },
  {
    id: 7,
    title: "Приглашаем вас на праздник “1 сентября” !",
    date: "26Фев 2023",
    img: "../assets/Screenshot_3.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit facere blanditiis ipsam explicabo expedita repudiandae magnam totam tempora veritatis temporibus nobis vitae possimus consequuntur sint eligendi sapiente pariatur, eaque sit minima. Illum, natus veritatis.",
  },
];


let images = [
  {
    id: 1,
    img: "./assets/Screenshot_1.png",

  },
  {
    id: 2,
    img: "./assets/Screenshot_2.png",

  },
  {
    id: 3,
    img: "./assets/Screenshot_3.png",
  },
  {
    id: 4,
    img: "./assets/Screenshot_4.png",
  },
  {
    id: 5,
    img: "./assets/Screenshot_6.png",
  },
  {
    id: 6,
    img: "./assets/Screenshot_7.png",
  },

];


let eventsMenu = document.querySelector("#eventsMenu");

let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");
document.querySelector(".btnBack").onclick = () => {
  btnLeft.classList.remove("btnLeftActive");
  btnRight.classList.remove("btnRightActive");
};

for (let i of events) {
  // left
  let menuMer = document.createElement("div");
  menuMer.classList.add("menu-mer");

  let span = document.createElement("span");
  span.innerHTML = i.title;

  let p = document.createElement("p");
  p.classList.add("date");
  p.innerHTML = i.date;

  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerHTML = "Подробнее";

  menuMer.append(span, p, btn);
  eventsMenu.append(menuMer);

  btn.onclick = () => {
    btnLeft.classList.add("btnLeftActive");
    btnRight.classList.add("btnRightActive");
    document.querySelector("#event-title").innerHTML = i.title;
    document.querySelector("#event-description").innerHTML = i.description;
    document.querySelector("#event-date").innerHTML = i.date;
    document.querySelector("#events-img").setAttribute('src', i.img)
  };

}







let fourImage = document.querySelector(".fourImage");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

document.querySelector(".fourBack").onclick = () => {
  fourImage.classList.remove("fourImageActive");
  left.classList.remove("leftActive");
  right.classList.remove("rightActive");
};


let menu = document.querySelector("#menu");


for (let i of images) {
  let menuImg = document.createElement("div")
  menuImg.classList.add('menu-img')
  let img = document.createElement('img')
  img.src = i.img
  menuImg.append(img)
  menu.append(menuImg)


  menuImg.onclick = () => {
    fourImage.classList.add("fourImageActive");
    left.classList.add("leftActive");
    right.classList.add("rightActive");
    document.querySelector("#fourImg").setAttribute('src', i.img)
  };


}


let mg = document.querySelector('.mg')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let item = 1
plus.onclick = () => {
  item = item + 1
  let pl = parseFloat(mg.innerText = item)

  console.log(item);
  console.log(pl);
}
minus.onclick = () => {
  item = item - 1
  let mn = parseFloat(mg.innerText = item)
  if(item == 0){
    item = item + 1
  }

  console.log(item);
  console.log(mn);

}