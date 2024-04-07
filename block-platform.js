//navbar mobile screen
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle_btn');
    const dropDownMenu = document.querySelector('.dropdown');
    toggleBtn.addEventListener('click', function () {
        dropDownMenu.classList.toggle('open');
        if (dropDownMenu.classList.contains('open')) {
            toggleBtn.querySelector('i').className = 'fa fa-times';
        } else {
            toggleBtn.querySelector('i').className = 'fa fa-bars';
        }
    });
});

//sign up log in form
document.addEventListener('DOMContentLoaded', function () {
    // Login modal
    var loginBtn = document.getElementById('loginbutton');
    var loginModal = document.getElementById('login-modal');
    var closeLogin = document.getElementsByClassName('close')[0];
    loginBtn.onclick = function () {
        loginModal.style.display = 'block';
    }

    closeLogin.onclick = function () {
        loginModal.style.display = 'none';
    }
    // Signup modal
    var signupBtn = document.getElementById('signupbutton');
    var signupModal = document.getElementById('signup-modal');
    var closeSignup = document.getElementsByClassName('close')[1];
    signupBtn.onclick = function () {
        signupModal.style.display = 'block';
    }
    closeSignup.onclick = function () {
        signupModal.style.display = 'none';
    }
    // Click anywhere outside of the modal to close it
    window.onclick = function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == signupModal) {
            signupModal.style.display = 'none';
        }
    }
});



