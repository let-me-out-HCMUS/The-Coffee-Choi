export const formatCurrency = (value) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    value
  );

export const datediff = (first, second) => {
  return 1 + Math.round((second - first) / (1000 * 60 * 60 * 24));
};
