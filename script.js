// 헤더 기능 설정 함수
function setupHeader() {
  const user = localStorage.getItem("user");
  const isAdmin = sessionStorage.getItem("isAdmin") === "true";

  const guestMenu = document.getElementById("guestMenu");
  const userMenu = document.getElementById("userMenu");
  const userName = document.getElementById("userName");
  const navRight = document.getElementById("navRight");

  if (user && userMenu && guestMenu && userName) {
    guestMenu.style.display = "none";
    userMenu.style.display = "flex";
    userName.textContent = `${user} 님`;
  }

  // 관리자 링크 추가
  if (isAdmin && navRight && !document.getElementById("adminLink")) {
    const adminLink = document.createElement("a");
    adminLink.href = "admin.html";
    adminLink.id = "adminLink";
    adminLink.textContent = "관리자";
    navRight.appendChild(adminLink);
  }

  // 로그아웃 버튼 이벤트 연결
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("user");
      sessionStorage.removeItem("isAdmin");
      alert("로그아웃 되었습니다!");
      location.href = "index.html";
    });
  }

  // 햄버거 메뉴 토글
  const navToggle = document.getElementById("navToggle");
  if (navToggle && navRight) {
    navToggle.addEventListener("click", () => {
      navRight.classList.toggle("show");
    });
  }
}

// 페이지가 로드되면 헤더를 불러오고 기능 실행
document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    fetch("header.html")
      .then(res => res.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;
        setupHeader(); // 헤더 로드 후 기능 실행
      });
  }
});
