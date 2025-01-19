
function parseRange(inputStr) {
  const result = [];

  inputStr.split(',').forEach((part) => {
    part = part.trim();

    if (part.includes('-')) {
      const [start, end] = part.split('-').map(Number);
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
    } else {
      result.push(Number(part));
    }
  });

  return result;
}