interface TimeDifference {
  years: number;
  months: number;
  weeks: number;
  days: number;
}

export const calculateTimeSince = (
  startDate: string,
): TimeDifference => {
  // Create Date objects for the provided start and end dates
  const start = new Date(startDate);
  const end = new Date();

  // Calculate the difference in years
  let years = end.getFullYear() - start.getFullYear();

  // Calculate the difference in months
  let months = end.getMonth() - start.getMonth();

  // If the month difference is negative, subtract one year and adjust months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Calculate the difference in days
  let days = end.getDate() - start.getDate();

  // If the day difference is negative, adjust the month difference
  if (days < 0) {
    // Subtract one month and calculate the number of days in the previous month
    months--;
    if (months < 0) {
      months = 11;
      years--;
    }

    const previousMonth = new Date(end.getFullYear(), end.getMonth() - 1, 1);
    const previousMonthDays = new Date(
      previousMonth.getFullYear(),
      previousMonth.getMonth() + 1,
      0
    ).getDate();
    days += previousMonthDays;
  }

  // Calculate weeks and remaining days
  const oneWeek = 7;
  const totalDays = (end.getTime() - start.getTime()) / (1000 * 3600 * 24); // Convert milliseconds to days
  const weeks = Math.floor(totalDays / oneWeek);
  const remainingDays = Math.floor(totalDays % oneWeek);

  return {
    years: years,
    months: months,
    weeks: weeks,
    days: remainingDays,
  };
};
