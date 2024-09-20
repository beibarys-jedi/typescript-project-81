var Tag = /** @class */ (function () {
    function Tag(name, attributes, content) {
        if (attributes === void 0) { attributes = {}; }
        if (content === void 0) { content = ""; }
        this.name = name;
        this.attributes = attributes;
        this.content = content;
    }
    Tag.prototype.generateAttributes = function () {
        return Object.entries(this.attributes)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return "".concat(key, "=\"").concat(value, "\"");
        })
            .join(" ");
    };
    Tag.prototype.toString = function () {
        var attrs = this.generateAttributes();
        var isSelfClosing = ["br", "img", "input", "hr", "meta", "link"].includes(this.name);
        if (isSelfClosing) {
            return "<".concat(this.name).concat(attrs ? " " + attrs : "", ">");
        }
        else {
            return "<".concat(this.name).concat(attrs ? " " + attrs : "", ">").concat(this.content, "</").concat(this.name, ">");
        }
    };
    return Tag;
}());
// Примеры использования
console.log(new Tag("br").toString()); // <br>
// console.log(new Tag("img", { src: "path/to/image" }).toString()); // <img src="path/to/image">
// console.log(new Tag("input", { type: "submit", value: "Save" }).toString()); // <input type="submit" value="Save">
// console.log(new Tag("label", {}, "Email").toString()); // <label>Email</label>
// console.log(new Tag("label", { for: "email" }, "Email").toString()); // <label for="email">Email</label>
// console.log(new Tag("div").toString()); // <div></div>
