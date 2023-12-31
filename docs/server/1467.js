"use strict";
exports.id = 1467;
exports.ids = [1467];
exports.modules = {

/***/ 55133:
/*!************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/data-b8307d99.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getDayColumnData),
/* harmony export */   B: () => (/* binding */ getYearColumnData),
/* harmony export */   C: () => (/* binding */ isMonthFirstLocale),
/* harmony export */   D: () => (/* binding */ getTimeColumnsData),
/* harmony export */   E: () => (/* binding */ isLocaleDayPeriodRTL),
/* harmony export */   F: () => (/* binding */ getDaysOfWeek),
/* harmony export */   G: () => (/* binding */ getMonthAndYear),
/* harmony export */   H: () => (/* binding */ getDaysOfMonth),
/* harmony export */   I: () => (/* binding */ generateMonths),
/* harmony export */   J: () => (/* binding */ is24Hour),
/* harmony export */   K: () => (/* binding */ getLocalizedTime),
/* harmony export */   L: () => (/* binding */ getMonthAndDay),
/* harmony export */   M: () => (/* binding */ formatValue),
/* harmony export */   N: () => (/* binding */ getNextYear),
/* harmony export */   O: () => (/* binding */ getPreviousYear),
/* harmony export */   P: () => (/* binding */ clampDate),
/* harmony export */   Q: () => (/* binding */ parseAmPm),
/* harmony export */   R: () => (/* binding */ calculateHourFromAMPM),
/* harmony export */   S: () => (/* binding */ getLocalizedDateTime),
/* harmony export */   T: () => (/* binding */ getMonthDayAndYear),
/* harmony export */   a: () => (/* binding */ getDay),
/* harmony export */   b: () => (/* binding */ isAfter),
/* harmony export */   c: () => (/* binding */ isSameDay),
/* harmony export */   d: () => (/* binding */ getPreviousMonth),
/* harmony export */   e: () => (/* binding */ getNextMonth),
/* harmony export */   f: () => (/* binding */ getPartsFromCalendarDay),
/* harmony export */   g: () => (/* binding */ generateDayAriaLabel),
/* harmony export */   h: () => (/* binding */ getEndOfWeek),
/* harmony export */   i: () => (/* binding */ isBefore),
/* harmony export */   j: () => (/* binding */ getStartOfWeek),
/* harmony export */   k: () => (/* binding */ getPreviousDay),
/* harmony export */   l: () => (/* binding */ getNextDay),
/* harmony export */   m: () => (/* binding */ getPreviousWeek),
/* harmony export */   n: () => (/* binding */ getNextWeek),
/* harmony export */   o: () => (/* binding */ parseMaxParts),
/* harmony export */   p: () => (/* binding */ parseMinParts),
/* harmony export */   q: () => (/* binding */ parseDate),
/* harmony export */   r: () => (/* binding */ convertToArrayOfNumbers),
/* harmony export */   s: () => (/* binding */ convertDataToISO),
/* harmony export */   t: () => (/* binding */ getToday),
/* harmony export */   u: () => (/* binding */ getClosestValidDate),
/* harmony export */   v: () => (/* binding */ validateParts),
/* harmony export */   w: () => (/* binding */ warnIfValueOutOfBounds),
/* harmony export */   x: () => (/* binding */ getNumDaysInMonth),
/* harmony export */   y: () => (/* binding */ getCombinedDateColumnData),
/* harmony export */   z: () => (/* binding */ getMonthColumnData)
/* harmony export */ });
/* harmony import */ var _index_e86f0117_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e86f0117.js */ 99614);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


/**
 * Returns true if the selected day is equal to the reference day
 */
const isSameDay = (baseParts, compareParts) => {
  return baseParts.month === compareParts.month && baseParts.day === compareParts.day && baseParts.year === compareParts.year;
};
/**
 * Returns true is the selected day is before the reference day.
 */
const isBefore = (baseParts, compareParts) => {
  return !!(baseParts.year < compareParts.year || baseParts.year === compareParts.year && baseParts.month < compareParts.month || baseParts.year === compareParts.year && baseParts.month === compareParts.month && baseParts.day !== null && baseParts.day < compareParts.day);
};
/**
 * Returns true is the selected day is after the reference day.
 */
const isAfter = (baseParts, compareParts) => {
  return !!(baseParts.year > compareParts.year || baseParts.year === compareParts.year && baseParts.month > compareParts.month || baseParts.year === compareParts.year && baseParts.month === compareParts.month && baseParts.day !== null && baseParts.day > compareParts.day);
};
const warnIfValueOutOfBounds = (value, min, max) => {
  const valueArray = Array.isArray(value) ? value : [value];
  for (const val of valueArray) {
    if (min !== undefined && isBefore(val, min) || max !== undefined && isAfter(val, max)) {
      (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_0__.p)('The value provided to ion-datetime is out of bounds.\n\n' + `Min: ${JSON.stringify(min)}\n` + `Max: ${JSON.stringify(max)}\n` + `Value: ${JSON.stringify(value)}`);
      break;
    }
  }
};

/**
 * Determines if given year is a
 * leap year. Returns `true` if year
 * is a leap year. Returns `false`
 * otherwise.
 */
const isLeapYear = year => {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};
const is24Hour = (locale, hourCycle) => {
  /**
   * If developer has explicitly enabled h23 time
   * then return early and do not look at the system default.
   */
  if (hourCycle !== undefined) {
    return hourCycle === 'h23';
  }
  /**
   * If hourCycle was not specified, check the locale
   * that is set on the user's device. We first check the
   * Intl.DateTimeFormat hourCycle option as developers can encode this
   * option into the locale string. Example: `en-US-u-hc-h23`
   */
  const formatted = new Intl.DateTimeFormat(locale, {
    hour: 'numeric'
  });
  const options = formatted.resolvedOptions();
  if (options.hourCycle !== undefined) {
    return options.hourCycle === 'h23';
  }
  /**
   * If hourCycle is not specified (either through lack
   * of browser support or locale information) then fall
   * back to this slower hourCycle check.
   */
  const date = new Date('5/18/2021 00:00');
  const parts = formatted.formatToParts(date);
  const hour = parts.find(p => p.type === 'hour');
  if (!hour) {
    throw new Error('Hour value not found from DateTimeFormat');
  }
  return hour.value === '00';
};
/**
 * Given a date object, returns the number
 * of days in that month.
 * Month value begin at 1, not 0.
 * i.e. January = month 1.
 */
const getNumDaysInMonth = (month, year) => {
  return month === 4 || month === 6 || month === 9 || month === 11 ? 30 : month === 2 ? isLeapYear(year) ? 29 : 28 : 31;
};
/**
 * Certain locales display month then year while
 * others display year then month.
 * We can use Intl.DateTimeFormat to determine
 * the ordering for each locale.
 * The formatOptions param can be used to customize
 * which pieces of a date to compare against the month
 * with. For example, some locales render dd/mm/yyyy
 * while others render mm/dd/yyyy. This function can be
 * used for variations of the same "month first" check.
 */
const isMonthFirstLocale = (locale, formatOptions = {
  month: 'numeric',
  year: 'numeric'
}) => {
  /**
   * By setting month and year we guarantee that only
   * month, year, and literal (slashes '/', for example)
   * values are included in the formatToParts results.
   *
   * The ordering of the parts will be determined by
   * the locale. So if the month is the first value,
   * then we know month should be shown first. If the
   * year is the first value, then we know year should be shown first.
   *
   * This ordering can be controlled by customizing the locale property.
   */
  const parts = new Intl.DateTimeFormat(locale, formatOptions).formatToParts(new Date());
  return parts[0].type === 'month';
};
/**
 * Determines if the given locale formats the day period (am/pm) to the
 * left or right of the hour.
 * @param locale The locale to check.
 * @returns `true` if the locale formats the day period to the left of the hour.
 */
const isLocaleDayPeriodRTL = locale => {
  const parts = new Intl.DateTimeFormat(locale, {
    hour: 'numeric'
  }).formatToParts(new Date());
  return parts[0].type === 'dayPeriod';
};
const ISO_8601_REGEXP =
// eslint-disable-next-line no-useless-escape
/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
// eslint-disable-next-line no-useless-escape
const TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
/**
 * Use to convert a string of comma separated numbers or
 * an array of numbers, and clean up any user input
 */
const convertToArrayOfNumbers = input => {
  if (input === undefined) {
    return;
  }
  let processedInput = input;
  if (typeof input === 'string') {
    // convert the string to an array of strings
    // auto remove any whitespace and [] characters
    processedInput = input.replace(/\[|\]|\s/g, '').split(',');
  }
  let values;
  if (Array.isArray(processedInput)) {
    // ensure each value is an actual number in the returned array
    values = processedInput.map(num => parseInt(num, 10)).filter(isFinite);
  } else {
    values = [processedInput];
  }
  return values;
};
/**
 * Extracts date information
 * from a .calendar-day element
 * into DatetimeParts.
 */
const getPartsFromCalendarDay = el => {
  return {
    month: parseInt(el.getAttribute('data-month'), 10),
    day: parseInt(el.getAttribute('data-day'), 10),
    year: parseInt(el.getAttribute('data-year'), 10),
    dayOfWeek: parseInt(el.getAttribute('data-day-of-week'), 10)
  };
};
function parseDate(val) {
  if (Array.isArray(val)) {
    return val.map(valStr => parseDate(valStr));
  }
  // manually parse IS0 cuz Date.parse cannot be trusted
  // ISO 8601 format: 1994-12-15T13:47:20Z
  let parse = null;
  if (val != null && val !== '') {
    // try parsing for just time first, HH:MM
    parse = TIME_REGEXP.exec(val);
    if (parse) {
      // adjust the array so it fits nicely with the datetime parse
      parse.unshift(undefined, undefined);
      parse[2] = parse[3] = undefined;
    } else {
      // try parsing for full ISO datetime
      parse = ISO_8601_REGEXP.exec(val);
    }
  }
  if (parse === null) {
    // wasn't able to parse the ISO datetime
    return undefined;
  }
  // ensure all the parse values exist with at least 0
  for (let i = 1; i < 8; i++) {
    parse[i] = parse[i] !== undefined ? parseInt(parse[i], 10) : undefined;
  }
  // can also get second and millisecond from parse[6] and parse[7] if needed
  return {
    year: parse[1],
    month: parse[2],
    day: parse[3],
    hour: parse[4],
    minute: parse[5],
    ampm: parse[4] < 12 ? 'am' : 'pm'
  };
}
const clampDate = (dateParts, minParts, maxParts) => {
  if (minParts && isBefore(dateParts, minParts)) {
    return minParts;
  } else if (maxParts && isAfter(dateParts, maxParts)) {
    return maxParts;
  }
  return dateParts;
};
/**
 * Parses an hour and returns if the value is in the morning (am) or afternoon (pm).
 * @param hour The hour to format, should be 0-23
 * @returns `pm` if the hour is greater than or equal to 12, `am` if less than 12.
 */
const parseAmPm = hour => {
  return hour >= 12 ? 'pm' : 'am';
};
/**
 * Takes a max date string and creates a DatetimeParts
 * object, filling in any missing information.
 * For example, max="2012" would fill in the missing
 * month, day, hour, and minute information.
 */
const parseMaxParts = (max, todayParts) => {
  const {
    month,
    day,
    year,
    hour,
    minute
  } = parseDate(max);
  /**
   * When passing in `max` or `min`, developers
   * can pass in any ISO-8601 string. This means
   * that not all of the date/time fields are defined.
   * For example, passing max="2012" is valid even though
   * there is no month, day, hour, or minute data.
   * However, all of this data is required when clamping the date
   * so that the correct initial value can be selected. As a result,
   * we need to fill in any omitted data with the min or max values.
   */
  const yearValue = year !== null && year !== void 0 ? year : todayParts.year;
  const monthValue = month !== null && month !== void 0 ? month : 12;
  return {
    month: monthValue,
    day: day !== null && day !== void 0 ? day : getNumDaysInMonth(monthValue, yearValue),
    /**
     * Passing in "HH:mm" is a valid ISO-8601
     * string, so we just default to the current year
     * in this case.
     */
    year: yearValue,
    hour: hour !== null && hour !== void 0 ? hour : 23,
    minute: minute !== null && minute !== void 0 ? minute : 59
  };
};
/**
 * Takes a min date string and creates a DatetimeParts
 * object, filling in any missing information.
 * For example, min="2012" would fill in the missing
 * month, day, hour, and minute information.
 */
const parseMinParts = (min, todayParts) => {
  const {
    month,
    day,
    year,
    hour,
    minute
  } = parseDate(min);
  /**
   * When passing in `max` or `min`, developers
   * can pass in any ISO-8601 string. This means
   * that not all of the date/time fields are defined.
   * For example, passing max="2012" is valid even though
   * there is no month, day, hour, or minute data.
   * However, all of this data is required when clamping the date
   * so that the correct initial value can be selected. As a result,
   * we need to fill in any omitted data with the min or max values.
   */
  return {
    month: month !== null && month !== void 0 ? month : 1,
    day: day !== null && day !== void 0 ? day : 1,
    /**
     * Passing in "HH:mm" is a valid ISO-8601
     * string, so we just default to the current year
     * in this case.
     */
    year: year !== null && year !== void 0 ? year : todayParts.year,
    hour: hour !== null && hour !== void 0 ? hour : 0,
    minute: minute !== null && minute !== void 0 ? minute : 0
  };
};
const twoDigit = val => {
  return ('0' + (val !== undefined ? Math.abs(val) : '0')).slice(-2);
};
const fourDigit = val => {
  return ('000' + (val !== undefined ? Math.abs(val) : '0')).slice(-4);
};
function convertDataToISO(data) {
  if (Array.isArray(data)) {
    return data.map(parts => convertDataToISO(parts));
  }
  // https://www.w3.org/TR/NOTE-datetime
  let rtn = '';
  if (data.year !== undefined) {
    // YYYY
    rtn = fourDigit(data.year);
    if (data.month !== undefined) {
      // YYYY-MM
      rtn += '-' + twoDigit(data.month);
      if (data.day !== undefined) {
        // YYYY-MM-DD
        rtn += '-' + twoDigit(data.day);
        if (data.hour !== undefined) {
          // YYYY-MM-DDTHH:mm:SS
          rtn += `T${twoDigit(data.hour)}:${twoDigit(data.minute)}:00`;
        }
      }
    }
  } else if (data.hour !== undefined) {
    // HH:mm
    rtn = twoDigit(data.hour) + ':' + twoDigit(data.minute);
  }
  return rtn;
}
/**
 * Converts an 12 hour value to 24 hours.
 */
const convert12HourTo24Hour = (hour, ampm) => {
  if (ampm === undefined) {
    return hour;
  }
  /**
   * If AM and 12am
   * then return 00:00.
   * Otherwise just return
   * the hour since it is
   * already in 24 hour format.
   */
  if (ampm === 'am') {
    if (hour === 12) {
      return 0;
    }
    return hour;
  }
  /**
   * If PM and 12pm
   * just return 12:00
   * since it is already
   * in 24 hour format.
   * Otherwise add 12 hours
   * to the time.
   */
  if (hour === 12) {
    return 12;
  }
  return hour + 12;
};
const getStartOfWeek = refParts => {
  const {
    dayOfWeek
  } = refParts;
  if (dayOfWeek === null || dayOfWeek === undefined) {
    throw new Error('No day of week provided');
  }
  return subtractDays(refParts, dayOfWeek);
};
const getEndOfWeek = refParts => {
  const {
    dayOfWeek
  } = refParts;
  if (dayOfWeek === null || dayOfWeek === undefined) {
    throw new Error('No day of week provided');
  }
  return addDays(refParts, 6 - dayOfWeek);
};
const getNextDay = refParts => {
  return addDays(refParts, 1);
};
const getPreviousDay = refParts => {
  return subtractDays(refParts, 1);
};
const getPreviousWeek = refParts => {
  return subtractDays(refParts, 7);
};
const getNextWeek = refParts => {
  return addDays(refParts, 7);
};
/**
 * Given datetime parts, subtract
 * numDays from the date.
 * Returns a new DatetimeParts object
 * Currently can only go backward at most 1 month.
 */
const subtractDays = (refParts, numDays) => {
  const {
    month,
    day,
    year
  } = refParts;
  if (day === null) {
    throw new Error('No day provided');
  }
  const workingParts = {
    month,
    day,
    year
  };
  workingParts.day = day - numDays;
  /**
   * If wrapping to previous month
   * update days and decrement month
   */
  if (workingParts.day < 1) {
    workingParts.month -= 1;
  }
  /**
   * If moving to previous year, reset
   * month to December and decrement year
   */
  if (workingParts.month < 1) {
    workingParts.month = 12;
    workingParts.year -= 1;
  }
  /**
   * Determine how many days are in the current
   * month
   */
  if (workingParts.day < 1) {
    const daysInMonth = getNumDaysInMonth(workingParts.month, workingParts.year);
    /**
     * Take num days in month and add the
     * number of underflow days. This number will
     * be negative.
     * Example: 1 week before Jan 2, 2021 is
     * December 26, 2021 so:
     * 2 - 7 = -5
     * 31 + (-5) = 26
     */
    workingParts.day = daysInMonth + workingParts.day;
  }
  return workingParts;
};
/**
 * Given datetime parts, add
 * numDays to the date.
 * Returns a new DatetimeParts object
 * Currently can only go forward at most 1 month.
 */
