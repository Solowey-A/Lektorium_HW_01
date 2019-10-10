let arr = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];

let max = 0,
    min = 0,
    sum =0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max){
        max = arr[i];
    }
    if(arr[i] < min){
        min = arr[i];
    }
    if(!isNaN(arr[i]) || arr[i]) {
        sum += arr[i];
    }
}

console.log('MaxNumber = ' + max, 'MinNumber = ' + min, 'SumNumber = ' + sum);

let arr2 =  [-1,-8,-2];
    let max2 = arr2[0],
    min2 = 0,
    sum2 =0;

for (let i = 0; i < arr2.length; i++) {
    if(arr2[i] > max2 ){
        max2 = arr2[i];
    }
    if(arr2[i] < min2){
        min2 = arr2[i];
    }
    if(!isNaN(arr2[i]) || arr2[i]) {
        sum2 += arr2[i];
    }
}

console.log('MaxNumber = ' + max2, 'MinNumber = ' + min2, 'SumNumber = ' + sum2);

let arr3 = [1,7,3];

let max3 = 0,
    min3 = 0,
    sum3 =0;
for (let i = 0; i < arr3.length; i++) {
    if(arr3[i] > max3){
        max3 = arr3[i];
    }
    if(arr3[i] < min3){
        min3 = arr3[i];
    }
    if(!isNaN(arr3[i]) || arr3[i]) {
        sum3 += arr3[i];
    }
}

console.log('MaxNumber = ' + max3, 'MinNumber = ' + min3, 'SumNumber = ' + sum3);

let arr4 = [1,undefined,3,5,-3];

let max4 = 0,
    min4 = 0,
    sum4 =0;
for (let i = 0; i < arr4.length; i++) {
    if(arr4[i] > max4){
        max4 = arr4[i];
    }
    if(arr4[i] < min4){
        min4 = arr4[i];
    }
    if(!isNaN(arr4[i]) || arr4[i]) {
        sum4 += arr4[i];
    }
}

console.log('MaxNumber = ' + max4, 'MinNumber = ' + min4, 'SumNumber = ' + sum4);

let arr5 = [1,NaN,3,5,-3];

let max5 = 0,
    min5 = 0,
    sum5 =0;
for (let i = 0; i < arr5.length; i++) {
    if(arr5[i] > max5){
        max5 = arr5[i];
    }
    if(arr5[i] < min5){
        min5 = arr5[i];
    }
    if(!isNaN(arr5[i]) || arr5[i]) {
        sum5 += arr5[i];
    }
}

console.log('MaxNumber = ' + max5, 'MinNumber = ' + min5, 'SumNumber = ' + sum5);