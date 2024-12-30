const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};
const fillFormFields = () => {
  try {

    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
if (formDataFromLS === null) {
      return;
    }
    formData = formDataFromLS;

    for (const key in formDataFromLS) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  } catch (err) {
    console.log(err);
  }
};

fillFormFields();

const onFormFieldInput = event => {
  const { target: formFieldEl } = event;

  const fieldValue = formFieldEl.value;
  const fieldName = formFieldEl.name;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
    const { email, message } = formData;
    if (!email.trim() || !message.trim()) {
        alert("Fill please all fields"); 
        return;
    }
    const { currentTarget: formEl } = event;

  formEl.reset();
    localStorage.removeItem('feedback-form-state');
    formData = {
  email: '',
  message: '',
};
};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);