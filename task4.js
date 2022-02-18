export function capitalizeString(str) {
    if (typeof str != 'string') {
        throw Error('Please input a string')
    }
    else return str.split('').map((letter, i) => i == 0 ? letter.toUpperCase() : letter).join('')
}