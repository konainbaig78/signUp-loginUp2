const signUpForm=document.querySelector("#signup-form")
const loginForm=document.querySelector("#login-form")
const switchToLogin=document.querySelector("#switch-to-login")
const switchToSignUp=document.querySelector("#switch-to-signup")

switchToLogin.addEventListener(("click"),(e)=>{
    e.preventDefault()
    signUpForm.classList.remove("active")
   loginForm.classList.add("active")
})
switchToSignUp.addEventListener(("click"),(e)=>{
    e.preventDefault()
    loginForm.classList.remove("active")
   signUpForm.classList.add("active")
})
