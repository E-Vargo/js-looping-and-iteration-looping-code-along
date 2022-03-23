// Code your solutions in this file

function writeCards(array, holiday){
    const array1 = [];
    for (let i = 0; i < array.length; i++) {
        array1.push(`Thank you, ${array[i]}, for the wonderful ${holiday} gift!`);
    }
    return array1;
}

function countDown(num){
    while (num > -1) {
        console.log(num--)
    }
}