let Base = null;

export const Postdetails = (data) => {
  Base = data;
};

export const Getdetails = () => {
  return Base;
};

export const Erasedetails = () => {
  Base = null;
};

console.log("database", Base);
