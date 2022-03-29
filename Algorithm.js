function sentenseRead (text){

    let sentenseLength = 0
    let numWords = 0
    let vowelCount = 0

    let char = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u'
    }
    
    sentenseLength = text.length

    for (i=0; i<text.length; i++) {
        
        if(text[i].toLowerCase() in char){
            // console.log(text[0])
            vowelCount = vowelCount + 1
        } 

        if(text[i] === ' '){
            numWords += 1
        }
    }


    return{vowelcount: vowelCount, sentenseLength: sentenseLength, numWords: numWords}

}
console.log(sentenseRead('imole is a boy.'))


