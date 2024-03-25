export const generatePaginationNumbers = (
  currentPage: number,
  totalPages: number
) => {
  // Si el total de páginas es menor o igual a 7, entonces se muestran todas las páginas

  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Si la pagina actual está entre las primeras 3 páginas, mostrar las primeras 3 paginas, puntos suspensivos, y las ultimas 2 páginas
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // Si la pagina actual está entre las ultimas 3 páginas, mostrar las primeras 2 páginas, puntos suspensivos, y las ultimas 3 páginas
  if (currentPage > totalPages - 3) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // Si la pagina actual está entre las páginas intermedias, mostrar las primeras 2 páginas, puntos suspensivos, la pagina actual, puntos suspensivos, y las ultimas 2 páginas
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
