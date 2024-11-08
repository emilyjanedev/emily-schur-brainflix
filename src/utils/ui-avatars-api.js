const baseUrl = "https://ui-avatars.com/api/";
const options = ["length=1", "rounded=true", "size=100", "background=random"];

export function getAvatar(name) {
  const optionsString = createOptionsString(options);
  const letter = name.charAt(0);
  return `${baseUrl}?name=${letter}${optionsString}`;
}

function createOptionsString(options) {
  return options.reduce((acc, option) => acc + `&${option}`, "");
}
