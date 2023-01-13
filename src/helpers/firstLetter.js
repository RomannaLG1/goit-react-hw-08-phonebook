  
export const toUpperCaseMaker = (str) => {
    let words = str.split(' ');
    let capitalizedWords = [];
    for (let i = 0; i < words.length; i++) {
      capitalizedWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
    return capitalizedWords.join(' ');
  }
