const numbers = [1,3,5,7,8,15];

function  isPrime(number){
    number = parseInt(number);
    if(number < 2|| isNaN(number)){
        return false;
    }else{
        for(let i = 2;i<=Math.sqrt(number);i++){
            if(number%i==0){
                return false;
            }
        }
        return true;
    }


}
const primeNumbers = numbers.filter(n => isPrime(n) );
console.log(primeNumbers);