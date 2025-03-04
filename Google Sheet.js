const scriptURL = 'https://script.google.com/macros/s/AKfycby8Zfyh_b5Hm495ZHaVqd0uueQcUj4Fkse43PpN0Ty8sXXXw3-3EueFSnjgO_sJai-N4w/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
