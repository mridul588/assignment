$(document).ready(function(){
    $('#filterBtn').click(function() {
        alert('Filter button clicked');
    });

    $('#sortBtn').click(function() {
        alert('Sort button clicked');
    });

    // Add additional JavaScript functionality as needed
});

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Close the dropdown when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.arrow')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

function closePopup() {
    document.getElementById("filter").style.display = "none";
}



