const message = (name) => {
  console.log(`Hello ${name}`);
};
const akun = (name) => {
  console.log(`Nama akun anda ${name}`);
};

const tampilkanPesan = (nama) => {
  message(nama);
  akun(nama);
};

tampilkanPesan("Muhammad Fauzan");
