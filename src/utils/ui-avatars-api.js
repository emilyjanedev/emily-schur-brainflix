export default class UiAvatarsApi {
  constructor(options) {
    this.baseUrl = "https://ui-avatars.com/api/";
    this.options = options;
  }

  getAvatar(name) {
    const options = this.createOptionsString();
    const letter = name.charAt(0);

    return `${this.baseUrl}?name=${letter}${options}`;
  }

  createOptionsString() {
    let optionsString = "";
    this.options.forEach((option) => {
      optionsString += `&${option}`;
    });
    return optionsString;
  }
}
