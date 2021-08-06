// Problem statement find the second largest element in the array of integers

const secondLargest= function(arr, largestIndex){

    let largest= Number.MIN_VALUE ;
    let secondlargest = Number.MIN_VALUE

    for(let i=0;i<arr.length;i++){
        if(arr[i] > largest){
            secondlargest = largest;
            largest = arr[i];
             
        }
        // current element between 1st and the second
        if(arr[i]> secondlargest &&  arr[i] !==largest){
            secondlargest=arr[i];
        }
    }

    return secondlargest;

};

const ar = [2, 2,3,5, 4, 4]
console.log(secondLargest(ar, 2))

