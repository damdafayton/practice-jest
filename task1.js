export function stringLength(str = '') {
    const stringLength = str.length
    if (stringLength < 1 || stringLength > 10) { throw Error('String length must be between 1 and 10 characters') }
    return stringLength
}