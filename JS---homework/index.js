let arr = [1, undefined, 3, 5, -3, 'sdf', 'a', NaN, 15, -5],
    newArr = filterArray(arr),
    max = getMaxValue(newArr),
    min = getMinValue(newArr),
    sum = getSumValue(newArr);

alert('Максимум' + max);
alert('Минимум' + min);
alert('Сумма' + sum);

function filterArray(arr) {
    function filterer(arr) {
        return isNaN(arr) === false;
    }

    arr = arr.filter(filterer);
    return arr;
}

function getMaxValue(newArr) {
    let max = newArr[0];
    for (let i = 0; i < newArr.length; i++) {

        if (max < newArr[i]) max = newArr[i];
    }
    return max;
}

function getMinValue(newArr) {
    let min = newArr[0];
    for (let i = 0; i < newArr.length; i++) {
        if (min > newArr[i]) min = newArr[i];
    }
    return min;
}

function getSumValue(newArr) {
    let sum = 0;
    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i];
    }
    return sum;
}