const addDays = (refParts, numDays) => {
  const {
    month,
    day,
    year
  } = refParts;
  if (day === null) {
    throw new Error('No day provided');
  }
  const workingParts = {
    month,
    day,
    year
  };
  const daysInMonth = getNumDaysInMonth(month, year);
  workingParts.day = day + numDays;
  /**
   * If wrapping to next month
   * update days and increment month
   */
  if (workingParts.day > daysInMonth) {
    workingParts.day -= daysInMonth;
    workingParts.month += 1;
  }
  /**
   * If moving to next year, reset
   * month to January and increment year
   */
  if (workingParts.month > 12) {
    workingParts.month = 1;
    workingParts.year += 1;
  }
  return workingParts;
};
/**
 * Given DatetimeParts, generate the previous month.
 */
const getPreviousMonth = refParts => {
  /**
   * If current month is January, wrap backwards
   *  to December of the previous year.
   */
  const month = refParts.month === 1 ? 12 : refParts.month - 1;
  const year = refParts.month === 1 ? refParts.year - 1 : refParts.year;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return {
    month,
    year,
    day
  };
};
/**
 * Given DatetimeParts, generate the next month.
 */
const getNextMonth = refParts => {
  /**
   * If current month is December, wrap forwards
   *  to January of the next year.
   */
  const month = refParts.month === 12 ? 1 : refParts.month + 1;
  const year = refParts.month === 12 ? refParts.year + 1 : refParts.year;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return {
    month,
    year,
    day
  };
};
const changeYear = (refParts, yearDelta) => {
  const month = refParts.month;
  const year = refParts.year + yearDelta;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return {
    month,
    year,
    day
  };
};
/**
 * Given DatetimeParts, generate the previous year.
 */
const getPreviousYear = refParts => {
  return changeYear(refParts, -1);
};
/**
 * Given DatetimeParts, generate the next year.
 */
const getNextYear = refParts => {
  return changeYear(refParts, 1);
};
/**
 * If PM, then internal value should
 * be converted to 24-hr time.
 * Does not apply when public
 * values are already 24-hr time.
 */
const getInternalHourValue = (hour, use24Hour, ampm) => {
  if (use24Hour) {
    return hour;
  }
  return convert12HourTo24Hour(hour, ampm);
};
/**
 * Unless otherwise stated, all month values are
 * 1 indexed instead of the typical 0 index in JS Date.
 * Example:
 *   January = Month 0 when using JS Date
 *   January = Month 1 when using this datetime util
 */
/**
 * Given the current datetime parts and a new AM/PM value
 * calculate what the hour should be in 24-hour time format.
 * Used when toggling the AM/PM segment since we store our hours
 * in 24-hour time format internally.
 */
const calculateHourFromAMPM = (currentParts, newAMPM) => {
  const {
    ampm: currentAMPM,
    hour
  } = currentParts;
  let newHour = hour;
  /**
   * If going from AM --> PM, need to update the
   *
   */
  if (currentAMPM === 'am' && newAMPM === 'pm') {
    newHour = convert12HourTo24Hour(newHour, 'pm');
    /**
     * If going from PM --> AM
     */
  } else if (currentAMPM === 'pm' && newAMPM === 'am') {
    newHour = Math.abs(newHour - 12);
  }
  return newHour;
};
/**
 * Updates parts to ensure that month and day
 * values are valid. For days that do not exist,
 * or are outside the min/max bounds, the closest
 * valid day is used.
 */
const validateParts = (parts, minParts, maxParts) => {
  const {
    month,
    day,
    year
  } = parts;
  const partsCopy = clampDate(Object.assign({}, parts), minParts, maxParts);
  const numDays = getNumDaysInMonth(month, year);
  /**
   * If the max number of days
   * is greater than the day we want
   * to set, update the DatetimeParts
   * day field to be the max days.
   */
  if (day !== null && numDays < day) {
    partsCopy.day = numDays;
  }
  /**
   * If value is same day as min day,
   * make sure the time value is in bounds.
   */
  if (minParts !== undefined && isSameDay(partsCopy, minParts)) {
    /**
     * If the hour is out of bounds,
     * update both the hour and minute.
     * This is done so that the new time
     * is closest to what the user selected.
     */
    if (partsCopy.hour !== undefined && minParts.hour !== undefined) {
      if (partsCopy.hour < minParts.hour) {
        partsCopy.hour = minParts.hour;
        partsCopy.minute = minParts.minute;
        /**
         * If only the minute is out of bounds,
         * set it to the min minute.
         */
      } else if (partsCopy.hour === minParts.hour && partsCopy.minute !== undefined && minParts.minute !== undefined && partsCopy.minute < minParts.minute) {
        partsCopy.minute = minParts.minute;
      }
    }
  }
  /**
   * If value is same day as max day,
   * make sure the time value is in bounds.
   */
  if (maxParts !== undefined && isSameDay(parts, maxParts)) {
    /**
     * If the hour is out of bounds,
     * update both the hour and minute.
     * This is done so that the new time
     * is closest to what the user selected.
     */
    if (partsCopy.hour !== undefined && maxParts.hour !== undefined) {
      if (partsCopy.hour > maxParts.hour) {
        partsCopy.hour = maxParts.hour;
        partsCopy.minute = maxParts.minute;
        /**
         * If only the minute is out of bounds,
         * set it to the max minute.
         */
      } else if (partsCopy.hour === maxParts.hour && partsCopy.minute !== undefined && maxParts.minute !== undefined && partsCopy.minute > maxParts.minute) {
        partsCopy.minute = maxParts.minute;
      }
    }
  }
  return partsCopy;
};
/**
 * Returns the closest date to refParts
 * that also meets the constraints of
 * the *Values params.
 * @param refParts The reference date
 * @param monthValues The allowed month values
 * @param dayValues The allowed day (of the month) values
 * @param yearValues The allowed year values
 * @param hourValues The allowed hour values
 * @param minuteValues The allowed minute values
 */
const getClosestValidDate = (refParts, monthValues, dayValues, yearValues, hourValues, minuteValues) => {
  const {
    hour,
    minute,
    day,
    month,
    year
  } = refParts;
  const copyParts = Object.assign(Object.assign({}, refParts), {
    dayOfWeek: undefined
  });
  if (monthValues !== undefined) {
    copyParts.month = findClosestValue(month, monthValues);
  }
  // Day is nullable but cannot be undefined
  if (day !== null && dayValues !== undefined) {
    copyParts.day = findClosestValue(day, dayValues);
  }
  if (yearValues !== undefined) {
    copyParts.year = findClosestValue(year, yearValues);
  }
  if (hour !== undefined && hourValues !== undefined) {
    copyParts.hour = findClosestValue(hour, hourValues);
    copyParts.ampm = parseAmPm(copyParts.hour);
  }
  if (minute !== undefined && minuteValues !== undefined) {
    copyParts.minute = findClosestValue(minute, minuteValues);
  }
  return copyParts;
};
/**
 * Finds the value in "values" that is
 * numerically closest to "reference".
 * This function assumes that "values" is
 * already sorted in ascending order.
 * @param reference The reference number to use
 * when finding the closest value
 * @param values The allowed values that will be
 * searched to find the closest value to "reference"
 */
const findClosestValue = (reference, values) => {
  let closestValue = values[0];
  let rank = Math.abs(closestValue - reference);
  for (let i = 1; i < values.length; i++) {
    const value = values[i];
    /**
     * This code prioritizes the first
     * closest result. Given two values
     * with the same distance from reference,
     * this code will prioritize the smaller of
     * the two values.
     */
    const valueRank = Math.abs(value - reference);
    if (valueRank < rank) {
      closestValue = value;
      rank = valueRank;
    }
  }
  return closestValue;
};
const getFormattedDayPeriod = dayPeriod => {
  if (dayPeriod === undefined) {
    return '';
  }
  return dayPeriod.toUpperCase();
};
const getLocalizedTime = (locale, refParts, use24Hour) => {
  const timeParts = {
    hour: refParts.hour,
    minute: refParts.minute
  };
  if (timeParts.hour === undefined || timeParts.minute === undefined) {
    return 'Invalid Time';
  }
  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
    /**
     * Setting the timeZone to UTC prevents
     * new Intl.DatetimeFormat from subtracting
     * the user's current timezone offset
     * when formatting the time.
     */
    timeZone: 'UTC',
    /**
     * We use hourCycle here instead of hour12 due to:
     * https://bugs.chromium.org/p/chromium/issues/detail?id=1347316&q=hour12&can=2
     */
    hourCycle: use24Hour ? 'h23' : 'h12'
    /**
     * Setting Z at the end indicates that this
     * date string is in the UTC time zone. This
     * prevents new Date from adding the time zone
     * offset when getting the ISO string.
     */
  }).format(new Date(convertDataToISO(Object.assign({
    /**
     * JS uses a simplified ISO 8601 format which allows for
     * date-only formats and date-time formats, but not
     * time-only formats: https://tc39.es/ecma262/#sec-date-time-string-format
     * As a result, developers who only pass a time will get
     * an "Invalid Date" error. To account for this, we make sure that
     * year/day/month values are set when passing to new Date().
     * The Intl.DateTimeFormat call above only uses the hour/minute
     * values, so passing these date values should have no impact
     * on the time output.
     */
    year: 2023,
    day: 1,
    month: 1
  }, timeParts)) + 'Z'));
};
/**
 * Adds padding to a time value so
 * that it is always 2 digits.
 */
const addTimePadding = value => {
  const valueToString = value.toString();
  if (valueToString.length > 1) {
    return valueToString;
  }
  return `0${valueToString}`;
};
/**
 * Formats 24 hour times so that
 * it always has 2 digits. For
 * 12 hour times it ensures that
 * hour 0 is formatted as '12'.
 */
const getFormattedHour = (hour, use24Hour) => {
  if (use24Hour) {
    return addTimePadding(hour);
  }
  /**
   * If using 12 hour
   * format, make sure hour
   * 0 is formatted as '12'.
   */
  if (hour === 0) {
    return '12';
  }
  return hour.toString();
};
/**
 * Generates an aria-label to be read by screen readers
 * given a local, a date, and whether or not that date is
 * today's date.
 */
const generateDayAriaLabel = (locale, today, refParts) => {
  if (refParts.day === null) {
    return null;
  }
  /**
   * MM/DD/YYYY will return midnight in the user's timezone.
   */
  const date = new Date(`${refParts.month}/${refParts.day}/${refParts.year} GMT+0000`);
  const labelString = new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(date);
  /**
   * If date is today, prepend "Today" so screen readers indicate
   * that the date is today.
   */
  return today ? `Today, ${labelString}` : labelString;
};
/**
 * Gets the day of the week, month, and day
 * Used for the header in MD mode.
 */
const getMonthAndDay = (locale, refParts) => {
  const date = new Date(`${refParts.month}/${refParts.day}/${refParts.year} GMT+0000`);
  return new Intl.DateTimeFormat(locale, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(date);
};
/**
 * Given a locale and a date object,
 * return a formatted string that includes
 * the month name and full year.
 * Example: May 2021
 */
const getMonthAndYear = (locale, refParts) => {
  const date = new Date(`${refParts.month}/${refParts.day}/${refParts.year} GMT+0000`);
  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(date);
};
/**
 * Given a locale and a date object,
 * return a formatted string that includes
 * the short month, numeric day, and full year.
 * Example: Apr 22, 2021
 */
const getMonthDayAndYear = (locale, refParts) => {
  return getLocalizedDateTime(locale, refParts, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};
/**
 * Given a locale and a date object,
 * return a formatted string that includes
 * the numeric day.
 * Note: Some languages will add literal characters
 * to the end. This function removes those literals.
 * Example: 29
 */
const getDay = (locale, refParts) => {
  return getLocalizedDateTimeParts(locale, refParts, {
    day: 'numeric'
  }).find(obj => obj.type === 'day').value;
};
/**
 * Given a locale and a date object,
 * return a formatted string that includes
 * the numeric year.
 * Example: 2022
 */
const getYear = (locale, refParts) => {
  return getLocalizedDateTime(locale, refParts, {
    year: 'numeric'
  });
};
const getNormalizedDate = refParts => {
  const timeString = refParts.hour !== undefined && refParts.minute !== undefined ? ` ${refParts.hour}:${refParts.minute}` : '';
  return new Date(`${refParts.month}/${refParts.day}/${refParts.year}${timeString} GMT+0000`);
};
/**
 * Given a locale, DatetimeParts, and options
 * format the DatetimeParts according to the options
 * and locale combination. This returns a string. If
 * you want an array of the individual pieces
 * that make up the localized date string, use
 * getLocalizedDateTimeParts.
 */
const getLocalizedDateTime = (locale, refParts, options) => {
  const date = getNormalizedDate(refParts);
  return getDateTimeFormat(locale, options).format(date);
};
/**
 * Given a locale, DatetimeParts, and options
 * format the DatetimeParts according to the options
 * and locale combination. This returns an array of
 * each piece of the date.
 */
const getLocalizedDateTimeParts = (locale, refParts, options) => {
  const date = getNormalizedDate(refParts);
  return getDateTimeFormat(locale, options).formatToParts(date);
};
/**
 * Wrapper function for Intl.DateTimeFormat.
 * Allows developers to apply an allowed format to DatetimeParts.
 * This function also has built in safeguards for older browser bugs
 * with Intl.DateTimeFormat.
 */
const getDateTimeFormat = (locale, options) => {
  return new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, options), {
    timeZone: 'UTC'
  }));
};
/**
 * Gets a localized version of "Today"
 * Falls back to "Today" in English for
 * browsers that do not support RelativeTimeFormat.
 */
const getTodayLabel = locale => {
  if ('RelativeTimeFormat' in Intl) {
    const label = new Intl.RelativeTimeFormat(locale, {
      numeric: 'auto'
    }).format(0, 'day');
    return label.charAt(0).toUpperCase() + label.slice(1);
  } else {
    return 'Today';
  }
};
/**
 * When calling toISOString(), the browser
 * will convert the date to UTC time by either adding
 * or subtracting the time zone offset.
 * To work around this, we need to either add
 * or subtract the time zone offset to the Date
 * object prior to calling toISOString().
 * This allows us to get an ISO string
 * that is in the user's time zone.
 *
 * Example:
 * Time zone offset is 240
 * Meaning: The browser needs to add 240 minutes
 * to the Date object to get UTC time.
 * What Ionic does: We subtract 240 minutes
 * from the Date object. The browser then adds
 * 240 minutes in toISOString(). The result
 * is a time that is in the user's time zone
 * and not UTC.
 *
 * Note: Some timezones include minute adjustments
 * such as 30 or 45 minutes. This is why we use setMinutes
 * instead of setHours.
 * Example: India Standard Time
 * Timezone offset: -330 = -5.5 hours.
 *
 * List of timezones with 30 and 45 minute timezones:
 * https://www.timeanddate.com/time/time-zones-interesting.html
 */
const removeDateTzOffset = date => {
  const tzOffset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - tzOffset);
  return date;
};
const DATE_AM = removeDateTzOffset(new Date('2022T01:00'));
const DATE_PM = removeDateTzOffset(new Date('2022T13:00'));
/**
 * Formats the locale's string representation of the day period (am/pm) for a given
 * ref parts day period.
 *
 * @param locale The locale to format the day period in.
 * @param value The date string, in ISO format.
 * @returns The localized day period (am/pm) representation of the given value.
 */
const getLocalizedDayPeriod = (locale, dayPeriod) => {
  const date = dayPeriod === 'am' ? DATE_AM : DATE_PM;
  const localizedDayPeriod = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    timeZone: 'UTC'
  }).formatToParts(date).find(part => part.type === 'dayPeriod');
  if (localizedDayPeriod) {
    return localizedDayPeriod.value;
  }
  return getFormattedDayPeriod(dayPeriod);
};
/**
 * Formats the datetime's value to a string, for use in the native input.
 *
 * @param value The value to format, either an ISO string or an array thereof.
 */
const formatValue = value => {
  return Array.isArray(value) ? value.join(',') : value;
};

/**
 * Returns the current date as
 * an ISO string in the user's
 * time zone.
 */
const getToday = () => {
  /**
   * ion-datetime intentionally does not
   * parse time zones/do automatic time zone
   * conversion when accepting user input.
   * However when we get today's date string,
   * we want it formatted relative to the user's
   * time zone.
   *
   * When calling toISOString(), the browser
   * will convert the date to UTC time by either adding
   * or subtracting the time zone offset.
   * To work around this, we need to either add
   * or subtract the time zone offset to the Date
   * object prior to calling toISOString().
   * This allows us to get an ISO string
   * that is in the user's time zone.
   */
  return removeDateTzOffset(new Date()).toISOString();
};
const minutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
const hour12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const hour23 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
/**
 * Given a locale and a mode,
 * return an array with formatted days
 * of the week. iOS should display days
 * such as "Mon" or "Tue".
 * MD should display days such as "M"
 * or "T".
 */
