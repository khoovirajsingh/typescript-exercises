function isLeapYear(year: number) {
    const divisibleBy = (n: number) => year % n === 0;
    return (divisibleBy(4) && !divisibleBy(100)) || divisibleBy(400);
}

export default isLeapYear
