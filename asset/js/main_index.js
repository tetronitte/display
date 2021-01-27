$contactIcon = document.getElementById('contact_icon');
$contactModal = document.getElementById('contact_modal');
$closeModal = document.getElementById('close_modal');

$contactIcon.onclick = function() {
    $contactModal.style.display = "block";
}

$closeModal.onclick = function() {
    $contactModal.style.display = "none";
}