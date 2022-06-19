export const parseWord= (word: string) =>{
    if ((/[^a-zA-Z]/.test(word)) || word ==""){
        return 'Words can only be composed of alphabetic character';
    }else{   
        return word.charAt(0) + removeDuplicate(word.substring(1,word.length-1)).length + word.charAt(word.length-1);
    }
  
};

function removeDuplicate(word: string){

   return word
    .split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join('');
}
console.log(parseWord("Smooth"));