const getDaysOfWeek = (locale, mode, firstDayOfWeek = 0) => {
  /**
   * Nov 1st, 2020 starts on a Sunday.
   * ion-datetime assumes weeks start on Sunday,
   * but is configurable via `firstDayOfWeek`.
   */
  const weekdayFormat = mode === 'ios' ? 'short' : 'narrow';
  const intl = new Intl.DateTimeFormat(locale, {
    weekday: weekdayFormat
  });
  const startDate = new Date('11/01/2020');
  const daysOfWeek = [];
  /**
   * For each day of the week,
   * get the day name.
   */
  for (let i = firstDayOfWeek; i < firstDayOfWeek + 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    daysOfWeek.push(intl.format(currentDate));
  }
  return daysOfWeek;
};
/**
 * Returns an array containing all of the
 * days in a month for a given year. Values are
 * aligned with a week calendar starting on
 * the firstDayOfWeek value (Sunday by default)
 * using null values.
 */
const getDaysOfMonth = (month, year, firstDayOfWeek) => {
  const numDays = getNumDaysInMonth(month, year);
  const firstOfMonth = new Date(`${month}/1/${year}`).getDay();
  /**
   * To get the first day of the month aligned on the correct
   * day of the week, we need to determine how many "filler" days
   * to generate. These filler days as empty/disabled buttons
   * that fill the space of the days of the week before the first
   * of the month.
   *
   * There are two cases here:
   *
   * 1. If firstOfMonth = 4, firstDayOfWeek = 0 then the offset
   * is (4 - (0 + 1)) = 3. Since the offset loop goes from 0 to 3 inclusive,
   * this will generate 4 filler days (0, 1, 2, 3), and then day of week 4 will have
   * the first day of the month.
   *
   * 2. If firstOfMonth = 2, firstDayOfWeek = 4 then the offset
   * is (6 - (4 - 2)) = 4. Since the offset loop goes from 0 to 4 inclusive,
   * this will generate 5 filler days (0, 1, 2, 3, 4), and then day of week 5 will have
   * the first day of the month.
   */
  const offset = firstOfMonth >= firstDayOfWeek ? firstOfMonth - (firstDayOfWeek + 1) : 6 - (firstDayOfWeek - firstOfMonth);
  let days = [];
  for (let i = 1; i <= numDays; i++) {
    days.push({
      day: i,
      dayOfWeek: (offset + i) % 7
    });
  }
  for (let i = 0; i <= offset; i++) {
    days = [{
      day: null,
      dayOfWeek: null
    }, ...days];
  }
  return days;
};
/**
 * Given a local, reference datetime parts and option
 * max/min bound datetime parts, calculate the acceptable
 * hour and minute values according to the bounds and locale.
 */
const generateTime = (refParts, hourCycle = 'h12', minParts, maxParts, hourValues, minuteValues) => {
  const use24Hour = hourCycle === 'h23';
  let processedHours = use24Hour ? hour23 : hour12;
  let processedMinutes = minutes;
  let isAMAllowed = true;
  let isPMAllowed = true;
  if (hourValues) {
    processedHours = processedHours.filter(hour => hourValues.includes(hour));
  }
  if (minuteValues) {
    processedMinutes = processedMinutes.filter(minute => minuteValues.includes(minute));
  }
  if (minParts) {
    /**
     * If ref day is the same as the
     * minimum allowed day, filter hour/minute
     * values according to min hour and minute.
     */
    if (isSameDay(refParts, minParts)) {
      /**
       * Users may not always set the hour/minute for
       * min value (i.e. 2021-06-02) so we should allow
       * all hours/minutes in that case.
       */
      if (minParts.hour !== undefined) {
        processedHours = processedHours.filter(hour => {
          const convertedHour = refParts.ampm === 'pm' ? (hour + 12) % 24 : hour;
          return (use24Hour ? hour : convertedHour) >= minParts.hour;
        });
        isAMAllowed = minParts.hour < 13;
      }
      if (minParts.minute !== undefined) {
        /**
         * The minimum minute range should not be enforced when
         * the hour is greater than the min hour.
         *
         * For example with a minimum range of 09:30, users
         * should be able to select 10:00-10:29 and beyond.
         */
        let isPastMinHour = false;
        if (minParts.hour !== undefined && refParts.hour !== undefined) {
          if (refParts.hour > minParts.hour) {
            isPastMinHour = true;
          }
        }
        processedMinutes = processedMinutes.filter(minute => {
          if (isPastMinHour) {
            return true;
          }
          return minute >= minParts.minute;
        });
      }
      /**
       * If ref day is before minimum
       * day do not render any hours/minute values
       */
    } else if (isBefore(refParts, minParts)) {
      processedHours = [];
      processedMinutes = [];
      isAMAllowed = isPMAllowed = false;
    }
  }
  if (maxParts) {
    /**
     * If ref day is the same as the
     * maximum allowed day, filter hour/minute
     * values according to max hour and minute.
     */
    if (isSameDay(refParts, maxParts)) {
      /**
       * Users may not always set the hour/minute for
       * max value (i.e. 2021-06-02) so we should allow
       * all hours/minutes in that case.
       */
      if (maxParts.hour !== undefined) {
        processedHours = processedHours.filter(hour => {
          const convertedHour = refParts.ampm === 'pm' ? (hour + 12) % 24 : hour;
          return (use24Hour ? hour : convertedHour) <= maxParts.hour;
        });
        isPMAllowed = maxParts.hour >= 12;
      }
      if (maxParts.minute !== undefined && refParts.hour === maxParts.hour) {
        // The available minutes should only be filtered when the hour is the same as the max hour.
        // For example if the max hour is 10:30 and the current hour is 10:00,
        // users should be able to select 00-30 minutes.
        // If the current hour is 09:00, users should be able to select 00-60 minutes.
        processedMinutes = processedMinutes.filter(minute => minute <= maxParts.minute);
      }
      /**
       * If ref day is after minimum
       * day do not render any hours/minute values
       */
    } else if (isAfter(refParts, maxParts)) {
      processedHours = [];
      processedMinutes = [];
      isAMAllowed = isPMAllowed = false;
    }
  }
  return {
    hours: processedHours,
    minutes: processedMinutes,
    am: isAMAllowed,
    pm: isPMAllowed
  };
};
/**
 * Given DatetimeParts, generate the previous,
 * current, and and next months.
 */
const generateMonths = refParts => {
  return [getPreviousMonth(refParts), {
    month: refParts.month,
    year: refParts.year,
    day: refParts.day
  }, getNextMonth(refParts)];
};
const getMonthColumnData = (locale, refParts, minParts, maxParts, monthValues, formatOptions = {
  month: 'long'
}) => {
  const {
    year
  } = refParts;
  const months = [];
  if (monthValues !== undefined) {
    let processedMonths = monthValues;
    if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.month) !== undefined) {
      processedMonths = processedMonths.filter(month => month <= maxParts.month);
    }
    if ((minParts === null || minParts === void 0 ? void 0 : minParts.month) !== undefined) {
      processedMonths = processedMonths.filter(month => month >= minParts.month);
    }
    processedMonths.forEach(processedMonth => {
      const date = new Date(`${processedMonth}/1/${year} GMT+0000`);
      const monthString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: 'UTC'
      })).format(date);
      months.push({
        text: monthString,
        value: processedMonth
      });
    });
  } else {
    const maxMonth = maxParts && maxParts.year === year ? maxParts.month : 12;
    const minMonth = minParts && minParts.year === year ? minParts.month : 1;
    for (let i = minMonth; i <= maxMonth; i++) {
      /**
       *
       * There is a bug on iOS 14 where
       * Intl.DateTimeFormat takes into account
       * the local timezone offset when formatting dates.
       *
       * Forcing the timezone to 'UTC' fixes the issue. However,
       * we should keep this workaround as it is safer. In the event
       * this breaks in another browser, we will not be impacted
       * because all dates will be interpreted in UTC.
       *
       * Example:
       * new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date('Sat Apr 01 2006 00:00:00 GMT-0400 (EDT)')) // "March"
       * new Intl.DateTimeFormat('en-US', { month: 'long', timeZone: 'UTC' }).format(new Date('Sat Apr 01 2006 00:00:00 GMT-0400 (EDT)')) // "April"
       *
       * In certain timezones, iOS 14 shows the wrong
       * date for .toUTCString(). To combat this, we
       * force all of the timezones to GMT+0000 (UTC).
       *
       * Example:
       * Time Zone: Central European Standard Time
       * new Date('1/1/1992').toUTCString() // "Tue, 31 Dec 1991 23:00:00 GMT"
       * new Date('1/1/1992 GMT+0000').toUTCString() // "Wed, 01 Jan 1992 00:00:00 GMT"
       */
      const date = new Date(`${i}/1/${year} GMT+0000`);
      const monthString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: 'UTC'
      })).format(date);
      months.push({
        text: monthString,
        value: i
      });
    }
  }
  return months;
};
/**
 * Returns information regarding
 * selectable dates (i.e 1st, 2nd, 3rd, etc)
 * within a reference month.
 * @param locale The locale to format the date with
 * @param refParts The reference month/year to generate dates for
 * @param minParts The minimum bound on the date that can be returned
 * @param maxParts The maximum bound on the date that can be returned
 * @param dayValues The allowed date values
 * @returns Date data to be used in ion-picker-column-internal
 */
const getDayColumnData = (locale, refParts, minParts, maxParts, dayValues, formatOptions = {
  day: 'numeric'
}) => {
  const {
    month,
    year
  } = refParts;
  const days = [];
  /**
   * If we have max/min bounds that in the same
   * month/year as the refParts, we should
   * use the define day as the max/min day.
   * Otherwise, fallback to the max/min days in a month.
   */
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const maxDay = (maxParts === null || maxParts === void 0 ? void 0 : maxParts.day) !== null && (maxParts === null || maxParts === void 0 ? void 0 : maxParts.day) !== undefined && maxParts.year === year && maxParts.month === month ? maxParts.day : numDaysInMonth;
  const minDay = (minParts === null || minParts === void 0 ? void 0 : minParts.day) !== null && (minParts === null || minParts === void 0 ? void 0 : minParts.day) !== undefined && minParts.year === year && minParts.month === month ? minParts.day : 1;
  if (dayValues !== undefined) {
    let processedDays = dayValues;
    processedDays = processedDays.filter(day => day >= minDay && day <= maxDay);
    processedDays.forEach(processedDay => {
      const date = new Date(`${month}/${processedDay}/${year} GMT+0000`);
      const dayString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: 'UTC'
      })).format(date);
      days.push({
        text: dayString,
        value: processedDay
      });
    });
  } else {
    for (let i = minDay; i <= maxDay; i++) {
      const date = new Date(`${month}/${i}/${year} GMT+0000`);
      const dayString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: 'UTC'
      })).format(date);
      days.push({
        text: dayString,
        value: i
      });
    }
  }
  return days;
};
const getYearColumnData = (locale, refParts, minParts, maxParts, yearValues) => {
  var _a, _b;
  let processedYears = [];
  if (yearValues !== undefined) {
    processedYears = yearValues;
    if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.year) !== undefined) {
      processedYears = processedYears.filter(year => year <= maxParts.year);
    }
    if ((minParts === null || minParts === void 0 ? void 0 : minParts.year) !== undefined) {
      processedYears = processedYears.filter(year => year >= minParts.year);
    }
  } else {
    const {
      year
    } = refParts;
    const maxYear = (_a = maxParts === null || maxParts === void 0 ? void 0 : maxParts.year) !== null && _a !== void 0 ? _a : year;
    const minYear = (_b = minParts === null || minParts === void 0 ? void 0 : minParts.year) !== null && _b !== void 0 ? _b : year - 100;
    for (let i = maxYear; i >= minYear; i--) {
      processedYears.push(i);
    }
  }
  return processedYears.map(year => ({
    text: getYear(locale, {
      year,
      month: refParts.month,
      day: refParts.day
    }),
    value: year
  }));
};
/**
 * Given a starting date and an upper bound,
 * this functions returns an array of all
 * month objects in that range.
 */
const getAllMonthsInRange = (currentParts, maxParts) => {
  if (currentParts.month === maxParts.month && currentParts.year === maxParts.year) {
    return [currentParts];
  }
  return [currentParts, ...getAllMonthsInRange(getNextMonth(currentParts), maxParts)];
};
/**
 * Creates and returns picker items
 * that represent the days in a month.
 * Example: "Thu, Jun 2"
 */
const getCombinedDateColumnData = (locale, todayParts, minParts, maxParts, dayValues, monthValues) => {
  let items = [];
  let parts = [];
  /**
   * Get all month objects from the min date
   * to the max date. Note: Do not use getMonthColumnData
   * as that function only generates dates within a
   * single year.
   */
  let months = getAllMonthsInRange(minParts, maxParts);
  /**
   * Filter out any disallowed month values.
   */
  if (monthValues) {
    months = months.filter(({
      month
    }) => monthValues.includes(month));
  }
  /**
   * Get all of the days in the month.
   * From there, generate an array where
   * each item has the month, date, and day
   * of work as the text.
   */
  months.forEach(monthObject => {
    const referenceMonth = {
      month: monthObject.month,
      day: null,
      year: monthObject.year
    };
    const monthDays = getDayColumnData(locale, referenceMonth, minParts, maxParts, dayValues, {
      month: 'short',
      day: 'numeric',
      weekday: 'short'
    });
    const dateParts = [];
    const dateColumnItems = [];
    monthDays.forEach(dayObject => {
      const isToday = isSameDay(Object.assign(Object.assign({}, referenceMonth), {
        day: dayObject.value
      }), todayParts);
      /**
       * Today's date should read as "Today" (localized)
       * not the actual date string
       */
      dateColumnItems.push({
        text: isToday ? getTodayLabel(locale) : dayObject.text,
        value: `${referenceMonth.year}-${referenceMonth.month}-${dayObject.value}`
      });
      /**
       * When selecting a date in the wheel picker
       * we need access to the raw datetime parts data.
       * The picker column only accepts values of
       * type string or number, so we need to return
       * two sets of data: A data set to be passed
       * to the picker column, and a data set to
       * be used to reference the raw data when
       * updating the picker column value.
       */
      dateParts.push({
        month: referenceMonth.month,
        year: referenceMonth.year,
        day: dayObject.value
      });
    });
    parts = [...parts, ...dateParts];
    items = [...items, ...dateColumnItems];
  });
  return {
    parts,
    items
  };
};
const getTimeColumnsData = (locale, refParts, hourCycle, minParts, maxParts, allowedHourValues, allowedMinuteValues) => {
  const use24Hour = is24Hour(locale, hourCycle);
  const {
    hours,
    minutes,
    am,
    pm
  } = generateTime(refParts, use24Hour ? 'h23' : 'h12', minParts, maxParts, allowedHourValues, allowedMinuteValues);
  const hoursItems = hours.map(hour => {
    return {
      text: getFormattedHour(hour, use24Hour),
      value: getInternalHourValue(hour, use24Hour, refParts.ampm)
    };
  });
  const minutesItems = minutes.map(minute => {
    return {
      text: addTimePadding(minute),
      value: minute
    };
  });
  const dayPeriodItems = [];
  if (am && !use24Hour) {
    dayPeriodItems.push({
      text: getLocalizedDayPeriod(locale, 'am'),
      value: 'am'
    });
  }
  if (pm && !use24Hour) {
    dayPeriodItems.push({
      text: getLocalizedDayPeriod(locale, 'pm'),
      value: 'pm'
    });
  }
  return {
    minutesData: minutesItems,
    hoursData: hoursItems,
    dayPeriodData: dayPeriodItems
  };
};


/***/ }),

/***/ 36792:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};


/***/ }),

/***/ 99676:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-10ad4867.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startFocusVisible: () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = rootEl => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;
  const setFocus = elements => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = ev => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = ev => {
    if (keyboardMode && ev.composedPath !== undefined) {
      const toFocus = ev.composedPath().filter(el => {
        // TODO(FW-2832): type
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown, {
    passive: true
  });
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};


/***/ }),

/***/ 23797:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-029a46f6.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ hapticSelectionStart),
/* harmony export */   b: () => (/* binding */ hapticSelectionChanged),
/* harmony export */   c: () => (/* binding */ hapticSelection),
/* harmony export */   d: () => (/* binding */ hapticImpact),
/* harmony export */   h: () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const HapticEngine = {
  getEngine() {
    var _a;
    const win = window;
    return win.TapticEngine || ((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Haptics')) && win.Capacitor.Plugins.Haptics;
  },
  available() {
    var _a;
    const win = window;
    const engine = this.getEngine();
    if (!engine) {
      return false;
    }
    /**
     * Developers can manually import the
     * Haptics plugin in their app which will cause
     * getEngine to return the Haptics engine. However,
     * the Haptics engine will throw an error if
     * used in a web browser that does not support
     * the Vibrate API. This check avoids that error
     * if the browser does not support the Vibrate API.
     */
    if (((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.getPlatform()) === 'web') {
      return typeof navigator !== 'undefined' && navigator.vibrate !== undefined;
    }
    return true;
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style
    });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style
    });
  },
  selection() {
    this.impact({
      style: 'light'
    });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
const hapticAvailable = () => {
  return HapticEngine.available();
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  hapticAvailable() && HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  hapticAvailable() && HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  hapticAvailable() && HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  hapticAvailable() && HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = options => {
  hapticAvailable() && HapticEngine.impact(options);
};


/***/ }),

