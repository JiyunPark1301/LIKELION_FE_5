const $scrollBtn = document.querySelector('.scrolltop-btn');
const $subscribeBtn = document.querySelector('.subscribe-btn');
const $modalOverlay = document.querySelector('.modal-overlay');
const $modal = document.querySelector('.modal');
const $body = document.querySelector('body');
const $hamburgerBtn = document.querySelector('.hamburger');
const $sidebarOverlay = document.querySelector('.mobile-nav-overlay');
const $sidebar = document.querySelector('.mobile-nav');
const $closeBtn = document.querySelector('.mobile-nav button');

function scrollBtnDisplay() {
  // 문서가 수직으로 몇 픽셀만큼 스크롤 되었는지
  if (window.scrollY > 300) {
    $scrollBtn.classList.add('show');
  } else {
    $scrollBtn.classList.remove('show');
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

// 모달창을 여는 함수
function openModal(e) {
  e.preventDefault();
  $modalOverlay.classList.add('active');
  $body.classList.add('not-scroll');
}

// 모달창 닫는 함수
function closeModal(e) {
  // if (e.target.classList.contains('modal-overlay')) {
  //   $modalOverlay.classList.remove('active');
  //   $body.classList.remove('not-scroll');
  // }
  $modalOverlay.classList.remove('active');
  $body.classList.remove('not-scroll');
}

function openSidebar() {
  $sidebarOverlay.classList.add('active');
  $sidebar.classList.add('open');
}
function closeSidebar() {
  $sidebarOverlay.classList.remove('active');
  $sidebar.classList.remove('open');
}

window.addEventListener('scroll', scrollBtnDisplay);

$scrollBtn.addEventListener('click', scrollToTop);

$subscribeBtn.addEventListener('click', openModal);
$modalOverlay.addEventListener('click', closeModal);
$modal.addEventListener('click', (e) => {
  e.stopPropagation();
});

$hamburgerBtn.addEventListener('click', openSidebar);

$closeBtn.addEventListener('click', closeSidebar);
$sidebarOverlay.addEventListener('click', closeSidebar);
