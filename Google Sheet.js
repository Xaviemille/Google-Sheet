const scriptURL = 'https://script.google.com/macros/s/AKfycbwlST2tmDEwfzWi1MMJ9RJ9iEhEa47aPlMobA1LwqA4JJiQOJHq8bI2CG1fplUVBqEDGQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
