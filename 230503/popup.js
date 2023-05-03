const openBtn = document.querySelector('.btn-open');
const article = document.querySelector('.popup');
const closeBtn = article.querySelector('.btn-close');
const dim = document.querySelector('.dim');

// 첫번째 포커스 요소
const firstEl = article.querySelector('a');

function openPopup() {
  article.classList.add('active');
}

function closePopup() {
  article.classList.remove('active');
}

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
closeBtn.addEventListener('keydown', function (event) {
  // 내가 누르고 있는 키 정보를 알려줌
  // console.log(e.key)
  // tab만 눌렀을 때 (Shift + tab일땐 실행되지 않음)
  if (!event.shiftKey && event.key === 'Tab') {
    console.log('tab만 누름');
    event.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener('keydown', function (event) {
  // shift + tab 같이 눌렀을 때 실행
  if (event.shiftKey && event.key === 'Tab') {
    event.preventDefault();
    closeBtn.focus();
  }
});

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closePopup();
  }
});

dim.addEventListener('click', closePopup);
