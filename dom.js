let container = document.querySelector(".paras");
let count = 1;

const getData = () => {
  let para = document.createElement("p");
  para.innerText = count++;
  para.setAttribute("class", "paras");
  console.log(para);
  container.prepend(para);
};
