export const paginate = (limit?: number, offset?: number): string => {
  if (limit && offset) {
    return `?limit=${limit}&offset=${offset}`;
  }

  if (limit) {
    return `?limit=${limit}`;
  }

  if (offset) {
    return `?offset=${offset}`;
  }

  return "";
};
