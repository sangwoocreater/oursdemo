// 슬라이드 배경 전환 기능
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

// 다크모드 토글
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 로그인 상태 유지 및 메뉴 표시 전환
window.addEventListener("DOMContentLoaded", () => {
  const authArea = document.getElementById("authArea");
  const user = localStorage.getItem("user");

  if (user) {
    authArea.innerHTML = `
      <span><strong>${user}</strong> 님</span>
      <a href="#" onclick="logout()">로그아웃</a>
    `;
  }
});

function logout() {
  localStorage.removeItem("user");
  location.reload();
}
