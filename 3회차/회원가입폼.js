const form = document.getElementById("form")

form.addEventListener("submit", function(event) {
  event.preventDefault()

  let userId = form.id.value
  let userPw1 = form.pw1.value
  let userPw2 = form.pw2.value
  let userPhone = form.phone.value
  let userPosition = form.position.value
  let userGender = form.gender.value
  let userEmail = form.email.value
  let userIntro = form.intro.value

  // 입력값 검증
  if (userId.length < 5) {
    alert("아이디가 너무 짧습니다. 5자 이상 입력해주세요.")
    return
  }

  if (userPw1 !== userPw2) {
    alert("비밀번호가 일치하지 않습니다.")
    return
  }

  //!변수는 "",null,undefined으면 true가 된다. JS에서 ||은 or로 취급된다.
  if (!userPw1 || !userEmail || !userPhone) {
  alert("회원가입을 위해 정보를 모두 입력해주세요.")
  return
}

  // 가입 완료
  document.body.innerHTML = ""
  document.write(`<p>${userId}님 환영합니다!</p>`)

  console.log(userId, userPw1, userPw2, userPhone, userPosition, userGender, userEmail, userIntro)
})
