const getFullClass = (base, suffix, condition) =>
  `${base}${condition ? suffix : ""}`;

export default getFullClass;
