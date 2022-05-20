const forms = () => {

    const modal1 = document.querySelector('.modal-callback');
    const form1 = modal1.querySelector('form');
    const inputName = form1.querySelector('.form-control');
    const inputPhone = form1.querySelector('.form-control.tel');


    inputName.addEventListener('input', (e) => {

        e.target.value = e.target.value.replace(/[^а-яА-Я+]+/g, "");
        
    });

    inputPhone.addEventListener('input', (e) => {

        e.target.value = e.target.value.replace(/[^\d\+]/g, "");
        
    });

    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется.';

    const valid = (list) => {

        let success = true;
        

        list.forEach(input => {
            if (input.classList.contains('form-name')) {
                if (/^[а-яА-Я+]+/g.test(input)) {
                    success = false;
                    alert('Имя не валидно!');
                } 
            } else if (input.classList.contains('tel')) {
                if (/^[0-9]+\/+/g.test(input)) {
                    success = false;
                    alert('Номер телефона не валиден!');
                }
            } 
            
        });
        return success;
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
              }
        }).then(res => res.json());
    }

    const submitForm = () => {
        const formElements = form1.querySelectorAll('input');
        const formData = new FormData(form1);
        const formBody = {};

        statusBlock.textContent = loadText;
        form1.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if (valid(formElements)) {
            sendData(formBody)
                .then(data => {
               
                statusBlock.textContent = successText;
                formElements.forEach(input => {
                    if (input[type="submit"]) {
                        return;
                    } else {
                        input.value = '';
                    }
                    
                });
            })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });
        } else {
            alert('Данные не валидны!');
        }
    }

    try {
        if (!form1) {
            throw new Error('Верните форму на место, пожалуйста)');
        }
        form1.addEventListener('submit', (event) => {
            event.preventDefault();
    
            submitForm();
            
        });
    }
    catch(error) {
        console.log(error.message);
    }

}

export default forms;