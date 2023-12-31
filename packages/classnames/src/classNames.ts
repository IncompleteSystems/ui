import { isArray, isNumber, isObject, isString } from '@incomplete/ui.utils';

// Valid input types for classNames
export type ClassMap = { [key: string]: boolean };
export type ClassName = string | number | null | undefined | ClassName[] | ClassMap;

// toClassMap is a function that takes a ClassName and returns a ClassMap or null
const toClassMap = (className?: ClassName): ClassMap | null => {
  // if className is falsy, return null
  if (!className) {
    return null;
  }

  // if className is a string or number, create a new object with the className as the key and true as the value
  if (isString(className) || isNumber(className)) {
    return { [className.toString()]: true };
  }

  // if className is an array, map over it and call toClassMap again, then filter and merge the results
  if (isArray(className)) {
    return (className as ClassName[]).map(toClassMap).filter(Boolean).reduce((prevClassMap, nextClassMap) => {
      return { ...prevClassMap, ...nextClassMap }
    }, {});

  }

  // if className is an object, return it
  if (isObject(className)) {
    return className as ClassMap;
  }

  // if none of the above, throw an error
  throw new Error(`Unexpected input: ${className}`);
}

// takes any input and normalizes it to a class name string
export const normalizeClassName = (className: any): string => {
  // if className is a string, return it
  if (isString(className)) {
    return className;
  }

  // if className is a number, return it as a string
  if (isArray(className)) {
    return className.map(normalizeClassName).filter(Boolean).join(' ');
  }

  // if className is an array, map over it and call normalizeClassName again, then filter and join the results
  if (isObject(className)) {
    return Object.keys(className).filter((key: string) => (className as ClassMap)[key]).join(' ');
  }

  // if none of the above, return an empty string
  return '';
}

// classNames is a function that takes any number of arguments and returns a string
export const classNames = (...classes: any[]): string => {
  // reduce the arguments to a single string
  const classNames = normalizeClassName(classes.reduce((prevClassMap, nextClassMap) => {
    // call toClassName on each argument
    const newClassMap = toClassMap(nextClassMap);
    // merge the new class map with the previous class map
    return { ...prevClassMap, ...newClassMap }
  }, {}));

  // return the classNames
  return classNames;
}
