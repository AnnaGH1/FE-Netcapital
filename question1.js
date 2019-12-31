var LIMIT = Number.parseInt(process.argv[2]);

for (let i = 1; i <= LIMIT; i++) {
    if (!(i%2) && !(i%3)) {
        console.log('Netcapital');
    } else if (!(i%2)) {
        console.log('Net');
    } else if (!(i%3)) {
        console.log('capital');
    } else {
        console.log(i);
    }
}
