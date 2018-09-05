//
// Riku's Web Form Validator
//

const form = document.getElementById('web-form');


form.addEventListener('submit', (event) => {

  const firstname = form.elements['first-name'];
  const firstnameText = firstname.value;
  const firstnameError = document.getElementById('firstname-error');

  if (firstnameText === '') {
    firstnameError.textContent = 'Please enter your first name.';
    firstnameError.style.color = 'red';
    firstname.style.borderColor = 'red';
    status1 = false;
    firstname.focus();
  }
  else {
    firstnameError.textContent = '';
    firstname.style.borderColor = 'transparent';
    status1 = true;
  }

  const lastname = form.elements['last-name'];
  const lastnameText = lastname.value;
  const lastnameError = document.getElementById('lastname-error');

  if (lastnameText === '') {
    lastnameError.textContent = 'Please enter your last name.';
    lastnameError.style.color = 'red';
    lastname.style.borderColor = 'red';
    status2 = false;
    lastname.focus();
  }
  else {
    lastnameError.textContent = '';
    lastname.style.borderColor = 'transparent';
    status2 = true;
  }

  const email = form.elements.email;
  const emailText = email.value;
  const emailError = document.getElementById('email-error');

  if (emailText === '') {
    emailError.textContent = 'Please enter your email.';
    emailError.style.color = 'red';
    email.style.borderColor = 'red';
    status3 = false;
    email.focus();
  }
  else {
    emailError.textContent = '';
    email.style.borderColor = 'transparent';
    status3 = true;
  }

  const countrylist = form.elements['select-country'];
  const selectedCountry = countrylist.options[countrylist.selectedIndex].value;
  const countryErrorText = document.getElementById('select-country-error-text');

  if (selectedCountry === 'noCountry') {
    countryErrorText.innerHTML = 'Please select your country.';
    countryErrorText.style.color = 'red';
    status4 = false;
  }
  else if (selectedCountry !== 'noCountry') {
    countryErrorText.innerHTML = '';
    status4 = true;
  }
  let agreement = false;
  agreement = form.elements.agree.checked;
  const agreementError = document.getElementById('notAgreed');

  if (agreement === false) {
    agreementError.textContent = '\xa0\xa0\xa0You must agree with Terms and Conditions.';
    agreementError.style.color = 'red';
  }
  else if (agreement === true) {
    agreementError.textContent = '';
  }
  console.log(firstnameText);
  console.log(lastnameText);
  console.log(emailText);
  console.log(selectedCountry);
  console.log(agreement);

  if (status1 === true && status2 === true && status3 === true && status4 === true && agreement === true) {
    alert('Your form would be submitted now.\n\nHowever, in this demo there is nowhere to actually send the form.');
  }
  else {
    event.preventDefault();
  }
});
