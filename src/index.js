function Cubic() {
  /**
   * getCubicBezierXYatPercent
   * @param {Point} startPt 
   * @param {Point} controlPt1 
   * @param {Point} controlPt2 
   * @param {Point} endPt 
   * @param {Float} percent 
   */
  function getCubicBezierXYatPercent(startPt, controlPt1, controlPt2, endPt, percent) {
    const x = CubicN(percent, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
    const y = CubicN(percent, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
    return ({
      x,
      y
    });
  }
  /**
   * CubicN for a coordinate
   * @param {Float} percent
   * @param {*} p1
   * @param {*} cp1
   * @param {*} p2
   * @param {*} cp2
   */
  function CubicN(pct, a, b, c, d) {
    const t2 = pct * pct;
    const t3 = t2 * pct;
    return a +
      (-a * 3 + pct * (3 * a - a * pct)) * pct +
      (3 * b + pct * (-6 * b + b * 3 * pct)) * pct +
      (c * 3 - c * 3 * pct) * t2 + d * t3;
  }
  /**
   * getQuadraticBezierXYatPercent
   * @param {Point} startPt
   * @param {Point} controlPt
   * @param {Point} endPt
   * @param {Float} percent
   */
  function getQuadraticBezierXYatPercent(startPt, controlPt, endPt, percent) {
    const x = (1 - percent * percent) * startPt.x + 2 *
                (1 - percent) * percent * controlPt.x
                + (percent * percent) * endPt.x;
    const y = (1 - percent * percent) * startPt.y + 2 *
                (1 - percent) * percent * controlPt.y +
                (percent * percent) * endPt.y;
    return ({
      x,
      y
    });
  }

  return {
    getCubicBezierXYatPercent,
    getQuadraticBezierXYatPercent
  }
}

const cubic = Cubic();
export default cubic;