// signup.js

// 예시로 제시할 이미 사용중인 이메일. 실제는 DB에 연결할것.
const usedEmails = ["test@mail.com", "admin@example.com"];

// 다크모드
document.getElementById('darkModeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 비밀번호 보기/숨기기 토글
document.querySelectorAll('.togglePwBtn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
      btn.textContent = "숨기기";
    } else {
      input.type = "password";
      btn.textContent = "보기";
    }
  });
});

// 이메일 중복 확인
document.getElementById('checkEmailBtn').addEventListener('click', () => {
  const email = document.getElementById('userEmail').value.trim();
  const msg = document.getElementById('emailCheckMsg');

  if (!email) {
    msg.textContent = "이메일을 먼저 입력하세요.";
    msg.classList.remove("text-success");
    msg.classList.add("text-danger");
    return;
  }

  if (usedEmails.includes(email.toLowerCase())) {
    msg.textContent = "이미 사용 중인 이메일입니다.";
    msg.classList.remove("text-success");
    msg.classList.add("text-danger");
  } else {
    msg.textContent = "사용 가능한 이메일입니다.";
    msg.classList.remove("text-danger");
    msg.classList.add("text-success");
  }
});

// 회원가입 처리
const form = document.getElementById('signupForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const userId = document.getElementById('userId').value.trim();
  const userPw1 = document.getElementById('userPw1').value;
  const userPw2 = document.getElementById('userPw2').value;
  const userPhone = document.getElementById('userPhone').value.trim();
  const userEmail = document.getElementById('userEmail').value.trim();
  const userGender = document.getElementById('userGender').value;

  // 간단한 유효성 검사
  if (userId.length < 5) {
    alert("아이디는 5자 이상이어야 합니다.");
    return;
  }

  if (userPw1 !== userPw2) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  if (usedEmails.includes(userEmail.toLowerCase())) {
    alert("이미 사용 중인 이메일입니다. 다른 이메일을 사용해주세요.");
    return;
  }

  alert(`환영합니다! ${userId}님, 회원가입이 완료되었습니다!`);
  window.location.href = "회원가입완료.html";
});
