module.exports = function toReadable(number) {
    const numberArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
        'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozenArray = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const arrayOfNumber = String(number).split('');
    if (number <= 19) {
        return numberArray[number];
    }
    if (number <= 99 && arrayOfNumber[1] === '0') {
        return dozenArray[arrayOfNumber[0] - 2];
    }
    if (number <= 99) {
        return `${dozenArray[arrayOfNumber[0] - 2]} ${numberArray[arrayOfNumber[1]]}`
    }
    if (number <= 999 && arrayOfNumber[1] === '0' && arrayOfNumber[2] === '0') {
        return `${numberArray[arrayOfNumber[0]]} hundred`;
    }
        if (number <= 999 && arrayOfNumber[1] < 2) {
        return `${numberArray[arrayOfNumber[0]]} hundred ${numberArray[Number(arrayOfNumber.slice(1, arrayOfNumber.length).join(''))]}`        
    }
    if (number <= 999 && arrayOfNumber[2] !== '0') {
        return `${numberArray[arrayOfNumber[0]]} hundred ${dozenArray[arrayOfNumber[1] - 2]} ${numberArray[arrayOfNumber[2]]}`
    }    
    if (number <= 999 && arrayOfNumber[1] !== '0' && arrayOfNumber[2] === '0') {
        return `${numberArray[arrayOfNumber[0]]} hundred ${dozenArray[arrayOfNumber[1] - 2]}`
    }  
}
