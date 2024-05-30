const item = document.querySelector('#item');
const contentArray = ["ANIL", "CALM-LEARNER", "WEB DEVELOPER", "CRICKETER"];
let currentIndex = 0;

function changeContent() {
    item.textContent = contentArray[currentIndex];
    currentIndex = (currentIndex + 1) % contentArray.length;
}


changeContent();
// Change content every 7 seconds
setInterval(changeContent, 7000);

item.addEventListener("animationiteration", function() {
    changeContent();
});
