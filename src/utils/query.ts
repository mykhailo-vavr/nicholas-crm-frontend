export const createQueryString = (query: Record<string, string | number>) => {
  const params = new URLSearchParams(window.location.search);

  Object.entries(query).forEach(([key, value]) => {
    if (value) {
      params.set(key, String(value));
    } else {
      params.delete(key);
    }
  });

  return params.toString();
};
