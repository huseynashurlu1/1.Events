function Search() {
    var ss = document.getElementById('search-section')

    ss.classList.toggle("active");
}

function Lang() {
    var icon = document.getElementById('angel')
    var lang = document.getElementById('options')
    icon.classList.toggle('angel')
    lang.classList.toggle('active')
}