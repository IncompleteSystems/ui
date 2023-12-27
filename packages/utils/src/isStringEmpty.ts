import { isNullOrUndefined } from './isNullOrUndefined';
import { isString } from './isString';

/**
 * Checks if the given string is empty.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} - Returns true if the string is empty, false otherwise.
 */
export const isStringEmpty = (str: string): boolean => !isNullOrUndefined(str) && !isString(str) || !str.length;
