// Итерационный подсчет факториала
function factIterat(num){
    let result = 1
    for (let i = 1; i <= num; i++){
       result = result * i;
}
return result
}
console.log(factIterat(5))

// Рекурсивный расчет факториала
function factRec(num){
    if(number === 1) { 
        return 1; 
      }
      return num * factRec(num-1)
}