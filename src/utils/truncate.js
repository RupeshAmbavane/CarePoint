export const truncate = (str, max) => {
    const s = String(str || ""); // force convert to string
    return s.length > max ? s.substring(0, max - 1) + "..." : s;
  };
  