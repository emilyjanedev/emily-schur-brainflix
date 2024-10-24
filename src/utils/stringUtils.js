export function formatString(string) {
  const firstLetter = string.charAt(0);
  const upperCaseLetter = firstLetter.toUpperCase();
  const remainingLetters = string.slice(1);
  return upperCaseLetter + remainingLetters;
}
