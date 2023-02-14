interface DateRange {
  from: Date;
  to: Date;
}

interface Date {
  year: number;
  month: number;
  day: number;
}

export const standardDateFormat = (date: DateRange) => {
  const startDate = `${date.from.year}.${date.from.month}.${date.from.day}`;
  const endDate = `${date.to.year}.${date.to.month}.${date.to.day}`;
  return { startDate: startDate, endDate: endDate };
};

export const todayDate = () => {
  return {
    from: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    },
    to: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    },
  };
};
