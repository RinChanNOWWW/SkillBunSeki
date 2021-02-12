export function getCourseCommonLevel(value: number): number[] {
  switch (value) {
    case 1:
      return [6, 7, 7];
    case 2:
      return [7, 8, 8];
    case 3:
      return [9, 10, 10];
    case 4:
      return [10, 11, 11];
    case 5:
      return [12, 13, 13];
    case 6:
      return [14, 14, 14];
    case 7:
      return [15, 15, 15];
    case 8:
      return [15, 16, 16];
    case 9:
      return [16, 17, 17];
    case 10:
      return [17, 17, 17];
    case 11:
      return [18, 18, 18];
    case 12:
      return [19, 19, 20];
    default:
      return [6, 7, 7];
  }
}

export function getCourseCommonDifficulty(value: number): string[] {
  if (value <= 5) {
    return ['ADV', 'ADV', 'ADV'];
  }
  if (value > 5 && value <= 8) {
    return ['EXH', 'EXH', 'EXH'];
  }
  return ['MXM', 'MXM', 'MXM'];
}
