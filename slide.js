const item = document.querySelector(".slide-item");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

const data = [
  '<video src="./media/WhatsApp Video 2023-11-25 at 21.02.06_208b92b0.mp4" controls></video>',
  '<img src="./media/WhatsApp Image 2023-11-25 at 21.02.43_53e5e7fd.jpg" alt="" />',
  '<img src="./media/WhatsApp Image 2023-11-25 at 21.03.31_436b4cfa.jpg" alt="" />',
  '<img src="./media/WhatsApp Image 2023-11-25 at 21.03.31_d9993b80.jpg" alt="" />',
];

let i = 0;
item.innerHTML = data[i];
left.addEventListener("click", () => {
  if (i != 0) {
    i--;
    item.innerHTML = data[i];
  }
});
right.addEventListener("click", () => {
  if (i != 3) {
    i++;
    item.innerHTML = data[i];
  }
});
