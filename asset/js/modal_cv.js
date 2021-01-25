$infoIcon = document.getElementById('info-icon');
$infoModal = document.getElementById('info-modal');
$closeModal = document.getElementById('close-modal');

$infoIcon.onclick = function() {
    $infoModal.style.display = "block";
}

$closeModal.onclick = function() {
    $infoModal.style.display = "none";
}