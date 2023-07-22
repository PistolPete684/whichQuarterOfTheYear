const quarterOf = (month) => {
  // Use a conditional to run through the options of 1-3 = 1, 4-6 = 2, 7-9 = 3 and 10-12 = 4
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else {
    return 4;
  }
}