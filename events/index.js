// TODO 1
const EventEmitter = require("events");
// TODO 2
const myEventEmitter = new EventEmitter();
const birthdayEventListener = ({ name }) => {
  console.log(`Happy birthday ${name}!`);
};
// TODO 3
myEventEmitter.on("birthday", birthdayEventListener);
// TODO 4
myEventEmitter.emit("birthday", { name: "dhimas" });

// TODO 1 : Buat atau impor variabel EventEmitter dari core module events.
// TODO 2 : Buat variabel myEmitter yang merupakan instance dari EventEmitter.
// TODO 3 : Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.
// TODO 4 : Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.
