/**
 * @param {Date} date
 * @returns
 */
 export const formatDate = (date) => {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
  };

  /**
   * @param {Date} date 
   * @param {number} days 
   * @returns 
   */
  export const getDateMinusDay = (date, days) => {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
  };