
class GamesClass {
    #name
    #platforms
    #price
    #image

    constructor(name, platforms, price, image) {
        this.#name = name;
        this.#platforms = platforms;
        this.#price = price;
        this.#image = image;
    }

    get name() {
        return this.#name;
    }

    get platforms() {
        return this.#platforms;
    }

    get price() {
        return this.#price;
    }

    get image() {
        return this.#image;
    }

    set name(newName) {
        this.#name = newName;
    }

    set platforms(newPlatforms) {
        this.#platforms = newPlatforms;
    }

    set price(newPrice) {
        this.#price = newPrice;
    }

    set image(newImage) {
        this.#image = newImage;
    }
}