const send = document.querySelector('.sendBtn');
send.addEventListener('click', hesapla);

function hesapla() {
  let userNumber = document.querySelector('.inputName').value;
  let userCardNumber = document.querySelector('.inputCardNumber').value;
  let userMonth = document.querySelector('.inputDateMounth').value;
  let userYear = document.querySelector('.inputDateYear').value;
  let userCvc = document.querySelector('.inputCvc').value;
  if (
    userNumber !== '' &&
    userCardNumber.length > 0 &&
    userMonth.length > 0 &&
    userYear.length > 0 &&
    userCvc.length > 0 
  ) {
    document.querySelector('.namePart').innerHTML = userNumber ;
    document.querySelector('.user-card-number').innerHTML = userCardNumber;
    document.querySelector('.mounth').innerHTML = userMonth;
    document.querySelector('.year').innerHTML = ` /${userYear}`;
    document.querySelector('.grey-area').innerHTML = userCvc;
    document.querySelector('.input-section').classList.toggle('hidden');
    document.querySelector('.hidden-section').classList.toggle('show');
  } else {
    const inputs = [
      document.querySelector('.inputName'),
      document.querySelector('.inputCardNumber'),
      document.querySelector('.inputDateMounth'),
      document.querySelector('.inputDateYear'),
      document.querySelector('.inputCvc')
    ];
    inputs.forEach(input => {
      if (input.value === '') {
        input.classList.add('invalid-input');
      } 
    });
  }
  }

  const clearBtn = document.querySelector('.clearbutton');
  clearBtn.addEventListener('click', clearAll);

function clearAll (){
  document.querySelector('.input-section').classList.remove('hidden');
  document.querySelector('.hidden-section').classList.remove('show');
  document.querySelectorAll('input').forEach(input => input.value = '' , );
}