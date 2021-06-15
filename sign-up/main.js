//Document
const userId = document.querySelector('#user-id')
const userIdText = document.querySelector('.user-id-wranning')
const userPw = document.querySelector('#user-pw')
const userPwCk = document.querySelector('#user-pw-check')
const userName = document.querySelector('#user-name')

//JS
const submit = false


//Event

//ID Check
userId.addEventListener('keyup', e => {
  idLength(e);
})

function idLength(e) {
  const eLength = e.target.value.length
  if (eLength >= 10) {
    userId.style.border = '1px solid red'
    userIdText.innerHTML = '아이디가 너무 길어'
  } else {
    userId.style.border = '1px solid #000'
    userIdText.innerHTML = ''
  }
}

//PW Check
userPw.addEventListener('keyup', e => {
  const pwCondition = e.target.value
  
})