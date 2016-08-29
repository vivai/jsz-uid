//@flow

const HEX_RADIX = 16;

let counter = 0;
let separator = ':';
let uuidTemplate = Array.from('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
let randomHexDigit = () => Math.floor(Math.random() * HEX_RADIX);
let seed = uuid();

/**
 * Returns a unique id composed from a uuid and a counter.
 * @example
 * console.log(uid()); // 5c4d369a-5973-4946-804d-3bd875900383:0
 * console.log(uid()); // 5c4d369a-5973-4946-804d-3bd875900383:1
 *
 */
export function uid(): string {
  let id = seed + separator + counter;

  if (counter < Number.MAX_VALUE) {
    counter++;
  } else {
    counter = 0;
    seed = uuid();
  }

  return id;
}

/**
 * Create and return a "version 4" RFC-4122 UUID string.
 * @example
 * console.log(uuid()); // 2c6e369a-5973-4946-804d-3bd875900383
 */
export function uuid(): string {
  return uuidTemplate.map((digit) => {
    if (digit === 'x') {
      digit = randomHexDigit().toString(HEX_RADIX);
    } else if (digit === 'y') {
      /* eslint-disable no-magic-numbers */
      digit = (randomHexDigit() & 0x3 | 0x8).toString(HEX_RADIX);
      /* eslint-enable */
    }

    return digit;
  }).join('');
}

