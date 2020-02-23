let isClicked = false;

function showNumber() {
   if (isClicked === false){
    document.getElementById('number-button').innerHTML = "+7 (919) 349-17-96";
   }
   else{
    document.getElementById('number-button').innerHTML = "Показать телефон";
   }
   isClicked = !isClicked;
};
    