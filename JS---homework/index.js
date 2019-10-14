let array =  [-1,-8,-2],
    max = getMaxValue(array),
    min = getMinValue(array),
    sum = getSumValue(array);

alert('Максимум' + max);
alert('Минимум' + min);
alert('Сумма' + sum);

function getMaxValue(array){
    let max = array[0];
    for (let i = 0; i < array.length; i++) {

        if (max < array[i]) max = array[i];
    }
    return max;
}


function getMinValue(array){
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}

function getSumValue(array){
    let sum = array[0];
    for (let i = 0; i < array.length; i++) {
        if(!isNaN(array[i]) || array[i]) {
            sum += array[i];
        }
    }
    return sum;
}

