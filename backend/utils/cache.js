// Simple in-memory cache with expiry
const cache = {};

export function setCache(key, data, ttl = 600000) { // 10 minutes default
  cache[key] = {
    data,
    expiry: Date.now() + ttl,
  };
}

export function getCache(key) {
  const item = cache[key];

  if (!item) return null;

  if (Date.now() > item.expiry) {
    delete cache[key];
    return null;
  }

  return item.data;
}
