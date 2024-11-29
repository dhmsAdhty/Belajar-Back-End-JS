// TODO: tampilkan teks pada notes.txt pada console.
const fs = require("fs");

fs.readFile("./file-system/notes.txt", "utf8", (error, data) => {
  if (error) {
    console.log("periksa path karena Tidak bisa membaca file");
    return;
  }
  console.log(data);
});
