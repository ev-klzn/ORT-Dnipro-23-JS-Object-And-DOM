function game(){
    let secret = 57;
    let number = +numberInput.value;
    console.log(number);







    {
        wrong.innerHTML = (`Ваш вариант (${number}/10)`);  
    }
    
        
    if(number == secret) {
        right.innerHTML = (`Вы угадали!!!`);
    }

        
    if(number > secret) {
        less.innerHTML = (`Моё число меньше ${number}`);
    }  
    
    
    if(number < secret) {
        more.innerHTML = (`Моё число больше ${number}`);
    }

    if(number != secret) {
        answer.innerHTML = (`Game Over!!! Ответ был ${secret}`);
    }

}