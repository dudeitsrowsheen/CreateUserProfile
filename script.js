var email = '';
var password1 = '';
var password2 = '';
var userGroup = '';

const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .previous-btn');
const form = document.querySelector('form');

// function to cycling through slides
nextBtn.forEach((button) => {
  button.addEventListener('click', () => {
    changeStep('next');
  });
});
prevBtn.forEach((button) => {
  button.addEventListener('click', () => {
    changeStep('prev');
  });
});

// function for submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll('input').forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
});

// funcion handles logic between slides
function changeStep(btn) {
  let index = 0;
  const active = document.querySelector('.active');
  index = steps.indexOf(active);
  steps[index].classList.remove('active');
  // is step next
  if (btn === 'next') {
    // check if user group select and assign values
    if (index === 1) {
      userGroup = document.getElementById('userGroup').value;

      document.getElementById('emailConfirm').value = email;
      document.getElementById('groupConfirm').value = userGroup;
      index++;
    }
    // check if email password and assign values
    if (index === 0) {
      let password1 = document.getElementById('password1').value;
      let password2 = document.getElementById('password2').value;

      // password validation
      let isValid = checkPassword(password1, password2);
      if (isValid) {
        email = document.getElementById('email').value;
        index++;
      }
    }
  } else if (btn === 'prev') {
    index--;
  }
  steps[index].classList.add('active');
}

// Function for valid password
function checkPassword(password1, password2) {
  //if password1 not entered
  if (password1 === '') {
    alert('enter password');
    return false;
  }
  //if verify password not entered
  if (password2 === '') {
    alert('confirm the password');
    return false;
    //if passwords don't match
  }
  if (password1 !== password2) {
    alert('passwords do not match');
    return false;
  }
  return true;
}