/***/ 90648:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-393bc14a.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ arrowBackSharp),
/* harmony export */   b: () => (/* binding */ closeCircle),
/* harmony export */   c: () => (/* binding */ chevronBack),
/* harmony export */   d: () => (/* binding */ closeSharp),
/* harmony export */   e: () => (/* binding */ searchSharp),
/* harmony export */   f: () => (/* binding */ checkmarkOutline),
/* harmony export */   g: () => (/* binding */ ellipseOutline),
/* harmony export */   h: () => (/* binding */ caretBackSharp),
/* harmony export */   i: () => (/* binding */ arrowDown),
/* harmony export */   j: () => (/* binding */ reorderThreeOutline),
/* harmony export */   k: () => (/* binding */ reorderTwoSharp),
/* harmony export */   l: () => (/* binding */ chevronDown),
/* harmony export */   m: () => (/* binding */ chevronForwardOutline),
/* harmony export */   n: () => (/* binding */ ellipsisHorizontal),
/* harmony export */   o: () => (/* binding */ chevronForward),
/* harmony export */   p: () => (/* binding */ caretUpSharp),
/* harmony export */   q: () => (/* binding */ caretDownSharp),
/* harmony export */   r: () => (/* binding */ removeOutline),
/* harmony export */   s: () => (/* binding */ searchOutline),
/* harmony export */   t: () => (/* binding */ close),
/* harmony export */   u: () => (/* binding */ menuOutline),
/* harmony export */   v: () => (/* binding */ menuSharp),
/* harmony export */   w: () => (/* binding */ chevronExpand)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v7.1.0, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronExpand = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 51467:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_datetime: () => (/* binding */ Datetime),
/* harmony export */   ion_picker: () => (/* binding */ Picker),
/* harmony export */   ion_picker_column: () => (/* binding */ PickerColumnCmp)
/* harmony export */ });
/* harmony import */ var _home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 70734);
/* harmony import */ var _index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-36a5fd75.js */ 15698);
/* harmony import */ var _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-393bc14a.js */ 90648);
/* harmony import */ var _ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-a9abd569.js */ 64778);
/* harmony import */ var _focus_visible_10ad4867_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./focus-visible-10ad4867.js */ 99676);
/* harmony import */ var _helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-f586db1c.js */ 41099);
/* harmony import */ var _index_e86f0117_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-e86f0117.js */ 99614);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 36792);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-7670341c.js */ 35578);
/* harmony import */ var _data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data-b8307d99.js */ 55133);
/* harmony import */ var _overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./overlays-4101c476.js */ 8552);
/* harmony import */ var _animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./animation-258fd22b.js */ 69616);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 23797);
/* harmony import */ var _framework_delegate_6a45ed30_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./framework-delegate-6a45ed30.js */ 26419);
/* harmony import */ var _hardware_back_button_490df115_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hardware-back-button-490df115.js */ 93428);
/* harmony import */ var _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index-b32cad98.js */ 69830);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */















const isYearDisabled = (refYear, minParts, maxParts) => {
  if (minParts && minParts.year > refYear) {
    return true;
  }
  if (maxParts && maxParts.year < refYear) {
    return true;
  }
  return false;
};
/**
 * Returns true if a given day should
 * not be interactive according to its value,
 * or the max/min dates.
 */
const isDayDisabled = (refParts, minParts, maxParts, dayValues) => {
  /**
   * If this is a filler date (i.e. padding)
   * then the date is disabled.
   */
  if (refParts.day === null) {
    return true;
  }
  /**
   * If user passed in a list of acceptable day values
   * check to make sure that the date we are looking
   * at is in this array.
   */
  if (dayValues !== undefined && !dayValues.includes(refParts.day)) {
    return true;
  }
  /**
   * Given a min date, perform the following
   * checks. If any of them are true, then the
   * day should be disabled:
   * 1. Is the current year < the min allowed year?
   * 2. Is the current year === min allowed year,
   * but the current month < the min allowed month?
   * 3. Is the current year === min allowed year, the
   * current month === min allow month, but the current
   * day < the min allowed day?
   */
  if (minParts && (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.i)(refParts, minParts)) {
    return true;
  }
  /**
   * Given a max date, perform the following
   * checks. If any of them are true, then the
   * day should be disabled:
   * 1. Is the current year > the max allowed year?
   * 2. Is the current year === max allowed year,
   * but the current month > the max allowed month?
   * 3. Is the current year === max allowed year, the
   * current month === max allow month, but the current
   * day > the max allowed day?
   */
  if (maxParts && (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.b)(refParts, maxParts)) {
    return true;
  }
  /**
   * If none of these checks
   * passed then the date should
   * be interactive.
   */
  return false;
};
/**
 * Given a locale, a date, the selected date(s), and today's date,
 * generate the state for a given calendar day button.
 */
const getCalendarDayState = (locale, refParts, activeParts, todayParts, minParts, maxParts, dayValues) => {
  /**
   * activeParts signals what day(s) are currently selected in the datetime.
   * If multiple="true", this will be an array, but the logic in this util
   * is the same whether we have one selected day or many because we're only
   * calculating the state for one button. So, we treat a single activeParts value
   * the same as an array of length one.
   */
  const activePartsArray = Array.isArray(activeParts) ? activeParts : [activeParts];
  /**
   * The day button is active if it is selected, or in other words, if refParts
   * matches at least one selected date.
   */
  const isActive = activePartsArray.find(parts => (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.c)(refParts, parts)) !== undefined;
  const isToday = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.c)(refParts, todayParts);
  const disabled = isDayDisabled(refParts, minParts, maxParts, dayValues);
  /**
   * Note that we always return one object regardless of whether activeParts
   * was an array, since we pare down to one value for isActive.
   */
  return {
    disabled,
    isActive,
    isToday,
    ariaSelected: isActive ? 'true' : null,
    ariaLabel: (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.g)(locale, isToday, refParts),
    text: refParts.day != null ? (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.a)(locale, refParts) : null
  };
};
/**
 * Returns `true` if the month is disabled given the
 * current date value and min/max date constraints.
 */
const isMonthDisabled = (refParts, {
  minParts,
  maxParts
}) => {
  // If the year is disabled then the month is disabled.
  if (isYearDisabled(refParts.year, minParts, maxParts)) {
    return true;
  }
  // If the date value is before the min date, then the month is disabled.
  // If the date value is after the max date, then the month is disabled.
  if (minParts && (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.i)(refParts, minParts) || maxParts && (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.b)(refParts, maxParts)) {
    return true;
  }
  return false;
};
/**
 * Given a working date, an optional minimum date range,
 * and an optional maximum date range; determine if the
 * previous navigation button is disabled.
 */
const isPrevMonthDisabled = (refParts, minParts, maxParts) => {
  const prevMonth = Object.assign(Object.assign({}, (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.d)(refParts)), {
    day: null
  });
  return isMonthDisabled(prevMonth, {
    minParts,
    maxParts
  });
};
/**
 * Given a working date and a maximum date range,
 * determine if the next navigation button is disabled.
 */
const isNextMonthDisabled = (refParts, maxParts) => {
  const nextMonth = Object.assign(Object.assign({}, (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.e)(refParts)), {
    day: null
  });
  return isMonthDisabled(nextMonth, {
    maxParts
  });
};
/**
 * Given the value of the highlightedDates property
 * and an ISO string, return the styles to use for
 * that date, or undefined if none are found.
 */
