class UiAvatarsApi {
  constructor() {
    this.baseUrl = "https://ui-avatars.com/api/";
    this.options = [
      "length=1",
      "rounded=true",
      "size=100",
      "background=random",
    ];
  }

  getAvatar(name) {
    const optionsString = this.createOptionsString();
    const letter = name.charAt(0);
    return `${this.baseUrl}?name=${letter}${optionsString}`;
  }

  createOptionsString() {
    return this.options.reduce((acc, option) => acc + `&${option}`, "");
  }
}

export default UiAvatarsApi;
