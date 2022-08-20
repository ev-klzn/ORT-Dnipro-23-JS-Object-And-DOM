let count = 0;
let secret = Math.random() * 100 +1;
secret = Math.floor(secret);
console.log(secret);

function game(){

    let number = +numberInput.value;
    console.log(number);

    if(number == secret){
        right.innerHTML = (`Вы угадали!!!`);
        
        function game() {
            window.location.reload();
          }
          setTimeout(game, 1500);

    }else if(secret > number){
        more.innerHTML = (`Моё число больше ${number}`);
        count++;
    }else {
        less.innerHTML = (`Моё число меньше ${number}`);
        count++;
    }

    wrong.innerHTML = (`Ваш вариант (${count}/10)`);

    if(count>10){
        wrong.innerHTML = (`Game Over!!! Ответ был ${secret}`);

          function game() {
            window.location.reload();
          }
          setTimeout(game, 1500);
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