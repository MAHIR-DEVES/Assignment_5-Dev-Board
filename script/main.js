// background
document.getElementById('change-bg').addEventListener('click', function () {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
// window location
document
  .getElementById('discover-card')
  .addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '/sec.html';
  });

const buttons = document.querySelectorAll('.btn.text-white');
let totalCount = 0;
for (const button of buttons) {
  button.addEventListener('click', function (event) {
    totalCount += 1;
    event.preventDefault();
    alert('Bard update successfully.');
    this.disabled = true;

    if (totalCount === 6) {
      alert('done');
    }
  });
}
console.log(totalCount);

let minusCount = 6;
let plusCount = 23;

const minusDisplay = document.getElementById('minus-counter');
const plusDisplay = document.getElementById('add-counter');
const buttons1 = document.querySelectorAll('.btn.text-white');
for (const button of buttons1) {
  button.addEventListener('click', function () {
    if (minusCount > 0) {
      minusCount--;
      plusCount++;
      minusDisplay.innerText = ` ${minusCount}`;
      plusDisplay.innerText = ` ${plusCount}`;
      button.disabled = true;
    }
  });
}

// add history

const historyDiv = document.getElementById('history');
const buttons2 = document.querySelectorAll('.btn.text-white');
const clearHistoryBtn = document.getElementById('history-btn');
for (const button of buttons2) {
  button.addEventListener('click', function () {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = `dolor sit, amet consectetur adipisicing elit. Deserunt repudiandae e`;
    newParagraph.className = 'm-4 bg-[#F4F7FF] p-2 rounded-xl';
    historyDiv.appendChild(newParagraph);
  });
}
clearHistoryBtn.addEventListener('click', function () {
  historyDiv.innerHTML = '';
});
