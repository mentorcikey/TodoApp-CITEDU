const inputName = document.querySelectorAll(".form-container input")[0]
const inputEmail = document.querySelectorAll(".form-container input")[1]
const inputPassword = document.querySelectorAll(".form-container input")[2]

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

    const userSignUp = {
        name: inputName?.value,
        email: inputEmail?.value,
        password: inputPassword?.value
    }

    if (inputName.value == "" || inputPassword.value == "" || inputEmail.value == "" || inputPassword.value == "") {
        alert("Please enter complete information ")
    } else {

        async function postData(url = "", data = {}) {

            const response = await fetch(url, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data),
            });
            return response.json();
        }

        postData("https://656708c964fcff8d730f9b4b.mockapi.io/api/login/users", userSignUp).then((data) => {
            localStorage.setItem("userSignUp", JSON.stringify(data));
        })

        swal({
            icon: 'success',
            title: 'Register successful',
            showConfirmButton: true,
            confirmButtonText: 'OK'
        }).then(() => {
            setTimeout(() => {
                window.location.href = "login.html"
            }, 1000)
        })
    }
})
