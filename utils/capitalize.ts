/**
 * Takes a string and capitalizes the first letter, returning a new string.
 *
 * @example
 * capitalize('hello world') // 'Hello world'
 * @param {string} str - The string to capitalize
 * @returns {string} A new string where the first letter is capitalized
 */
export function capitalize(str: string): string {
    const strArr = str.split('')
    strArr[0] = strArr[0]?.toUpperCase()!
    return strArr.join('')
}