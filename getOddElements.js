
const getOddElements =(arr)=>{
    return arr.filter(((elments,index,array)=>index%2===0),0)
}
 const arr = [3, 6, 1, 66, 45, 22];
console.log(getOddElements(arr));