const getHighlightStyles = (highlightedDates, dateIsoString, el) => {
  if (Array.isArray(highlightedDates)) {
    const dateStringWithoutTime = dateIsoString.split('T')[0];
    const matchingHighlight = highlightedDates.find(hd => hd.date === dateStringWithoutTime);
    if (matchingHighlight) {
      return {
        textColor: matchingHighlight.textColor,
        backgroundColor: matchingHighlight.backgroundColor
      };
    }
  } else {
    /**
     * Wrap in a try-catch to prevent exceptions in the user's function
     * from interrupting the calendar's rendering.
     */
    try {
      return highlightedDates(dateIsoString);
    } catch (e) {
      (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_6__.a)('Exception thrown from provided `highlightedDates` callback. Please check your function and try again.', el, e);
    }
  }
  return undefined;
};
const datetimeIosCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}ion-picker-column-internal{min-width:26px}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{position:absolute;visibility:hidden;pointer-events:none}@supports (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{inset-inline-start:-99999px}}@supports not (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}@supports selector(:dir(rtl)){:host(.show-month-and-year) .calendar-next-prev:dir(rtl),:host(.show-month-and-year) .calendar-days-of-week:dir(rtl),:host(.show-month-and-year) .calendar-body:dir(rtl),:host(.show-month-and-year) .datetime-time:dir(rtl){left:unset;right:unset;right:-99999px}}}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-readonly),:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled){opacity:0.4}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .calendar-action-buttons ion-item ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day-highlight{border-radius:32px;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:32px;height:32px;z-index:-1}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-light, #ffffff);--background-rgb:var(--ion-color-light-rgb);--title-color:var(--ion-color-step-600, #666666)}:host(.datetime-presentation-date-time:not(.datetime-prefer-wheel)),:host(.datetime-presentation-time-date:not(.datetime-prefer-wheel)),:host(.datetime-presentation-date:not(.datetime-prefer-wheel)){min-height:350px}:host .datetime-header{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px;border-bottom:0.55px solid var(--ion-color-step-200, #cccccc);font-size:14px}:host .datetime-header .datetime-title{color:var(--title-color)}:host .datetime-header .datetime-selected-date{margin-top:10px}:host .calendar-action-buttons ion-item{--padding-start:16px;--background-hover:transparent;--background-activated:transparent;font-size:16px;font-weight:600}:host .calendar-action-buttons ion-item ion-icon,:host .calendar-action-buttons ion-buttons ion-button{color:var(--ion-color-base)}:host .calendar-action-buttons ion-buttons{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:0}:host .calendar-action-buttons ion-buttons ion-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host .calendar-days-of-week{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;color:var(--ion-color-step-300, #b3b3b3);font-size:12px;font-weight:600;line-height:24px;text-transform:uppercase}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;height:calc(100% - 16px)}:host .calendar-day{font-size:20px}.calendar-day:focus .calendar-day-highlight,.calendar-day.calendar-day-active .calendar-day-highlight{opacity:0.2}.calendar-day.calendar-day-active .calendar-day-highlight{background:var(--ion-color-base)}.calendar-day:focus .calendar-day-highlight{background:var(--ion-color-base) !important}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-base);font-weight:600}:host .calendar-day.calendar-day-today.calendar-day-active{color:var(--ion-color-contrast)}.calendar-day.calendar-day-today.calendar-day-active .calendar-day-highlight{background:var(--ion-color-base);opacity:1}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:16px;font-size:16px}:host .datetime-time .time-header{font-weight:600}:host .datetime-buttons{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;border-top:0.55px solid var(--ion-color-step-200, #cccccc)}:host .datetime-buttons ::slotted(ion-buttons),:host .datetime-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host .datetime-action-buttons{width:100%}";
const datetimeMdCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}ion-picker-column-internal{min-width:26px}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{position:absolute;visibility:hidden;pointer-events:none}@supports (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{inset-inline-start:-99999px}}@supports not (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}@supports selector(:dir(rtl)){:host(.show-month-and-year) .calendar-next-prev:dir(rtl),:host(.show-month-and-year) .calendar-days-of-week:dir(rtl),:host(.show-month-and-year) .calendar-body:dir(rtl),:host(.show-month-and-year) .datetime-time:dir(rtl){left:unset;right:unset;right:-99999px}}}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-readonly),:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled){opacity:0.4}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .calendar-action-buttons ion-item ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day-highlight{border-radius:32px;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:32px;height:32px;z-index:-1}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-step-100, #ffffff);--title-color:var(--ion-color-contrast)}:host .datetime-header{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;background:var(--ion-color-base);color:var(--title-color)}:host .datetime-header .datetime-title{font-size:12px;text-transform:uppercase}:host .datetime-header .datetime-selected-date{margin-top:30px;font-size:34px}:host .datetime-calendar .calendar-action-buttons ion-item{--padding-start:20px}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{color:var(--ion-color-step-650, #595959)}:host .calendar-days-of-week{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:0px;padding-bottom:0px;color:var(--ion-color-step-500, gray);font-size:14px;line-height:36px}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:4px;padding-bottom:4px;grid-template-rows:repeat(6, 1fr)}:host .calendar-day{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0;padding-inline-end:0;padding-top:13px;padding-bottom:13px;font-size:14px}.calendar-day:focus .calendar-day-highlight{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}.calendar-day.calendar-day-today .calendar-day-highlight{border:1px solid var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-contrast)}.calendar-day.calendar-day-active .calendar-day-highlight{border:1px solid var(--ion-color-base);background:var(--ion-color-base)}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:8px}:host .time-header{color:var(--ion-color-step-650, #595959)}:host(.datetime-presentation-month) .datetime-year,:host(.datetime-presentation-year) .datetime-year,:host(.datetime-presentation-month-year) .datetime-year{margin-top:20px;margin-bottom:20px}:host .datetime-buttons{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}:host .datetime-view-buttons ion-button{color:var(--ion-color-step-800, #333333)}";
const Datetime = class {
  constructor(hostRef) {
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionCancel = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionCancel", 7);
    this.ionChange = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionChange", 7);
    this.ionValueChange = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionValueChange", 7);
    this.ionFocus = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionFocus", 7);
    this.ionBlur = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionBlur", 7);
    this.ionStyle = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionStyle", 7);
    this.ionRender = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionRender", 7);
    this.inputId = `ion-dt-${datetimeIds++}`;
    this.prevPresentation = null;
    /**
     * Duplicate reference to `activeParts` that does not trigger a re-render of the component.
     * Allows caching an instance of the `activeParts` in between render cycles.
     */
    this.activePartsClone = [];
    this.warnIfIncorrectValueUsage = () => {
      const {
        multiple,
        value
      } = this;
      if (!multiple && Array.isArray(value)) {
        /**
         * We do some processing on the `value` array so
         * that it looks more like an array when logged to
         * the console.
         * Example given ['a', 'b']
         * Default toString() behavior: a,b
         * Custom behavior: ['a', 'b']
         */
        (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_6__.p)(`ion-datetime was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${value.map(v => `'${v}'`).join(', ')}]
`, this.el);
      }
    };
    this.setValue = value => {
      this.value = value;
      this.ionChange.emit({
        value
      });
    };
    /**
     * Returns the DatetimePart interface
     * to use when rendering an initial set of
     * data. This should be used when rendering an
     * interface in an environment where the `value`
     * may not be set. This function works
     * by returning the first selected date in
     * "activePartsClone" and then falling back to
     * defaultParts if no active date is selected.
     */
    this.getActivePartsWithFallback = () => {
      var _a;
      const {
        defaultParts
      } = this;
      return (_a = this.getActivePart()) !== null && _a !== void 0 ? _a : defaultParts;
    };
    this.getActivePart = () => {
      const {
        activePartsClone
      } = this;
      return Array.isArray(activePartsClone) ? activePartsClone[0] : activePartsClone;
    };
    this.closeParentOverlay = () => {
      const popoverOrModal = this.el.closest('ion-modal, ion-popover');
      if (popoverOrModal) {
        popoverOrModal.dismiss();
      }
    };
    this.setWorkingParts = parts => {
      this.workingParts = Object.assign({}, parts);
    };
    this.setActiveParts = (parts, removeDate = false) => {
      const {
        multiple,
        minParts,
        maxParts,
        activePartsClone
      } = this;
      /**
       * When setting the active parts, it is possible
       * to set invalid data. For example,
       * when updating January 31 to February,
       * February 31 does not exist. As a result
       * we need to validate the active parts and
       * ensure that we are only setting valid dates.
       * Additionally, we need to update the working parts
       * too in the event that the validated parts are different.
       */
      const validatedParts = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.v)(parts, minParts, maxParts);
      this.setWorkingParts(validatedParts);
      if (multiple) {
        /**
         * We read from activePartsClone here because valueChanged() only updates that,
         * so it's the more reliable source of truth. If we read from activeParts, then
         * if you click July 1, manually set the value to July 2, and then click July 3,
         * the new value would be [July 1, July 3], ignoring the value set.
         *
         * We can then pass the new value to activeParts (rather than activePartsClone)
         * since the clone will be updated automatically by activePartsChanged().
         */
        const activePartsArray = Array.isArray(activePartsClone) ? activePartsClone : [activePartsClone];
        if (removeDate) {
          this.activeParts = activePartsArray.filter(p => !(0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.c)(p, validatedParts));
        } else {
          this.activeParts = [...activePartsArray, validatedParts];
        }
      } else {
        this.activeParts = Object.assign({}, validatedParts);
      }
      const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
      if (hasSlottedButtons || this.showDefaultButtons) {
        return;
      }
      this.confirm();
    };
    this.initializeKeyboardListeners = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const root = this.el.shadowRoot;
      /**
       * Get a reference to the month
       * element we are currently viewing.
       */
      const currentMonth = calendarBodyRef.querySelector('.calendar-month:nth-of-type(2)');
      /**
       * When focusing the calendar body, we want to pass focus
       * to the working day, but other days should
       * only be accessible using the arrow keys. Pressing
       * Tab should jump between bodies of selectable content.
       */
      const checkCalendarBodyFocus = ev => {
        var _a;
        const record = ev[0];
        /**
         * If calendar body was already focused
         * when this fired or if the calendar body
         * if not currently focused, we should not re-focus
         * the inner day.
         */
        if (((_a = record.oldValue) === null || _a === void 0 ? void 0 : _a.includes('ion-focused')) || !calendarBodyRef.classList.contains('ion-focused')) {
          return;
        }
        this.focusWorkingDay(currentMonth);
      };
      const mo = new MutationObserver(checkCalendarBodyFocus);
      mo.observe(calendarBodyRef, {
        attributeFilter: ['class'],
        attributeOldValue: true
      });
      this.destroyKeyboardMO = () => {
        mo === null || mo === void 0 ? void 0 : mo.disconnect();
      };
      /**
       * We must use keydown not keyup as we want
       * to prevent scrolling when using the arrow keys.
       */
      calendarBodyRef.addEventListener('keydown', ev => {
        const activeElement = root.activeElement;
        if (!activeElement || !activeElement.classList.contains('calendar-day')) {
          return;
        }
        const parts = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.f)(activeElement);
        let partsToFocus;
        switch (ev.key) {
          case 'ArrowDown':
            ev.preventDefault();
            partsToFocus = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.n)(parts);
            break;
          case 'ArrowUp':
            ev.preventDefault();
            partsToFocus = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.m)(parts);
            break;
          case 'ArrowRight':
            ev.preventDefault();
            partsToFocus = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.l)(parts);
            break;
          case 'ArrowLeft':
            ev.preventDefault();
            partsToFocus = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.k)(parts);
            break;
          case 'Home':
            ev.preventDefault();
            partsToFocus = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.j)(parts);
            break;
          case 'End':
            ev.preventDefault();
            partsToFocus = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.h)(parts);
            break;
          case 'PageUp':
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.O)(parts) : (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.d)(parts);
            break;
          case 'PageDown':
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.N)(parts) : (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.e)(parts);
            break;
          /**
           * Do not preventDefault here
           * as we do not want to override other
           * browser defaults such as pressing Enter/Space
           * to select a day.
           */
          default:
            return;
        }
        /**
         * If the day we want to move focus to is
         * disabled, do not do anything.
         */
        if (isDayDisabled(partsToFocus, this.minParts, this.maxParts)) {
          return;
        }
        this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), partsToFocus));
        /**
         * Give view a chance to re-render
         * then move focus to the new working day
         */
        requestAnimationFrame(() => this.focusWorkingDay(currentMonth));
      });
    };
    this.focusWorkingDay = currentMonth => {
      /**
       * Get the number of padding days so
       * we know how much to offset our next selector by
       * to grab the correct calenday-day element.
       */
      const padding = currentMonth.querySelectorAll('.calendar-day-padding');
      const {
        day
      } = this.workingParts;
      if (day === null) {
        return;
      }
      /**
       * Get the calendar day element
       * and focus it.
       */
      const dayEl = currentMonth.querySelector(`.calendar-day:nth-of-type(${padding.length + day})`);
      if (dayEl) {
        dayEl.focus();
      }
    };
    this.processMinParts = () => {
      const {
        min,
        defaultParts
      } = this;
      if (min === undefined) {
        this.minParts = undefined;
        return;
      }
      this.minParts = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.p)(min, defaultParts);
    };
    this.processMaxParts = () => {
      const {
        max,
        defaultParts
      } = this;
      if (max === undefined) {
        this.maxParts = undefined;
        return;
      }
      this.maxParts = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.o)(max, defaultParts);
    };
    this.initializeCalendarListener = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      /**
       * For performance reasons, we only render 3
       * months at a time: The current month, the previous
       * month, and the next month. We have a scroll listener
       * on the calendar body to append/prepend new months.
       *
       * We can do this because Stencil is smart enough to not
       * re-create the .calendar-month containers, but rather
       * update the content within those containers.
       *
       * As an added bonus, WebKit has some troubles with
       * scroll-snap-stop: always, so not rendering all of
       * the months in a row allows us to mostly sidestep
       * that issue.
       */
      const months = calendarBodyRef.querySelectorAll('.calendar-month');
      const startMonth = months[0];
      const workingMonth = months[1];
      const endMonth = months[2];
      const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
      const needsiOSRubberBandFix = mode === 'ios' && typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1;
      /**
       * Before setting up the scroll listener,
       * scroll the middle month into view.
       * scrollIntoView() will scroll entire page
       * if element is not in viewport. Use scrollLeft instead.
       */
      (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
        calendarBodyRef.scrollLeft = startMonth.clientWidth * ((0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.el) ? -1 : 1);
        const getChangedMonth = parts => {
          const box = calendarBodyRef.getBoundingClientRect();
          const root = this.el.shadowRoot;
          /**
           * Get the element that is in the center of the calendar body.
           * This will be an element inside of the active month.
           */
          const elementAtCenter = root.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2);
          /**
           * If there is no element then the
           * component may be re-rendering on a slow device.
           */
          if (!elementAtCenter) return;
          const month = elementAtCenter.closest('.calendar-month');
          if (!month) return;
          /**
           * The edge of the month must be lined up with
           * the edge of the calendar body in order for
           * the component to update. Otherwise, it
           * may be the case that the user has paused their
           * swipe or the browser has not finished snapping yet.
           * Rather than check if the x values are equal,
           * we give it a tolerance of 2px to account for
           * sub pixel rendering.
           */
          const monthBox = month.getBoundingClientRect();
          if (Math.abs(monthBox.x - box.x) > 2) return;
          /**
           * From here, we can determine if the start
           * month or the end month was scrolled into view.
           * If no month was changed, then we can return from
           * the scroll callback early.
           */
          if (month === startMonth) {
            return (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.d)(parts);
          } else if (month === endMonth) {
            return (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.e)(parts);
          } else {
            return;
          }
        };
        const updateActiveMonth = () => {
          if (needsiOSRubberBandFix) {
            calendarBodyRef.style.removeProperty('pointer-events');
            appliediOSRubberBandFix = false;
          }
          /**
           * If the month did not change
           * then we can return early.
           */
          const newDate = getChangedMonth(this.workingParts);
          if (!newDate) return;
          const {
            month,
            day,
            year
          } = newDate;
          if (isMonthDisabled({
            month,
            year,
            day: null
          }, {
            minParts: Object.assign(Object.assign({}, this.minParts), {
              day: null
            }),
            maxParts: Object.assign(Object.assign({}, this.maxParts), {
              day: null
            })
          })) {
            return;
          }
          /**
           * Prevent scrolling for other browsers
           * to give the DOM time to update and the container
           * time to properly snap.
           */
          calendarBodyRef.style.setProperty('overflow', 'hidden');
          /**
           * Use a writeTask here to ensure
           * that the state is updated and the
           * correct month is scrolled into view
           * in the same frame. This is not
           * typically a problem on newer devices
           * but older/slower device may have a flicker
           * if we did not do this.
           */
          (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
            this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), {
              month,
              day: day,
              year
            }));
            calendarBodyRef.scrollLeft = workingMonth.clientWidth * ((0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.el) ? -1 : 1);
            calendarBodyRef.style.removeProperty('overflow');
          });
        };
        /**
         * When the container finishes scrolling we
         * need to update the DOM with the selected month.
         */
        let scrollTimeout;
        /**
         * We do not want to attempt to set pointer-events
         * multiple times within a single swipe gesture as
         * that adds unnecessary work to the main thread.
         */
        let appliediOSRubberBandFix = false;
        const scrollCallback = () => {
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          /**
           * On iOS it is possible to quickly rubber band
           * the scroll area before the scroll timeout has fired.
           * This results in users reaching the end of the scrollable
           * container before the DOM has updated.
           * By setting `pointer-events: none` we can ensure that
           * subsequent swipes do not happen while the container
           * is snapping.
           */
          if (!appliediOSRubberBandFix && needsiOSRubberBandFix) {
            calendarBodyRef.style.setProperty('pointer-events', 'none');
            appliediOSRubberBandFix = true;
          }
          // Wait ~3 frames
          scrollTimeout = setTimeout(updateActiveMonth, 50);
        };
        calendarBodyRef.addEventListener('scroll', scrollCallback);
        this.destroyCalendarListener = () => {
          calendarBodyRef.removeEventListener('scroll', scrollCallback);
        };
      });
    };
    /**
     * Clean up all listeners except for the overlay
     * listener. This is so that we can re-create the listeners
     * if the datetime has been hidden/presented by a modal or popover.
     */
    this.destroyInteractionListeners = () => {
      const {
        destroyCalendarListener,
        destroyKeyboardMO
      } = this;
      if (destroyCalendarListener !== undefined) {
        destroyCalendarListener();
      }
      if (destroyKeyboardMO !== undefined) {
        destroyKeyboardMO();
      }
    };
    this.processValue = value => {
      const hasValue = value !== null && value !== undefined;
      const valueToProcess = hasValue ? (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.q)(value) : this.defaultParts;
      const {
        minParts,
        maxParts
      } = this;
      this.warnIfIncorrectValueUsage();
      /**
       * Datetime should only warn of out of bounds values
       * if set by the user. If the `value` is undefined,
       * we will default to today's date which may be out
       * of bounds. In this case, the warning makes it look
       * like the developer did something wrong which is
       * not true.
       */
      if (hasValue) {
        (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.w)(valueToProcess, minParts, maxParts);
      }
      /**
       * If there are multiple values, pick an arbitrary one to clamp to. This way,
       * if the values are across months, we always show at least one of them. Note
       * that the values don't necessarily have to be in order.
       */
      const singleValue = Array.isArray(valueToProcess) ? valueToProcess[0] : valueToProcess;
      const {
        month,
        day,
        year,
        hour,
        minute
      } = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.P)(singleValue, minParts, maxParts);
      const ampm = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.Q)(hour);
      this.setWorkingParts({
        month,
        day,
        year,
        hour,
        minute,
        ampm
      });
      /**
       * Since `activeParts` indicates a value that
       * been explicitly selected either by the
       * user or the app, only update `activeParts`
       * if the `value` property is set.
       */
      if (hasValue) {
        if (Array.isArray(valueToProcess)) {
          this.activeParts = [...valueToProcess];
        } else {
          this.activeParts = {
            month,
            day,
            year,
            hour,
            minute,
            ampm
          };
        }
      } else {
        /**
         * Reset the active parts if the value is not set.
         * This will clear the selected calendar day when
         * performing a clear action or using the reset() method.
         */
        this.activeParts = [];
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.hasValue = () => {
      return this.value != null;
    };
    this.nextMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const nextMonth = calendarBodyRef.querySelector('.calendar-month:last-of-type');
      if (!nextMonth) {
        return;
      }
      const left = nextMonth.offsetWidth * 2;
      calendarBodyRef.scrollTo({
        top: 0,
        left: left * ((0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.el) ? -1 : 1),
        behavior: 'smooth'
      });
    };
    this.prevMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const prevMonth = calendarBodyRef.querySelector('.calendar-month:first-of-type');
      if (!prevMonth) {
        return;
      }
      calendarBodyRef.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };
    this.toggleMonthAndYearView = () => {
      this.showMonthAndYear = !this.showMonthAndYear;
    };
    this.showMonthAndYear = false;
    this.activeParts = [];
    this.workingParts = {
      month: 5,
      day: 28,
      year: 2021,
      hour: 13,
      minute: 52,
      ampm: 'pm'
    };
    this.isPresented = false;
    this.isTimePopoverOpen = false;
    this.color = 'primary';
    this.name = this.inputId;
    this.disabled = false;
    this.readonly = false;
    this.isDateEnabled = undefined;
    this.min = undefined;
    this.max = undefined;
    this.presentation = 'date-time';
    this.cancelText = 'Cancel';
    this.doneText = 'Done';
    this.clearText = 'Clear';
    this.yearValues = undefined;
    this.monthValues = undefined;
    this.dayValues = undefined;
    this.hourValues = undefined;
    this.minuteValues = undefined;
    this.locale = 'default';
    this.firstDayOfWeek = 0;
    this.titleSelectedDatesFormatter = undefined;
    this.multiple = false;
    this.highlightedDates = undefined;
    this.value = undefined;
    this.showDefaultTitle = false;
    this.showDefaultButtons = false;
    this.showClearButton = false;
    this.showDefaultTimeLabel = true;
    this.hourCycle = undefined;
    this.size = 'fixed';
    this.preferWheel = false;
  }
  disabledChanged() {
    this.emitStyle();
  }
  minChanged() {
    this.processMinParts();
  }
  maxChanged() {
    this.processMaxParts();
  }
  yearValuesChanged() {
    this.parsedYearValues = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.r)(this.yearValues);
  }
  monthValuesChanged() {
    this.parsedMonthValues = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.r)(this.monthValues);
  }
  dayValuesChanged() {
    this.parsedDayValues = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.r)(this.dayValues);
  }
  hourValuesChanged() {
    this.parsedHourValues = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.r)(this.hourValues);
  }
  minuteValuesChanged() {
    this.parsedMinuteValues = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.r)(this.minuteValues);
  }
  activePartsChanged() {
    this.activePartsClone = this.activeParts;
  }
  /**
   * Update the datetime value when the value changes
   */
  valueChanged() {
    const {
      value,
      minParts,
      maxParts,
      workingParts
    } = this;
    if (this.hasValue()) {
      this.warnIfIncorrectValueUsage();
      /**
       * Clones the value of the `activeParts` to the private clone, to update
       * the date display on the current render cycle without causing another render.
       *
       * This allows us to update the current value's date/time display without
       * refocusing or shifting the user's display (leaves the user in place).
       */
      const valueDateParts = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.q)(value);
      if (valueDateParts) {
        (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.w)(valueDateParts, minParts, maxParts);
        if (Array.isArray(valueDateParts)) {
          this.activePartsClone = [...valueDateParts];
        } else {
          const {
            month,
            day,
            year,
            hour,
            minute
          } = valueDateParts;
          const ampm = hour != null ? hour >= 12 ? 'pm' : 'am' : undefined;
          this.activePartsClone = Object.assign(Object.assign({}, this.activeParts), {
            month,
            day,
            year,
            hour,
            minute,
            ampm
          });
          /**
           * The working parts am/pm value must be updated when the value changes, to
           * ensure the time picker hour column values are generated correctly.
           *
           * Note that we don't need to do this if valueDateParts is an array, since
           * multiple="true" does not apply to time pickers.
           */
          this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
            ampm
          }));
        }
      } else {
        (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_6__.p)(`Unable to parse date string: ${value}. Please provide a valid ISO 8601 datetime string.`);
      }
    }
    this.emitStyle();
    this.ionValueChange.emit({
      value
    });
  }
  /**
   * Confirms the selected datetime value, updates the
   * `value` property, and optionally closes the popover
   * or modal that the datetime was presented in.
   */
  confirm(closeOverlay = false) {
    var _this = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        isCalendarPicker,
        activeParts
      } = _this;
      /**
       * We only update the value if the presentation is not a calendar picker.
       */
      if (activeParts !== undefined || !isCalendarPicker) {
        const activePartsIsArray = Array.isArray(activeParts);
        if (activePartsIsArray && activeParts.length === 0) {
          _this.setValue(undefined);
        } else {
          _this.setValue((0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.s)(activeParts));
        }
      }
      if (closeOverlay) {
        _this.closeParentOverlay();
      }
    })();
  }
  /**
   * Resets the internal state of the datetime but does not update the value.
   * Passing a valid ISO-8601 string will reset the state of the component to the provided date.
   * If no value is provided, the internal state will be reset to the clamped value of the min, max and today.
   */
  reset(startDate) {
    var _this2 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.processValue(startDate);
    })();
  }
  /**
   * Emits the ionCancel event and
   * optionally closes the popover
   * or modal that the datetime was
   * presented in.
   */
  cancel(closeOverlay = false) {
    var _this3 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.ionCancel.emit();
      if (closeOverlay) {
        _this3.closeParentOverlay();
      }
    })();
  }
  get isCalendarPicker() {
    const {
      presentation
    } = this;
    return presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
  }
  connectedCallback() {
    this.clearFocusVisible = (0,_focus_visible_10ad4867_js__WEBPACK_IMPORTED_MODULE_4__.startFocusVisible)(this.el).destroy;
  }
  disconnectedCallback() {
    if (this.clearFocusVisible) {
      this.clearFocusVisible();
      this.clearFocusVisible = undefined;
    }
  }
  initializeListeners() {
    this.initializeCalendarListener();
    this.initializeKeyboardListeners();
  }
  componentDidLoad() {
    /**
     * If a scrollable element is hidden using `display: none`,
     * it will not have a scroll height meaning we cannot scroll elements
     * into view. As a result, we will need to wait for the datetime to become
     * visible if used inside of a modal or a popover otherwise the scrollable
     * areas will not have the correct values snapped into place.
     */
    const visibleCallback = entries => {
      const ev = entries[0];
      if (!ev.isIntersecting) {
        return;
      }
      this.initializeListeners();
      /**
       * TODO FW-2793: Datetime needs a frame to ensure that it
       * can properly scroll contents into view. As a result
       * we hide the scrollable content until after that frame
       * so users do not see the content quickly shifting. The downside
       * is that the content will pop into view a frame after. Maybe there
       * is a better way to handle this?
       */
      (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
        this.el.classList.add('datetime-ready');
      });
    };
    const visibleIO = new IntersectionObserver(visibleCallback, {
      threshold: 0.01
    });
    /**
     * Use raf to avoid a race condition between the component loading and
     * its display animation starting (such as when shown in a modal). This
     * could cause the datetime to start at a visibility of 0, erroneously
     * triggering the `hiddenIO` observer below.
     */
    (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.r)(() => visibleIO === null || visibleIO === void 0 ? void 0 : visibleIO.observe(this.el));
    /**
     * We need to clean up listeners when the datetime is hidden
     * in a popover/modal so that we can properly scroll containers
     * back into view if they are re-presented. When the datetime is hidden
     * the scroll areas have scroll widths/heights of 0px, so any snapping
     * we did originally has been lost.
     */
    const hiddenCallback = entries => {
      const ev = entries[0];
      if (ev.isIntersecting) {
        return;
      }
      this.destroyInteractionListeners();
      /**
       * When datetime is hidden, we need to make sure that
       * the month/year picker is closed. Otherwise,
       * it will be open when the datetime re-appears
       * and the scroll area of the calendar grid will be 0.
       * As a result, the wrong month will be shown.
       */
      this.showMonthAndYear = false;
      (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
        this.el.classList.remove('datetime-ready');
      });
    };
    const hiddenIO = new IntersectionObserver(hiddenCallback, {
      threshold: 0
    });
    (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.r)(() => hiddenIO === null || hiddenIO === void 0 ? void 0 : hiddenIO.observe(this.el));
    /**
     * Datetime uses Ionic components that emit
     * ionFocus and ionBlur. These events are
     * composed meaning they will cross
     * the shadow dom boundary. We need to
     * stop propagation on these events otherwise
     * developers will see 2 ionFocus or 2 ionBlur
     * events at a time.
     */
    const root = (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.el);
    root.addEventListener('ionFocus', ev => ev.stopPropagation());
    root.addEventListener('ionBlur', ev => ev.stopPropagation());
  }
  /**
   * When the presentation is changed, all calendar content is recreated,
   * so we need to re-init behavior with the new elements.
   */
  componentDidRender() {
    const {
      presentation,
      prevPresentation,
      calendarBodyRef,
      minParts,
      preferWheel
    } = this;
    /**
     * TODO(FW-2165)
     * Remove this when https://bugs.webkit.org/show_bug.cgi?id=235960 is fixed.
     * When using `min`, we add `scroll-snap-align: none`
     * to the disabled month so that users cannot scroll to it.
     * This triggers a bug in WebKit where the scroll position is reset.
     * Since the month change logic is handled by a scroll listener,
     * this causes the month to change leading to `scroll-snap-align`
     * changing again, thus changing the scroll position again and causing
     * an infinite loop.
     * This issue only applies to the calendar grid, so we can disable
     * it if the calendar grid is not being used.
     */
    const hasCalendarGrid = !preferWheel && ['date-time', 'time-date', 'date'].includes(presentation);
    if (minParts !== undefined && hasCalendarGrid && calendarBodyRef) {
      const workingMonth = calendarBodyRef.querySelector('.calendar-month:nth-of-type(1)');
      if (workingMonth) {
        calendarBodyRef.scrollLeft = workingMonth.clientWidth * ((0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.el) ? -1 : 1);
      }
    }
    if (prevPresentation === null) {
      this.prevPresentation = presentation;
      return;
    }
    if (presentation === prevPresentation) {
      return;
    }
    this.prevPresentation = presentation;
    this.destroyInteractionListeners();
    this.initializeListeners();
    /**
     * The month/year picker from the date interface
     * should be closed as it is not available in non-date
     * interfaces.
     */
    this.showMonthAndYear = false;
    (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.r)(() => {
      this.ionRender.emit();
    });
  }
  componentWillLoad() {
    const {
      el,
      highlightedDates,
      multiple,
      presentation,
      preferWheel
    } = this;
    if (multiple) {
      if (presentation !== 'date') {
        (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_6__.p)('Multiple date selection is only supported for presentation="date".', el);
      }
      if (preferWheel) {
        (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_6__.p)('Multiple date selection is not supported with preferWheel="true".', el);
      }
    }
    if (highlightedDates !== undefined) {
      if (presentation !== 'date' && presentation !== 'date-time' && presentation !== 'time-date') {
        (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_6__.p)('The highlightedDates property is only supported with the date, date-time, and time-date presentations.', el);
      }
      if (preferWheel) {
        (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_6__.p)('The highlightedDates property is not supported with preferWheel="true".', el);
      }
    }
    this.processMinParts();
    this.processMaxParts();
    const hourValues = this.parsedHourValues = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.r)(this.hourValues);
    const minuteValues = this.parsedMinuteValues = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.r)(this.minuteValues);
    const monthValues = this.parsedMonthValues = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.r)(this.monthValues);
    const yearValues = this.parsedYearValues = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.r)(this.yearValues);
    const dayValues = this.parsedDayValues = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.r)(this.dayValues);
    const todayParts = this.todayParts = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.q)((0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.t)());
    this.defaultParts = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.u)(todayParts, monthValues, dayValues, yearValues, hourValues, minuteValues);
    this.processValue(this.value);
    this.emitStyle();
  }
  emitStyle() {
    this.ionStyle.emit({
      interactive: true,
      datetime: true,
      'interactive-disabled': this.disabled
    });
  }
  /**
   * Universal render methods
   * These are pieces of datetime that
   * are rendered independently of presentation.
   */
  renderFooter() {
    const {
      showDefaultButtons,
      showClearButton
    } = this;
    const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
    if (!hasSlottedButtons && !showDefaultButtons && !showClearButton) {
      return;
    }
    const clearButtonClick = () => {
      this.reset();
      this.setValue(undefined);
    };
    /**
     * By default we render two buttons:
     * Cancel - Dismisses the datetime and
     * does not update the `value` prop.
     * OK - Dismisses the datetime and
     * updates the `value` prop.
     */
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-footer"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-buttons"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: {
        ['datetime-action-buttons']: true,
        ['has-clear-button']: this.showClearButton
      }
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "buttons"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-buttons", null, showDefaultButtons && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-button", {
      id: "cancel-button",
      color: this.color,
      onClick: () => this.cancel(true)
    }, this.cancelText), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", null, showClearButton && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-button", {
      id: "clear-button",
      color: this.color,
      onClick: () => clearButtonClick()
    }, this.clearText), showDefaultButtons && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-button", {
      id: "confirm-button",
      color: this.color,
      onClick: () => this.confirm(true)
    }, this.doneText)))))));
  }
  /**
   * Wheel picker render methods
   */
  renderWheelPicker(forcePresentation = this.presentation) {
    /**
     * If presentation="time-date" we switch the
     * order of the render array here instead of
     * manually reordering each date/time picker
     * column with CSS. This allows for additional
     * flexibility if we need to render subsets
     * of the date/time data or do additional ordering
     * within the child render functions.
     */
    const renderArray = forcePresentation === 'time-date' ? [this.renderTimePickerColumns(forcePresentation), this.renderDatePickerColumns(forcePresentation)] : [this.renderDatePickerColumns(forcePresentation), this.renderTimePickerColumns(forcePresentation)];
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-internal", null, renderArray);
  }
  renderDatePickerColumns(forcePresentation) {
    return forcePresentation === 'date-time' || forcePresentation === 'time-date' ? this.renderCombinedDatePickerColumn() : this.renderIndividualDatePickerColumns(forcePresentation);
  }
  renderCombinedDatePickerColumn() {
    const {
      defaultParts,
      workingParts,
      locale,
      minParts,
      maxParts,
      todayParts,
      isDateEnabled
    } = this;
    const activePart = this.getActivePartsWithFallback();
    /**
     * By default, generate a range of 3 months:
     * Previous month, current month, and next month
     */
    const monthsToRender = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.I)(workingParts);
    const lastMonth = monthsToRender[monthsToRender.length - 1];
    /**
     * Ensure that users can select the entire window of dates.
     */
    monthsToRender[0].day = 1;
    lastMonth.day = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.x)(lastMonth.month, lastMonth.year);
    /**
     * Narrow the dates rendered based on min/max dates (if any).
     * The `min` date is used if the min is after the generated min month.
     * The `max` date is used if the max is before the generated max month.
     * This ensures that the sliding window always stays at 3 months
     * but still allows future dates to be lazily rendered based on any min/max
     * constraints.
     */
    const min = minParts !== undefined && (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.b)(minParts, monthsToRender[0]) ? minParts : monthsToRender[0];
    const max = maxParts !== undefined && (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.i)(maxParts, lastMonth) ? maxParts : lastMonth;
    const result = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.y)(locale, todayParts, min, max, this.parsedDayValues, this.parsedMonthValues);
    let items = result.items;
    const parts = result.parts;
    if (isDateEnabled) {
      items = items.map((itemObject, index) => {
        const referenceParts = parts[index];
        let disabled;
        try {
          /**
           * The `isDateEnabled` implementation is try-catch wrapped
           * to prevent exceptions in the user's function from
           * interrupting the calendar rendering.
           */
          disabled = !isDateEnabled((0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.s)(referenceParts));
        } catch (e) {
          (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_6__.a)('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', e);
        }
        return Object.assign(Object.assign({}, itemObject), {
          disabled
        });
      });
    }
    /**
     * If we have selected a day already, then default the column
     * to that value. Otherwise, set it to the default date.
     */
    const todayString = workingParts.day !== null ? `${workingParts.year}-${workingParts.month}-${workingParts.day}` : `${defaultParts.year}-${defaultParts.month}-${defaultParts.day}`;
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-internal", {
      class: "date-column",
      color: this.color,
      items: items,
      value: todayString,
      onIonChange: ev => {
        // TODO(FW-1823) Remove this when iOS 14 support is dropped.
        // Due to a Safari 14 issue we need to destroy
        // the scroll listener before we update state
        // and trigger a re-render.
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        const {
          value
        } = ev.detail;
        const findPart = parts.find(({
          month,
          day,
          year
        }) => value === `${year}-${month}-${day}`);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), findPart));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), findPart));
        // We can re-attach the scroll listener after
        // the working parts have been updated.
        this.initializeCalendarListener();
        ev.stopPropagation();
      }
    });
  }
  renderIndividualDatePickerColumns(forcePresentation) {
    const {
      workingParts,
      isDateEnabled
    } = this;
    const shouldRenderMonths = forcePresentation !== 'year' && forcePresentation !== 'time';
    const months = shouldRenderMonths ? (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.z)(this.locale, workingParts, this.minParts, this.maxParts, this.parsedMonthValues) : [];
    const shouldRenderDays = forcePresentation === 'date';
    let days = shouldRenderDays ? (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.A)(this.locale, workingParts, this.minParts, this.maxParts, this.parsedDayValues) : [];
    if (isDateEnabled) {
      days = days.map(dayObject => {
        const {
          value
        } = dayObject;
        const valueNum = typeof value === 'string' ? parseInt(value) : value;
        const referenceParts = {
          month: workingParts.month,
          day: valueNum,
          year: workingParts.year
        };
        let disabled;
        try {
          /**
           * The `isDateEnabled` implementation is try-catch wrapped
           * to prevent exceptions in the user's function from
           * interrupting the calendar rendering.
           */
          disabled = !isDateEnabled((0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.s)(referenceParts));
        } catch (e) {
          (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_6__.a)('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', e);
        }
        return Object.assign(Object.assign({}, dayObject), {
          disabled
        });
      });
    }
    const shouldRenderYears = forcePresentation !== 'month' && forcePresentation !== 'time';
    const years = shouldRenderYears ? (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.B)(this.locale, this.defaultParts, this.minParts, this.maxParts, this.parsedYearValues) : [];
    /**
     * Certain locales show the day before the month.
     */
    const showMonthFirst = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.C)(this.locale, {
      month: 'numeric',
      day: 'numeric'
    });
    let renderArray = [];
    if (showMonthFirst) {
      renderArray = [this.renderMonthPickerColumn(months), this.renderDayPickerColumn(days), this.renderYearPickerColumn(years)];
    } else {
      renderArray = [this.renderDayPickerColumn(days), this.renderMonthPickerColumn(months), this.renderYearPickerColumn(years)];
    }
    return renderArray;
  }
  renderDayPickerColumn(days) {
    var _a;
    if (days.length === 0) {
      return [];
    }
    const {
      workingParts
    } = this;
    const activePart = this.getActivePartsWithFallback();
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-internal", {
      class: "day-column",
      color: this.color,
      items: days,
      value: (_a = workingParts.day !== null ? workingParts.day : this.defaultParts.day) !== null && _a !== void 0 ? _a : undefined,
      onIonChange: ev => {
        // TODO(FW-1823) Remove this when iOS 14 support is dropped.
        // Due to a Safari 14 issue we need to destroy
        // the scroll listener before we update state
        // and trigger a re-render.
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          day: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          day: ev.detail.value
        }));
        // We can re-attach the scroll listener after
        // the working parts have been updated.
        this.initializeCalendarListener();
        ev.stopPropagation();
      }
    });
  }
  renderMonthPickerColumn(months) {
    if (months.length === 0) {
      return [];
    }
    const {
      workingParts
    } = this;
    const activePart = this.getActivePartsWithFallback();
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-internal", {
      class: "month-column",
      color: this.color,
      items: months,
      value: workingParts.month,
      onIonChange: ev => {
        // TODO(FW-1823) Remove this when iOS 14 support is dropped.
        // Due to a Safari 14 issue we need to destroy
        // the scroll listener before we update state
        // and trigger a re-render.
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          month: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          month: ev.detail.value
        }));
        // We can re-attach the scroll listener after
        // the working parts have been updated.
        this.initializeCalendarListener();
        ev.stopPropagation();
      }
    });
  }
  renderYearPickerColumn(years) {
    if (years.length === 0) {
      return [];
    }
    const {
      workingParts
    } = this;
    const activePart = this.getActivePartsWithFallback();
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-internal", {
      class: "year-column",
      color: this.color,
      items: years,
      value: workingParts.year,
      onIonChange: ev => {
        // TODO(FW-1823) Remove this when iOS 14 support is dropped.
        // Due to a Safari 14 issue we need to destroy
        // the scroll listener before we update state
        // and trigger a re-render.
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          year: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          year: ev.detail.value
        }));
        // We can re-attach the scroll listener after
        // the working parts have been updated.
        this.initializeCalendarListener();
        ev.stopPropagation();
      }
    });
  }
  renderTimePickerColumns(forcePresentation) {
    if (['date', 'month', 'month-year', 'year'].includes(forcePresentation)) {
      return [];
    }
    /**
     * If a user has not selected a date,
     * then we should show all times. If the
     * user has selected a date (even if it has
     * not been confirmed yet), we should apply
     * the max and min restrictions so that the
     * time picker shows values that are
     * appropriate for the selected date.
     */
    const activePart = this.getActivePart();
    const userHasSelectedDate = activePart !== undefined;
    const {
      hoursData,
      minutesData,
      dayPeriodData
    } = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.D)(this.locale, this.workingParts, this.hourCycle, userHasSelectedDate ? this.minParts : undefined, userHasSelectedDate ? this.maxParts : undefined, this.parsedHourValues, this.parsedMinuteValues);
    return [this.renderHourPickerColumn(hoursData), this.renderMinutePickerColumn(minutesData), this.renderDayPeriodPickerColumn(dayPeriodData)];
  }
  renderHourPickerColumn(hoursData) {
    const {
      workingParts
    } = this;
    if (hoursData.length === 0) return [];
    const activePart = this.getActivePartsWithFallback();
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-internal", {
      color: this.color,
      value: activePart.hour,
      items: hoursData,
      numericInput: true,
      onIonChange: ev => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          hour: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          hour: ev.detail.value
        }));
        ev.stopPropagation();
      }
    });
  }
  renderMinutePickerColumn(minutesData) {
    const {
      workingParts
    } = this;
    if (minutesData.length === 0) return [];
    const activePart = this.getActivePartsWithFallback();
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-internal", {
      color: this.color,
      value: activePart.minute,
      items: minutesData,
      numericInput: true,
      onIonChange: ev => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          minute: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          minute: ev.detail.value
        }));
        ev.stopPropagation();
      }
    });
  }
  renderDayPeriodPickerColumn(dayPeriodData) {
    const {
      workingParts
    } = this;
    if (dayPeriodData.length === 0) {
      return [];
    }
    const activePart = this.getActivePartsWithFallback();
    const isDayPeriodRTL = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.E)(this.locale);
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-internal", {
      style: isDayPeriodRTL ? {
        order: '-1'
      } : {},
      color: this.color,
      value: activePart.ampm,
      items: dayPeriodData,
      onIonChange: ev => {
        const hour = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.R)(workingParts, ev.detail.value);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          ampm: ev.detail.value,
          hour
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          ampm: ev.detail.value,
          hour
        }));
        ev.stopPropagation();
      }
    });
  }
  renderWheelView(forcePresentation) {
    const {
      locale
    } = this;
    const showMonthFirst = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.C)(locale);
    const columnOrder = showMonthFirst ? 'month-first' : 'year-first';
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: {
        [`wheel-order-${columnOrder}`]: true
      }
    }, this.renderWheelPicker(forcePresentation));
  }
  /**
   * Grid Render Methods
   */
  renderCalendarHeader(mode) {
    const expandedIcon = mode === 'ios' ? _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_2__.l : _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_2__.p;
    const collapsedIcon = mode === 'ios' ? _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_2__.o : _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_2__.q;
    const prevMonthDisabled = isPrevMonthDisabled(this.workingParts, this.minParts, this.maxParts);
    const nextMonthDisabled = isNextMonthDisabled(this.workingParts, this.maxParts);
    // don't use the inheritAttributes util because it removes dir from the host, and we still need that
    const hostDir = this.el.getAttribute('dir') || undefined;
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-header"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-action-buttons"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-month-year"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-item", {
      ref: el => this.monthYearToggleItemRef = el,
      button: true,
      "aria-label": "Show year picker",
      detail: false,
      lines: "none",
      onClick: () => {
        var _a;
        this.toggleMonthAndYearView();
        /**
         * TODO: FW-3547
         *
         * Currently there is not a way to set the aria-label on the inner button
         * on the `ion-item` and have it be reactive to changes. This is a workaround
         * until we either refactor `ion-item` to a button or Stencil adds a way to
         * have reactive props for built-in properties, such as `aria-label`.
         */
        const {
          monthYearToggleItemRef
        } = this;
        if (monthYearToggleItemRef) {
          const btn = (_a = monthYearToggleItemRef.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.item-native');
          if (btn) {
            const monthYearAriaLabel = this.showMonthAndYear ? 'Hide year picker' : 'Show year picker';
            btn.setAttribute('aria-label', monthYearAriaLabel);
          }
        }
      }
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-label", null, (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.G)(this.locale, this.workingParts), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      "aria-hidden": "true",
      icon: this.showMonthAndYear ? expandedIcon : collapsedIcon,
      lazy: false,
      flipRtl: true
    })))), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-next-prev"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-buttons", null, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-button", {
      "aria-label": "Previous month",
      disabled: prevMonthDisabled,
      onClick: () => this.prevMonth()
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      dir: hostDir,
      "aria-hidden": "true",
      slot: "icon-only",
      icon: _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_2__.c,
      lazy: false,
      flipRtl: true
    })), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-button", {
      "aria-label": "Next month",
      disabled: nextMonthDisabled,
      onClick: () => this.nextMonth()
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      dir: hostDir,
      "aria-hidden": "true",
      slot: "icon-only",
      icon: _index_393bc14a_js__WEBPACK_IMPORTED_MODULE_2__.o,
      lazy: false,
      flipRtl: true
    }))))), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-days-of-week",
      "aria-hidden": "true"
    }, (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.F)(this.locale, mode, this.firstDayOfWeek % 7).map(d => {
      return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "day-of-week"
      }, d);
    })));
  }
  renderMonth(month, year) {
    const yearAllowed = this.parsedYearValues === undefined || this.parsedYearValues.includes(year);
    const monthAllowed = this.parsedMonthValues === undefined || this.parsedMonthValues.includes(month);
    const isCalMonthDisabled = !yearAllowed || !monthAllowed;
    const swipeDisabled = isMonthDisabled({
      month,
      year,
      day: null
    }, {
      // The day is not used when checking if a month is disabled.
      // Users should be able to access the min or max month, even if the
      // min/max date is out of bounds (e.g. min is set to Feb 15, Feb should not be disabled).
      minParts: Object.assign(Object.assign({}, this.minParts), {
        day: null
      }),
      maxParts: Object.assign(Object.assign({}, this.maxParts), {
        day: null
      })
    });
    // The working month should never have swipe disabled.
    // Otherwise the CSS scroll snap will not work and the user
    // can free-scroll the calendar.
    const isWorkingMonth = this.workingParts.month === month && this.workingParts.year === year;
    const activePart = this.getActivePartsWithFallback();
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      "aria-hidden": !isWorkingMonth ? 'true' : null,
      class: {
        'calendar-month': true,
        // Prevents scroll snap swipe gestures for months outside of the min/max bounds
        'calendar-month-disabled': !isWorkingMonth && swipeDisabled
      }
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-month-grid"
    }, (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.H)(month, year, this.firstDayOfWeek % 7).map((dateObject, index) => {
      const {
        day,
        dayOfWeek
      } = dateObject;
      const {
        el,
        highlightedDates,
        isDateEnabled,
        multiple
      } = this;
      const referenceParts = {
        month,
        day,
        year
      };
      const isCalendarPadding = day === null;
      const {
        isActive,
        isToday,
        ariaLabel,
        ariaSelected,
        disabled,
        text
      } = getCalendarDayState(this.locale, referenceParts, this.activePartsClone, this.todayParts, this.minParts, this.maxParts, this.parsedDayValues);
      const dateIsoString = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.s)(referenceParts);
      let isCalDayDisabled = isCalMonthDisabled || disabled;
      if (!isCalDayDisabled && isDateEnabled !== undefined) {
        try {
          /**
           * The `isDateEnabled` implementation is try-catch wrapped
           * to prevent exceptions in the user's function from
           * interrupting the calendar rendering.
           */
          isCalDayDisabled = !isDateEnabled(dateIsoString);
        } catch (e) {
          (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_6__.a)('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', el, e);
        }
      }
      let dateStyle = undefined;
      /**
       * Custom highlight styles should not override the style for selected dates,
       * nor apply to "filler days" at the start of the grid.
       */
      if (highlightedDates !== undefined && !isActive && day !== null) {
        dateStyle = getHighlightStyles(highlightedDates, dateIsoString, el);
      }
      return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
        tabindex: "-1",
        "data-day": day,
        "data-month": month,
        "data-year": year,
        "data-index": index,
        "data-day-of-week": dayOfWeek,
        disabled: isCalDayDisabled,
        class: {
          'calendar-day-padding': isCalendarPadding,
          'calendar-day': true,
          'calendar-day-active': isActive,
          'calendar-day-today': isToday
        },
        style: dateStyle && {
          color: dateStyle.textColor
        },
        "aria-hidden": isCalendarPadding ? 'true' : null,
        "aria-selected": ariaSelected,
        "aria-label": ariaLabel,
        onClick: () => {
          if (isCalendarPadding) {
            return;
          }
          this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), {
            month,
            day,
            year
          }));
          // multiple only needs date info, so we can wipe out other fields like time
          if (multiple) {
            this.setActiveParts({
              month,
              day,
              year
            }, isActive);
          } else {
            this.setActiveParts(Object.assign(Object.assign({}, activePart), {
              month,
              day,
              year
            }));
          }
        }
      }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "calendar-day-highlight",
        style: {
          backgroundColor: dateStyle === null || dateStyle === void 0 ? void 0 : dateStyle.backgroundColor
        }
      }), text);
    })));
  }
  renderCalendarBody() {
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-body ion-focusable",
      ref: el => this.calendarBodyRef = el,
      tabindex: "0"
    }, (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.I)(this.workingParts).map(({
      month,
      year
    }) => {
      return this.renderMonth(month, year);
    }));
  }
  renderCalendar(mode) {
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-calendar",
      key: "datetime-calendar"
    }, this.renderCalendarHeader(mode), this.renderCalendarBody());
  }
  renderTimeLabel() {
    const hasSlottedTimeLabel = this.el.querySelector('[slot="time-label"]') !== null;
    if (!hasSlottedTimeLabel && !this.showDefaultTimeLabel) {
      return;
    }
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "time-label"
    }, "Time");
  }
  renderTimeOverlay() {
    var _this4 = this;
    const use24Hour = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.J)(this.locale, this.hourCycle);
    const activePart = this.getActivePartsWithFallback();
    return [(0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "time-header"
    }, this.renderTimeLabel()), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      class: {
        'time-body': true,
        'time-body-active': this.isTimePopoverOpen
      },
      "aria-expanded": "false",
      "aria-haspopup": "true",
      onClick: function () {
        var _ref = (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev) {
          const {
            popoverRef
          } = _this4;
          if (popoverRef) {
            _this4.isTimePopoverOpen = true;
            popoverRef.present(new CustomEvent('ionShadowTarget', {
              detail: {
                ionShadowTarget: ev.target
              }
            }));
            yield popoverRef.onWillDismiss();
            _this4.isTimePopoverOpen = false;
          }
        });
        return function onClick(_x) {
          return _ref.apply(this, arguments);
        };
      }()
    }, (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.K)(this.locale, activePart, use24Hour)), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-popover", {
      alignment: "center",
      translucent: true,
      overlayIndex: 1,
      arrow: false,
      onWillPresent: ev => {
        /**
         * Intersection Observers do not consistently fire between Blink and Webkit
         * when toggling the visibility of the popover and trying to scroll the picker
         * column to the correct time value.
         *
         * This will correctly scroll the element position to the correct time value,
         * before the popover is fully presented.
         */
        const cols = ev.target.querySelectorAll('ion-picker-column-internal');
        // TODO (FW-615): Potentially remove this when intersection observers are fixed in picker column
        cols.forEach(col => col.scrollActiveItemIntoView());
      },
      style: {
        '--offset-y': '-10px',
        '--min-width': 'fit-content'
      },
      // Allow native browser keyboard events to support up/down/home/end key
      // navigation within the time picker.
      keyboardEvents: true,
      ref: el => this.popoverRef = el
    }, this.renderWheelPicker('time'))];
  }
  getHeaderSelectedDateText() {
    const {
      activeParts,
      multiple,
      titleSelectedDatesFormatter
    } = this;
    const isArray = Array.isArray(activeParts);
    let headerText;
    if (multiple && isArray && activeParts.length !== 1) {
      headerText = `${activeParts.length} days`; // default/fallback for multiple selection
      if (titleSelectedDatesFormatter !== undefined) {
        try {
          headerText = titleSelectedDatesFormatter((0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.s)(activeParts));
        } catch (e) {
          (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_6__.a)('Exception in provided `titleSelectedDatesFormatter`: ', e);
        }
      }
    } else {
      // for exactly 1 day selected (multiple set or not), show a formatted version of that
      headerText = (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.L)(this.locale, this.getActivePartsWithFallback());
    }
    return headerText;
  }
  renderHeader(showExpandedHeader = true) {
    const hasSlottedTitle = this.el.querySelector('[slot="title"]') !== null;
    if (!hasSlottedTitle && !this.showDefaultTitle) {
      return;
    }
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-header"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-title"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "title"
    }, "Select Date")), showExpandedHeader && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-selected-date"
    }, this.getHeaderSelectedDateText()));
  }
  /**
   * Render time picker inside of datetime.
   * Do not pass color prop to segment on
   * iOS mode. MD segment has been customized and
   * should take on the color prop, but iOS
   * should just be the default segment.
   */
  renderTime() {
    const {
      presentation
    } = this;
    const timeOnlyPresentation = presentation === 'time';
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-time"
    }, timeOnlyPresentation ? this.renderWheelPicker() : this.renderTimeOverlay());
  }
  /**
   * Renders the month/year picker that is
   * displayed on the calendar grid.
   * The .datetime-year class has additional
   * styles that let us show/hide the
   * picker when the user clicks on the
   * toggle in the calendar header.
   */
  renderCalendarViewMonthYearPicker() {
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-year"
    }, this.renderWheelView('month-year'));
  }
  /**
   * Render entry point
   * All presentation types are rendered from here.
   */
  renderDatetime(mode) {
    const {
      presentation,
      preferWheel
    } = this;
    /**
     * Certain presentation types have separate grid and wheel displays.
     * If preferWheel is true then we should show a wheel picker instead.
     */
    const hasWheelVariant = presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
    if (preferWheel && hasWheelVariant) {
      return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
    }
    switch (presentation) {
      case 'date-time':
        return [this.renderHeader(), this.renderCalendar(mode), this.renderCalendarViewMonthYearPicker(), this.renderTime(), this.renderFooter()];
      case 'time-date':
        return [this.renderHeader(), this.renderTime(), this.renderCalendar(mode), this.renderCalendarViewMonthYearPicker(), this.renderFooter()];
      case 'time':
        return [this.renderHeader(false), this.renderTime(), this.renderFooter()];
      case 'month':
      case 'month-year':
      case 'year':
        return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
      default:
        return [this.renderHeader(), this.renderCalendar(mode), this.renderCalendarViewMonthYearPicker(), this.renderFooter()];
    }
  }
  render() {
    const {
      name,
      value,
      disabled,
      el,
      color,
      isPresented,
      readonly,
      showMonthAndYear,
      preferWheel,
      presentation,
      size
    } = this;
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    const isMonthAndYearPresentation = presentation === 'year' || presentation === 'month' || presentation === 'month-year';
    const shouldShowMonthAndYear = showMonthAndYear || isMonthAndYearPresentation;
    const monthYearPickerOpen = showMonthAndYear && !isMonthAndYearPresentation;
    const hasDatePresentation = presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
    const hasWheelVariant = hasDatePresentation && preferWheel;
    const hasGrid = hasDatePresentation && !preferWheel;
    (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.d)(true, el, name, (0,_data_b8307d99_js__WEBPACK_IMPORTED_MODULE_9__.M)(value), disabled);
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      "aria-disabled": disabled ? 'true' : null,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      class: Object.assign({}, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_8__.c)(color, {
        [mode]: true,
        ['datetime-presented']: isPresented,
        ['datetime-readonly']: readonly,
        ['datetime-disabled']: disabled,
        'show-month-and-year': shouldShowMonthAndYear,
        'month-year-picker-open': monthYearPickerOpen,
        [`datetime-presentation-${presentation}`]: true,
        [`datetime-size-${size}`]: true,
        [`datetime-prefer-wheel`]: hasWheelVariant,
        [`datetime-grid`]: hasGrid
      }))
    }, this.renderDatetime(mode));
  }
  get el() {
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"],
      "min": ["minChanged"],
      "max": ["maxChanged"],
      "yearValues": ["yearValuesChanged"],
      "monthValues": ["monthValuesChanged"],
      "dayValues": ["dayValuesChanged"],
      "hourValues": ["hourValuesChanged"],
      "minuteValues": ["minuteValuesChanged"],
      "activeParts": ["activePartsChanged"],
      "value": ["valueChanged"]
    };
  }
};
let datetimeIds = 0;
Datetime.style = {
  ios: datetimeIosCss,
  md: datetimeMdCss
};

