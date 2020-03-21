module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(number === 0) return 'zero';
    if(number < 100) return twoDigits(number);
    if(number < 1000) return units[Math.floor(number % 1000 / 100)] + 
    ' hundred' + ((number % 100) ? ' ' + twoDigits(number % 100) : '');

    function twoDigits(n) {
        if (n < 20) return units[n];
        if (n < 100) return (tens[Math.floor(n / 10)] + ' ' 
                             + units[n % 10])
          .split(' ').filter(a => a).join(' ');
        }
}
