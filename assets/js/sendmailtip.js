function sendMail(contactForm) {
    emailjs.send("service_08b5775", "template_eq27n9l", {
            'from_name': contactForm.fullname.value,
            'from_email': contactForm.email.value,
            'message': contactForm.message.value
        })
        .then(
            // Sweet Alert custom pop-up alert if success; credit: https://sweetalert2.github.io/
            function () {
                Swal.fire({
                    title: 'Thank you for your recommendation!',
                    text: 'We will add this to our places.',
                    icon: 'success',
                    confirmButtonColor: '#712361'
                });
            },

            function () {
                Swal.fire({
                    title: 'Ooops...',
                    text: 'Something went wrong.',
                    icon: 'error',
                    confirmButtonColor: '#712361'
                });
            });


    document.getElementById('contactForm').reset();
    return false;
}