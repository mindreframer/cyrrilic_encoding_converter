const file = Bun.file("out.html", "")
const text = await file.text()

// DETECT ENCODING
import chardet from 'chardet';
const res = chardet.analyse(Buffer.from(text));
console.log(res)


// APPLY IT
const encoding = require("encoding");
const resultBuffer = encoding.convert(text, "utf8", "windows-1251");
const decoder = new TextDecoder()
const newText = decoder.decode(resultBuffer)
console.log(newText)

Bun.write("../out-real.html", newText)