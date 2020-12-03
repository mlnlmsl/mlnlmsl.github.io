window.localStorage.setItem('theme', 'dark');
// console.log(localStorage.getItem('theme'));

function changeTheme() {
    const theme =  localStorage.getItem('theme')==='dark'? 'light': 'dark';
    const body = document.getElementsByTagName('body')[0]
    body.className.replace(localStorage.getItem('theme'), theme)
    localStorage.setItem('theme', theme)
}
