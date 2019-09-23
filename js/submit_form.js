$(document).ready(function() {
    fillForm()


    function fillForm() {
        let formName = localStorage.getItem('name');
        let formPhone = localStorage.getItem('phone');
        if (formName && formPhone) {
            $('#name').val([formName]);
            $('#phone').val([formPhone]);
        }
    }

    $(".call-back-form").submit(function(e) {

        e.preventDefault();

        let $form = $(this);
        let url = $form.attr('action');
        let $successElem = $('<div class="alert alert-success" role="alert">Заявка успешно оформлена, опреатор с Вами скоро свяжеться.</div>')

        localStorage.setItem('name', $('#name').val());
        localStorage.setItem('phone', $('#phone').val());
        $('.call-back-form input').val([''])

        $.ajax({
            type: "POST",
            url: url,
            data: $form.serialize(),
            success: function(data) {
                $('div.alert-success').remove()
                $form.append($successElem)
            }
        });
    });
})