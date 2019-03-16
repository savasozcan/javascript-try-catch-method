document.getElementById('myBtn').addEventListener('click', function (e) {
    var name = document.getElementById('form-name-field'),
        email = document.getElementById('form-email-field'),
        phone = document.getElementById('form-phone-field'),
        errors = document.getElementById('errors');

    try{
        if (name.value.length === 0) {
            throw new Error('Name is Required');
        }
        if (name.value.length > 20) {
            throw new Error('Name is Too Long')
        }
        if (isNaN(phone.value)) {
            throw new Error('Phone must be numeric')
        }
        if (!(phone.value.length === 11)) {
            throw new Error('Phone must be 11 numeric characters')
        }

        console.log('form submitted')
    }catch (err) {
        errors.innerHTML = err;
    }
    finally {
        name.value = '';
        email.value= '';
        phone.value= '';
    }

    e.preventDefault();
});