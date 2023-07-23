const form = document.querySelector("form");
let notification = document.getElementById("notif");
let mail = document.querySelector(`input[type='email']`)

form.addEventListener('submit', e => {
    e.preventDefault();
    let val = mail.value.trim();
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (val === '') {
        notification.innerText = 'Empty Email Field'
        form.classList.add('error')
        mail.classList.add('errormail')
    }
    else if (!pattern.test(val)) {
        notification.innerText = 'Please provide a valid email'
        form.classList.add('error')
        mail.classList.add('errormail')

    }
    else {
        form.reset();
        notification.innerText = 'Success'
        form.classList.remove('error')
        mail.classList.remove('errormail')
        notification.classList.add('sucess')
    }
}
)
