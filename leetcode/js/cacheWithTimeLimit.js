/*
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. 
Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists 
and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
*/

var TimeLimitedCache = function () {
  this.cache = {};
  this.expiration = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let now = Date.now();
  let exists = this.cache[key] ? true : false;
  let expired =
    this.expiration[key] && this.expiration[key] < now ? true : false;

  if (!exists) {
    this.cache[key] = value;
    this.expiration[key] = now + duration;
  } else if (exists && !expired) {
    this.cache[key] = value;
    this.expiration[key] = now + duration;
    return true;
  }

  return false;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  let now = Date.now();
  let exists = this.expiration[key] ? true : false;
  let expired = this.expiration[key] && this.expiration[key] < now;

  if (expired || !exists) result = -1;
  else if (exists && !expired) result = this.cache[key];

  return result;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let counter = 0;
  let now = Date.now();

  for (let key in this.expiration) {
    let expired = this.expiration[key] && this.expiration[key] < now;
    if (!expired) counter++;
  }

  return counter;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
