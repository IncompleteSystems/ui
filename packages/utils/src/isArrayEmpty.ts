import { isArray } from './isArray';
import { isNullOrUndefined } from './isNullOrUndefined';

/**
 * Checks if the given array is empty.
 *
 * @param {any[]} arr - The array to check.
 * @returns {boolean} - Returns true if the array is empty, false otherwise.
 */
export const isArrayEmpty = (arr: any[]): boolean => !isNullOrUndefined(arr) && !isArray(arr) || !arr.length;
