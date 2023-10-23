function sort(arr){
    const n = arr.length;

    for(let i=0;i<n-1;i++){
        let max = i;

        for(let j=i+1;j<n;j++) {
            if(arr[j]>arr[max]){
                max = j;
            }
        }

        if(max != i) {
            const temp = arr[i];
            arr[i] = arr[max];
            arr[max] = temp ;
        }
    }
    return arr;
}

const input  =[2,25,8,52,1,10,9,77,100,0];
const sortedarray = sort(input);
console.log(sortedarray);