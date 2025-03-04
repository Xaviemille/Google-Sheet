const scriptURL = 'https://script.google.com/macros/s/AKfycbzpxWwfaLZgA2go8ijvQjL1iFH9-laoYpqiEZn1L7ai8fpdMvWutlwC4XcRvLDkf3bsOg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
