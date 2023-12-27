import { isNullOrUndefined } from './isNullOrUndefined';
import { isObject } from './isObject';

/**
 * Checks if the given object is empty.
 *
 * @param {object} obj - The object to check.
 * @returns {boolean} - Returns true if the object is empty, false otherwise.
 */
export const isObjectEmpty = (obj: object): boolean => !isNullOrUndefined(obj) && !isObject(obj) || !Object.keys(obj).length;
