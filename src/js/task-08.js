
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.currentTarget.elements);
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    }
  const objInfo = {
    login: email.value,
    password: password.value
  };
  console.log(objInfo);
  event.currentTarget.reset();
}
