
// const eventForm = document.querySelector('.login-form')


// eventForm.addEventListener('submit', onFormSubmit );


// function onFormSubmit (event) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     const formValues = {};
    
//     formData.forEach((value, name) => {
//         // console.log('onFormSubmit -> name', name);
//         // console.log('onFormSubmit -> value', value);
//         formValues[name] = value;
//     });
   
//   console.log(formValues)
// }   


// вариант 2 


const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit );

function onFormSubmit (event){
    event.preventDefault(); 

    const email = form.elements.email.value;
    const password = form.elements.password.value;
  
    if (email === '' || password === '') {
      alert('Будь ласка, заповніть всі поля');
    } else {
      const formData = {
        email,
        password,
      };
  
      console.log(formData);
      console.log('Thank you for creating your account')
      form.reset();
    }
  }; 

  

    
    