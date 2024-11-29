const initialMemroyUsage = process.memoryUsage().heapUsed;
const dhimas = process.argv[2];
const environtment = process.env.NODE_ENV || "development";
for (let i = 0; i < 10000; i++) {}

const currentMemoryUsage = process.memoryUsage().heapUsed;
console.log(`Hai, ${dhimas}`);
console.log(`Mode environment: ${environtment}`);
console.log(
  `Penggunaan memori dari ${initialMemroyUsage} naik ke ${currentMemoryUsage}`
);
