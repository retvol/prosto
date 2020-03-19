
class Header {
    constructor(h1, h2) {
        this.h1 = h1;
        this.h2 = h2;
    }
    reander(a) {
        let out = '';
        out += `<h1>${this.h1}</h1>`
        out += `<h1>${this.h2}</h1>`

        document.getElementById(a).innerHTML = out
    }
}
const header = new Header("Hi", " kirill");
console.log(header);
header.reander('header')

class Main extends Header {
    constructor(h1, h2, h3, h4) {
        super(h1, h2)
        this._h3 = h3;
        this.h4 = h4;
    }
    get h3() {
        return this._h3;
    }

}
const main = new Main(
    'привет',
    'Кирилл',
    'как дела?',
    'что делаешь?'
);
console.log(main._h3);
main.reander('header')
console.log(main);


