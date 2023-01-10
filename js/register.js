console.log("Register")

// window.addEventListener("DOMContentLoaded", function () {
    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let phonenumber = document.getElementById("phonenumber");
    let nxt = document.getElementById("submit");

    nxt.addEventListener('click', () => {
        let data = {
            fullName:fullname.value,
            email:email.value,
            password:password.value,
            phonenumber:phonenumber.value,
        };

        console.log(data);
        // $.ajax({
        //     url: "https://localhost:44389/api/User/Register",
        //     // url: "https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",
        //     type: "POST",
        //     data: data,
        //     'Content-Type': 'application/json',
        //     success: function (result) {
        //         console.log(result);
        //     },
        // });
    });
    function click(){
        console.log("Discovery");
    }
// });
