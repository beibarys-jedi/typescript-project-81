class Tag {
  private name: string;
  private attributes: { [key: string]: string };
  private content: string;

  constructor(
    name: string,
    attributes: { [key: string]: string } = {},
    content: string = ""
  ) {
    this.name = name;
    this.attributes = attributes;
    this.content = content;
  }

  private generateAttributes(): string {
    return Object.entries(this.attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
  }

  toString(): string {
    const attrs = this.generateAttributes();
    const isSelfClosing = ["br", "img", "input", "hr", "meta", "link"].includes(
      this.name
    );

    if (isSelfClosing) {
      return `<${this.name}${attrs ? " " + attrs : ""}>`;
    } else {
      return `<${this.name}${attrs ? " " + attrs : ""}>${this.content}</${
        this.name
      }>`;
    }
  }
}

// Примеры использования
console.log(new Tag("br").toString()); // <br>
// console.log(new Tag("img", { src: "path/to/image" }).toString()); // <img src="path/to/image">
// console.log(new Tag("input", { type: "submit", value: "Save" }).toString()); // <input type="submit" value="Save">
// console.log(new Tag("label", {}, "Email").toString()); // <label>Email</label>
// console.log(new Tag("label", { for: "email" }, "Email").toString()); // <label for="email">Email</label>
// console.log(new Tag("div").toString()); // <div></div>
