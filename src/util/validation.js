export function isEmail(value) {
  return value.includes('@');
}

export function isNotEmpty(value) {
  return value == null || value.trim() !== '';
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualToOtherValue(value, otherValue) {
  return value === otherValue;
}
