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

    $('#backBtn').click(function() {
        $('#registerForm').hide();
        $('#buttons').show();
    });
});
