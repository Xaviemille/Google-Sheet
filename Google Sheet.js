const scriptURL = 'https://script.google.com/macros/s/AKfycbwdJ5XqbQtmDh0vI_zs4FQYn6vV1zOs9WjAdltYqIcDar8vjzt3HqmlQhJIlgpDRu6l7Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
