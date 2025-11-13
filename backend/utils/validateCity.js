export function validateCity(city) {
  if (!city) return false;

  const cleaned = city.trim();

  // allow alphabets + spaces
  const pattern = /^[A-Za-z\s]+$/;

  return pattern.test(cleaned);
}
