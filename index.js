let sidebar = document.getElementById('sidebar');
console.log(window.innerWidth)


function showSideBar() {
    if (window.innerWidth > '768') {
        sidebar.style.display = 'none'
    } else {
        sidebar.style.display = 'block'
    }
}


function hideSideBar() {
    sidebar.style.display = 'none'
}