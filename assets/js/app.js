


function game(){
    let secret = Math.random();
    console.log(secret);
    let number = +numberInput.value;
    console.log(number);
    let count = 0;

    

    if(number == secret){
        right.innerHTML = (`Вы угадали!!!`);

    }else if(secret > number){
        more.innerHTML = (`Моё число больше ${number}`);
        count++;
    }else {
        less.innerHTML = (`Моё число меньше ${number}`);
        count++;
    }

    wrong.innerHTML = (`Ваш вариант (${count}/10)`);

    if(count>10){
        answer.innerHTML = (`Game Over!!! Ответ был ${secret}`);
    }

}

// {
//     wrong.innerHTML = (`Ваш вариант (${count}/10)`);

// }


//     if(number == secret) {
//         right.innerHTML = (`Вы угадали!!!`);
//     }

        
//     if(number > secret) {
//         less.innerHTML = (`Моё число меньше ${number}`);
//         count++;
//     }  
    
    
//     if(number < secret) {
//         more.innerHTML = (`Моё число больше ${number}`);
//         count++;
//     }

//     if(number != secret) {
//         answer.innerHTML = (`Game Over!!! Ответ был ${secret}`);
//     }

// }