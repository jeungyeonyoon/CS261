import Hikes from './hiking-class.js'; 

const myHikes = new Hikes('hikes');
window.addEventListener('load', () =>{
    myHikes.showHikeList();
}) 

//document.querySelector('hikes').innerHTML = myHikes.showHikeList();