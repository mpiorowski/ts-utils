/**
 * Filter the array of objects by the given search term.
 * @param {T[]} data The array of objects to filter.
 * @param {string} search The search term.
 * @param {(keyof T)[]} params The fields to search.
 * @returns {T[]} The filtered array of objects.
 */
export const searchArray = <T extends Record<string, unknown>>(
  data: T[],
  search: string,
  params: (keyof T)[]
): T[] => {
  return (
    data.filter((el) => {
      if (!search) {
        return true;
      }
      return params.some((param) => {
        const t = el[param];
        if (
          t &&
          (typeof t === 'string' ||
            typeof t === 'number' ||
            typeof t === 'boolean' ||
            t instanceof Date) &&
          t.toString().toLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    }) || []
  );
};