/**
 * iOS Picker Enter Animation
 */
const iosEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_11__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_11__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_11__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.picker-wrapper')).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Picker Leave Animation
 */
const iosLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_11__.c)();
  const backdropAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_11__.c)();
  const wrapperAnimation = (0,_animation_258fd22b_js__WEBPACK_IMPORTED_MODULE_11__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0.01);
  wrapperAnimation.addElement(baseEl.querySelector('.picker-wrapper')).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};
const pickerIosCss = ".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}@supports (inset-inline-start: 0){.sc-ion-picker-ios-h{inset-inline-start:0}}@supports not (inset-inline-start: 0){.sc-ion-picker-ios-h{left:0}[dir=rtl].sc-ion-picker-ios-h,[dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.sc-ion-picker-ios-h:dir(rtl){left:unset;right:unset;right:0}}}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active,.picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios,.picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:16px}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}@supports (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-ios{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-ios{left:0}[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-above-highlight.sc-ion-picker-ios:dir(rtl){left:unset;right:unset;right:0}}}.picker-below-highlight.sc-ion-picker-ios{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}@supports (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-ios{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-ios{left:0}[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-below-highlight.sc-ion-picker-ios:dir(rtl){left:unset;right:unset;right:0}}}";
const pickerMdCss = ".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}@supports (inset-inline-start: 0){.sc-ion-picker-md-h{inset-inline-start:0}}@supports not (inset-inline-start: 0){.sc-ion-picker-md-h{left:0}[dir=rtl].sc-ion-picker-md-h,[dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.sc-ion-picker-md-h:dir(rtl){left:unset;right:unset;right:0}}}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active,.picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-md,.picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}@supports (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-md{left:0}[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-above-highlight.sc-ion-picker-md:dir(rtl){left:unset;right:unset;right:0}}}.picker-below-highlight.sc-ion-picker-md{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}@supports (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-md{left:0}[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-below-highlight.sc-ion-picker-md:dir(rtl){left:unset;right:unset;right:0}}}";
const Picker = class {
  constructor(hostRef) {
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.didPresent = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionPickerDidPresent", 7);
    this.willPresent = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionPickerWillPresent", 7);
    this.willDismiss = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionPickerWillDismiss", 7);
    this.didDismiss = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionPickerDidDismiss", 7);
    this.didPresentShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didPresent", 7);
    this.willPresentShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willPresent", 7);
    this.willDismissShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willDismiss", 7);
    this.didDismissShorthand = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didDismiss", 7);
    this.delegateController = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_10__.d)(this);
    this.triggerController = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_10__.e)();
    this.onBackdropTap = () => {
      this.dismiss(undefined, _overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_10__.B);
    };
    this.dispatchCancelHandler = ev => {
      const role = ev.detail.role;
      if ((0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_10__.i)(role)) {
        const cancelButton = this.buttons.find(b => b.role === 'cancel');
        this.callButtonHandler(cancelButton);
      }
    };
    this.presented = false;
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.buttons = [];
    this.columns = [];
    this.cssClass = undefined;
    this.duration = 0;
    this.showBackdrop = true;
    this.backdropDismiss = true;
    this.animated = true;
    this.htmlAttributes = undefined;
    this.isOpen = false;
    this.trigger = undefined;
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  triggerChanged() {
    const {
      trigger,
      el,
      triggerController
    } = this;
    if (trigger) {
      triggerController.addClickListener(el, trigger);
    }
  }
  connectedCallback() {
    (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_10__.j)(this.el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_10__.k)(this.el);
  }
  /**
   * Present the picker overlay after it has been created.
   */
  present() {
    var _this5 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /**
       * When using an inline picker
       * and dismissing an picker it is possible to
       * quickly present the picker while it is
       * dismissing. We need to await any current
       * transition to allow the dismiss to finish
       * before presenting again.
       */
      if (_this5.currentTransition !== undefined) {
        yield _this5.currentTransition;
      }
      yield _this5.delegateController.attachViewToDom();
      _this5.currentTransition = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_10__.f)(_this5, 'pickerEnter', iosEnterAnimation, iosEnterAnimation, undefined);
      yield _this5.currentTransition;
      _this5.currentTransition = undefined;
      if (_this5.duration > 0) {
        _this5.durationTimeout = setTimeout(() => _this5.dismiss(), _this5.duration);
      }
    })();
  }
  /**
   * Dismiss the picker overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the picker.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the picker.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    var _this6 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.durationTimeout) {
        clearTimeout(_this6.durationTimeout);
      }
      _this6.currentTransition = (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_10__.g)(_this6, data, role, 'pickerLeave', iosLeaveAnimation, iosLeaveAnimation);
      const dismissed = yield _this6.currentTransition;
      if (dismissed) {
        _this6.delegateController.removeViewFromDom();
      }
      return dismissed;
    })();
  }
  /**
   * Returns a promise that resolves when the picker did dismiss.
   */
  onDidDismiss() {
    return (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_10__.h)(this.el, 'ionPickerDidDismiss');
  }
  /**
   * Returns a promise that resolves when the picker will dismiss.
   */
  onWillDismiss() {
    return (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_10__.h)(this.el, 'ionPickerWillDismiss');
  }
  /**
   * Get the column that matches the specified name.
   *
   * @param name The name of the column.
   */
  getColumn(name) {
    return Promise.resolve(this.columns.find(column => column.name === name));
  }
  buttonClick(button) {
    var _this7 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const role = button.role;
      if ((0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_10__.i)(role)) {
        return _this7.dismiss(undefined, role);
      }
      const shouldDismiss = yield _this7.callButtonHandler(button);
      if (shouldDismiss) {
        return _this7.dismiss(_this7.getSelected(), button.role);
      }
      return Promise.resolve();
    })();
  }
  callButtonHandler(button) {
    var _this8 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (button) {
        // a handler has been provided, execute it
        // pass the handler the values from the inputs
        const rtn = yield (0,_overlays_4101c476_js__WEBPACK_IMPORTED_MODULE_10__.s)(button.handler, _this8.getSelected());
        if (rtn === false) {
          // if the return value of the handler is false then do not dismiss
          return false;
        }
      }
      return true;
    })();
  }
  getSelected() {
    const selected = {};
    this.columns.forEach((col, index) => {
      const selectedColumn = col.selectedIndex !== undefined ? col.options[col.selectedIndex] : undefined;
      selected[col.name] = {
        text: selectedColumn ? selectedColumn.text : undefined,
        value: selectedColumn ? selectedColumn.value : undefined,
        columnIndex: index
      };
    });
    return selected;
  }
  render() {
    const {
      htmlAttributes
    } = this;
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.H, Object.assign({
      "aria-modal": "true",
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${20000 + this.overlayIndex}`
      },
      class: Object.assign({
        [mode]: true,
        // Used internally for styling
        [`picker-${mode}`]: true,
        'overlay-hidden': true
      }, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_8__.g)(this.cssClass)),
      onIonBackdropTap: this.onBackdropTap,
      onIonPickerWillDismiss: this.dispatchCancelHandler
    }), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-backdrop", {
      visible: this.showBackdrop,
      tappable: this.backdropDismiss
    }), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      tabindex: "0"
    }), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-wrapper ion-overlay-wrapper",
      role: "dialog"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-toolbar"
    }, this.buttons.map(b => (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: buttonWrapperClass(b)
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      type: "button",
      onClick: () => this.buttonClick(b),
      class: buttonClass(b)
    }, b.text)))), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-columns"
    }, (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-above-highlight"
    }), this.presented && this.columns.map(c => (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column", {
      col: c
    })), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-below-highlight"
    }))), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      tabindex: "0"
    }));
  }
  get el() {
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
};
const buttonWrapperClass = button => {
  return {
    [`picker-toolbar-${button.role}`]: button.role !== undefined,
    'picker-toolbar-button': true
  };
};
const buttonClass = button => {
  return Object.assign({
    'picker-button': true,
    'ion-activatable': true
  }, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_8__.g)(button.cssClass));
};
Picker.style = {
  ios: pickerIosCss,
  md: pickerMdCss
};
const pickerColumnIosCss = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}@supports (inset-inline-start: 0){.picker-opt{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-opt{left:0}:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}[dir=rtl] .picker-opt{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){left:unset;right:unset;right:0}}}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}";
const pickerColumnMdCss = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}@supports (inset-inline-start: 0){.picker-opt{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-opt{left:0}:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}[dir=rtl] .picker-opt{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){left:unset;right:unset;right:0}}}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}";
const PickerColumnCmp = class {
  constructor(hostRef) {
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionPickerColChange = (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionPickerColChange", 7);
    this.optHeight = 0;
    this.rotateFactor = 0;
    this.scaleFactor = 1;
    this.velocity = 0;
    this.y = 0;
    this.noAnimate = true;
    // `colDidChange` is a flag that gets set when the column is changed
    // dynamically. When this flag is set, the column will refresh
    // after the component re-renders to incorporate the new column data.
    // This is necessary because `this.refresh` queries for the option elements,
    // so it needs to wait for the latest elements to be available in the DOM.
    // Ex: column is created with 3 options. User updates the column data
    // to have 5 options. The column will still think it only has 3 options.
    this.colDidChange = false;
    this.col = undefined;
  }
  colChanged() {
    this.colDidChange = true;
  }
  connectedCallback() {
    var _this9 = this;
    return (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let pickerRotateFactor = 0;
      let pickerScaleFactor = 0.81;
      const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_3__.b)(_this9);
      if (mode === 'ios') {
        pickerRotateFactor = -0.46;
        pickerScaleFactor = 1;
      }
      _this9.rotateFactor = pickerRotateFactor;
      _this9.scaleFactor = pickerScaleFactor;
      _this9.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-422b6e83.js */ 96178))).createGesture({
        el: _this9.el,
        gestureName: 'picker-swipe',
        gesturePriority: 100,
        threshold: 0,
        passive: false,
        onStart: ev => _this9.onStart(ev),
        onMove: ev => _this9.onMove(ev),
        onEnd: ev => _this9.onEnd(ev)
      });
      _this9.gesture.enable();
      // Options have not been initialized yet
      // Animation must be disabled through the `noAnimate` flag
      // Otherwise, the options will render
      // at the top of the column and transition down
      _this9.tmrId = setTimeout(() => {
        _this9.noAnimate = false;
        // After initialization, `refresh()` will be called
        // At this point, animation will be enabled. The options will
        // animate as they are being selected.
        _this9.refresh(true);
      }, 250);
    })();
  }
  componentDidLoad() {
    this.onDomChange();
  }
  componentDidUpdate() {
    // Options may have changed since last update.
    if (this.colDidChange) {
      // Animation must be disabled through the `onDomChange` parameter.
      // Otherwise, the recently added options will render
      // at the top of the column and transition down
      this.onDomChange(true, false);
      this.colDidChange = false;
    }
  }
  disconnectedCallback() {
    if (this.rafId !== undefined) cancelAnimationFrame(this.rafId);
    if (this.tmrId) clearTimeout(this.tmrId);
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  emitColChange() {
    this.ionPickerColChange.emit(this.col);
  }
  setSelected(selectedIndex, duration) {
    // if there is a selected index, then figure out it's y position
    // if there isn't a selected index, then just use the top y position
    const y = selectedIndex > -1 ? -(selectedIndex * this.optHeight) : 0;
    this.velocity = 0;
    // set what y position we're at
    if (this.rafId !== undefined) cancelAnimationFrame(this.rafId);
    this.update(y, duration, true);
    this.emitColChange();
  }
  update(y, duration, saveY) {
    if (!this.optsEl) {
      return;
    }
    // ensure we've got a good round number :)
    let translateY = 0;
    let translateZ = 0;
    const {
      col,
      rotateFactor
    } = this;
    const prevSelected = col.selectedIndex;
    const selectedIndex = col.selectedIndex = this.indexForY(-y);
    const durationStr = duration === 0 ? '' : duration + 'ms';
    const scaleStr = `scale(${this.scaleFactor})`;
    const children = this.optsEl.children;
    for (let i = 0; i < children.length; i++) {
      const button = children[i];
      const opt = col.options[i];
      const optOffset = i * this.optHeight + y;
      let transform = '';
      if (rotateFactor !== 0) {
        const rotateX = optOffset * rotateFactor;
        if (Math.abs(rotateX) <= 90) {
          translateY = 0;
          translateZ = 90;
          transform = `rotateX(${rotateX}deg) `;
        } else {
          translateY = -9999;
        }
      } else {
        translateZ = 0;
        translateY = optOffset;
      }
      const selected = selectedIndex === i;
      transform += `translate3d(0px,${translateY}px,${translateZ}px) `;
      if (this.scaleFactor !== 1 && !selected) {
        transform += scaleStr;
      }
      // Update transition duration
      if (this.noAnimate) {
        opt.duration = 0;
        button.style.transitionDuration = '';
      } else if (duration !== opt.duration) {
        opt.duration = duration;
        button.style.transitionDuration = durationStr;
      }
      // Update transform
      if (transform !== opt.transform) {
        opt.transform = transform;
      }
      button.style.transform = transform;
      /**
       * Ensure that the select column
       * item has the selected class
       */
      opt.selected = selected;
      if (selected) {
        button.classList.add(PICKER_OPT_SELECTED);
      } else {
        button.classList.remove(PICKER_OPT_SELECTED);
      }
    }
    this.col.prevSelected = prevSelected;
    if (saveY) {
      this.y = y;
    }
    if (this.lastIndex !== selectedIndex) {
      // have not set a last index yet
      (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_12__.b)();
      this.lastIndex = selectedIndex;
    }
  }
  decelerate() {
    if (this.velocity !== 0) {
      // still decelerating
      this.velocity *= DECELERATION_FRICTION;
      // do not let it go slower than a velocity of 1
      this.velocity = this.velocity > 0 ? Math.max(this.velocity, 1) : Math.min(this.velocity, -1);
      let y = this.y + this.velocity;
      if (y > this.minY) {
        // whoops, it's trying to scroll up farther than the options we have!
        y = this.minY;
        this.velocity = 0;
      } else if (y < this.maxY) {
        // gahh, it's trying to scroll down farther than we can!
        y = this.maxY;
        this.velocity = 0;
      }
      this.update(y, 0, true);
      const notLockedIn = Math.round(y) % this.optHeight !== 0 || Math.abs(this.velocity) > 1;
      if (notLockedIn) {
        // isn't locked in yet, keep decelerating until it is
        this.rafId = requestAnimationFrame(() => this.decelerate());
      } else {
        this.velocity = 0;
        this.emitColChange();
        (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_12__.h)();
      }
    } else if (this.y % this.optHeight !== 0) {
      // needs to still get locked into a position so options line up
      const currentPos = Math.abs(this.y % this.optHeight);
      // create a velocity in the direction it needs to scroll
      this.velocity = currentPos > this.optHeight / 2 ? 1 : -1;
      this.decelerate();
    }
  }
  indexForY(y) {
    return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
  }
  onStart(detail) {
    // We have to prevent default in order to block scrolling under the picker
    // but we DO NOT have to stop propagation, since we still want
    // some "click" events to capture
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_12__.a)();
    // reset everything
    if (this.rafId !== undefined) cancelAnimationFrame(this.rafId);
    const options = this.col.options;
    let minY = options.length - 1;
    let maxY = 0;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        minY = Math.min(minY, i);
        maxY = Math.max(maxY, i);
      }
    }
    this.minY = -(minY * this.optHeight);
    this.maxY = -(maxY * this.optHeight);
  }
  onMove(detail) {
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    // update the scroll position relative to pointer start position
    let y = this.y + detail.deltaY;
    if (y > this.minY) {
      // scrolling up higher than scroll area
      y = Math.pow(y, 0.8);
      this.bounceFrom = y;
    } else if (y < this.maxY) {
      // scrolling down below scroll area
      y += Math.pow(this.maxY - y, 0.9);
      this.bounceFrom = y;
    } else {
      this.bounceFrom = 0;
    }
    this.update(y, 0, false);
  }
  onEnd(detail) {
    if (this.bounceFrom > 0) {
      // bounce back up
      this.update(this.minY, 100, true);
      this.emitColChange();
      return;
    } else if (this.bounceFrom < 0) {
      // bounce back down
      this.update(this.maxY, 100, true);
      this.emitColChange();
      return;
    }
    this.velocity = (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.l)(-MAX_PICKER_SPEED, detail.velocityY * 23, MAX_PICKER_SPEED);
    if (this.velocity === 0 && detail.deltaY === 0) {
      const opt = detail.event.target.closest('.picker-opt');
      if (opt === null || opt === void 0 ? void 0 : opt.hasAttribute('opt-index')) {
        this.setSelected(parseInt(opt.getAttribute('opt-index'), 10), TRANSITION_DURATION);
      }
    } else {
      this.y += detail.deltaY;
      if (Math.abs(detail.velocityY) < 0.05) {
        const isScrollingUp = detail.deltaY > 0;
        const optHeightFraction = Math.abs(this.y) % this.optHeight / this.optHeight;
        if (isScrollingUp && optHeightFraction > 0.5) {
          this.velocity = Math.abs(this.velocity) * -1;
        } else if (!isScrollingUp && optHeightFraction <= 0.5) {
          this.velocity = Math.abs(this.velocity);
        }
      }
      this.decelerate();
    }
  }
  refresh(forceRefresh, animated) {
    var _a;
    let min = this.col.options.length - 1;
    let max = 0;
    const options = this.col.options;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        min = Math.min(min, i);
        max = Math.max(max, i);
      }
    }
    /**
     * Only update selected value if column has a
     * velocity of 0. If it does not, then the
     * column is animating might land on
     * a value different than the value at
     * selectedIndex
     */
    if (this.velocity !== 0) {
      return;
    }
    const selectedIndex = (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_5__.l)(min, (_a = this.col.selectedIndex) !== null && _a !== void 0 ? _a : 0, max);
    if (this.col.prevSelected !== selectedIndex || forceRefresh) {
      const y = selectedIndex * this.optHeight * -1;
      const duration = animated ? TRANSITION_DURATION : 0;
      this.velocity = 0;
      this.update(y, duration, true);
    }
  }
  onDomChange(forceRefresh, animated) {
    const colEl = this.optsEl;
    if (colEl) {
      // DOM READ
      // We perfom a DOM read over a rendered item, this needs to happen after the first render or after the the column has changed
      this.optHeight = colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0;
    }
    this.refresh(forceRefresh, animated);
  }
  render() {
    const col = this.col;
    const mode = (0,_ionic_global_a9abd569_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      class: Object.assign({
        [mode]: true,
        'picker-col': true,
        'picker-opts-left': this.col.align === 'left',
        'picker-opts-right': this.col.align === 'right'
      }, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_8__.g)(col.cssClass)),
      style: {
        'max-width': this.col.columnWidth
      }
    }, col.prefix && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-prefix",
      style: {
        width: col.prefixWidth
      }
    }, col.prefix), (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-opts",
      style: {
        maxWidth: col.optionsWidth
      },
      ref: el => this.optsEl = el
    }, col.options.map((o, index) => (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      "aria-label": o.ariaLabel,
      class: {
        'picker-opt': true,
        'picker-opt-disabled': !!o.disabled
      },
      "opt-index": index
    }, o.text))), col.suffix && (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-suffix",
      style: {
        width: col.suffixWidth
      }
    }, col.suffix));
  }
  get el() {
    return (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "col": ["colChanged"]
    };
  }
};
const PICKER_OPT_SELECTED = 'picker-opt-selected';
const DECELERATION_FRICTION = 0.97;
const MAX_PICKER_SPEED = 90;
const TRANSITION_DURATION = 150;
PickerColumnCmp.style = {
  ios: pickerColumnIosCss,
  md: pickerColumnMdCss
};


/***/ }),

/***/ 35578:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-7670341c.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createColorClasses),
/* harmony export */   g: () => (/* binding */ getClassMap),
/* harmony export */   h: () => (/* binding */ hostContext),
/* harmony export */   o: () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var _home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 70734);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};
const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }
  return [];
};
const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = /*#__PURE__*/function () {
  var _ref = (0,_home_ompfinex_IdeaProjects_fateh_safar_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');
      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }
        return router.push(url, direction, animation);
      }
    }
    return false;
  });
  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();


/***/ })

};
;
//# sourceMappingURL=1467.js.map