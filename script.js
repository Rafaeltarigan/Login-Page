function onGoogleSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}

window.onload = function() {
    var checkbox = document.getElementById('remember-me-checkbox');
    var icon = document.getElementById('remember-me-icon');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            icon.style.color = '#000';
            icon.style.backgroundColor = '#fff';
        } else {
            icon.style.color = '#fff';
            icon.style.backgroundColor = 'transparent';
        }
    });
};
