import { isArrayEmpty } from './isArrayEmpty';
import { isNullOrUndefined } from './isNullOrUndefined';
import { isObjectEmpty } from './isObjectEmpty';
import { isStringEmpty } from './isStringEmpty';


/**
 * Checks if the given value is empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is empty, false otherwise.
 */
export const isEmpty = (value: any): boolean => isNullOrUndefined(value) || isArrayEmpty(value) || isObjectEmpty(value) || isStringEmpty(value);