export const zipWith = <X, Y, R>(fn: (x: X, y: Y) => R, xs: X[], ys: Y[]) => {
  const lowerLength = xs.length < ys.length ? xs.length : ys.length;
  const result = [];

  for (let i = 0; i < lowerLength; i++) {
    result.push(fn(xs[i], ys[i]));
  }

  return result;
};
