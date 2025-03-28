
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwT2exf9Rx4oWJYZjW6yUfGt806Po-A2O-K61Pxce-51Sm8c73kj_UX3ck_BqmumddN/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Thank You For Subscribing! We recieved your email and will respond you as soon as possible!"
        setTimeout (function() {
            msg.innerHTML = ""
        }, 10000)
      })
      form.reset()
      .catch(error => console.error('Error!', error.message))
  })
