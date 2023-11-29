const inputName = document.querySelectorAll(".form-container input")[0]
const inputPassword = document.querySelectorAll(".form-container input")[1]

const buttonSignUp = document.querySelector(".form-container button")
const container = document.querySelector("div.container")
const loader = document.querySelector("div.loader")

container.style.display = "none"

setTimeout(function () {
    container.style.display = "flex"
    loader.style.display = "none"
}, 2000)

buttonSignUp.addEventListener("click", function (event) {

    event.preventDefault()

    const userRegisterStorage = JSON.parse(localStorage.getItem("userSignUp"))

    if (!userRegisterStorage) {
        alert("Please register in advance")
        window.location.href = "register.html"
    } else {
        if (inputName.value == "" || inputPassword.value == "") {
            alert("Please enter complete information ")
        } else {
            if (userRegisterStorage?.name == inputName?.value && userRegisterStorage?.password == inputPassword?.value) {
                swal({
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: true,
                    confirmButtonText: 'OK'
                }).then(() => {
                    setTimeout(() => {
                        window.location.href = "index.html"
                    }, 1000)
                })
            } else {
                swal({
                    icon: 'error',
                    title: 'Login Fail',
                    showConfirmButton: true,
                    confirmButtonText: 'OK'
                })
            }
        }
    }

})