export const Pr = {
  /**
   * 
   * @param {number} s - Seed value. 
   * @returns {number} A random number.
   */
  ng: s => (t) => (
    s = s + 1831565813 | 0,
    t = Math.imul(s ^ s >>> 15, 1 | s),
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t,
    (t ^ t >>> 14) >>> 0
  ) / 2 ** 32
};
