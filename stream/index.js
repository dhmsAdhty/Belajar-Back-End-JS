// Teks yang dibaca oleh readable stream memiliki ukuran 15 karakter tiap bagiannya. Tentukan nilai highWaterMark-nya.
// Tulis ulang teks dengan menggunakan teknik writable stream pada berkas output.txt. Untuk tiap bagian teks yang dibaca melalui readable stream, pisahkan dengan baris baru (‘\n’).

const fs = require("fs");

const readableStream = fs.createReadStream("./stream/input.txt", {
  highWaterMark: 15,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    console.log("Tidak bisa membaca file cuy, silahkan coba lagi");
  }
});
readableStream.on("end", () => {
  console.log("Done");
});

const writableStream = fs.createWriteStream("./stream/output.txt");

writableStream.write(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n"
);
writableStream.write(
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n"
);
writableStream.write(
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n"
);
writableStream.end();
