$(document).ready(function() {
    setTimeout(function() {
        $('#image').hide();
        $('.container').show();
    }, 1000);

    $('#loginBtn').click(function() {
        $('#buttons').hide();
        $('#loginForm').show();
    });

    $('#registerBtn').click(function() {
        $('#buttons').hide();
        $('#registerForm').show();
    });

    $('#listUsersBtn').click(function() {
        $('#buttons').hide();
        $('#userList').show();
    });

    $('#backBtnLogin').click(function() {
        $('#loginForm').hide();
        $('#buttons').show();
    });

    $('#backBtnRegister').click(function() {
        $('#registerForm').hide();
        $('#buttons').show();
    });

    $('#backBtnUserList').click(function() {
        $('#userList').hide();
        $('#buttons').show();
    });

    $('#submitBtn').click(function() {
        var email = $('#email').val();
        var password = $('#password').val();
        if(email === 'teste@email.com' && password === '1234') {
            $('#loginForm').hide();
            $('#dashboard').show();
        }
    });

    $('#backBtnDashboard').click(function() {
        $('#dashboard').hide();
        $('#buttons').show();
    });

    $('#regSubmitBtn').click(function() {
        var name = $('#name').val();
        var email = $('#regEmail').val();
        var password = $('#regPassword').val();
        if(name && email && password) {
            $('#registerForm').hide();
            $('#successMessage').show();
            setTimeout(function() {
                $('#successMessage').hide();
                $('#buttons').show();
            }, 1000);
        }
    });
});
