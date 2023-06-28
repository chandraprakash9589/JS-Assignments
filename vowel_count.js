
let  vowel_count=(str)=>{
    var vowel_list ="aeiouAEIO";
    var count =0;
    for(var i=0; i<str.length;i++){
        if(vowel_list.indexOf(str[i]) !==-1){
            count +=1;
        }
    }
    return count;
}
console.log( vowel_count("today is a great day"))


