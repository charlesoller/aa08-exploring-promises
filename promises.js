/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

function num1(){
    return 1;
}

async function num2(){
    return 2;
}

console.log('num1', num1());
console.log('num 2', num2());
num2().then(res => console.log(res))

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

async function waiting() {
    const val = await num2();
    console.log("waiting", val)
}

waiting();




/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

async function waitForPromise(){
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve("done!!")
        }, 1000)
    })

    const res = await promise;
    console.log("my promise is: ", res);
}

waitForPromise();


/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

new Promise(resolve => {
    setTimeout(() => {
        resolve('done')
    }, 1500)
})
.then(r => console.log("my other promise is", r))



/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function anotherFunction(){
    await wait(2000);
    console.log("2 seconds have passed")
}

anotherFunction()


/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

const tryRandomPromise = random =>
    new Promise((resolve, reject) => {
        if(random > 0.5) {
            resolve('success!')
        } else {
            reject('error')
        }
});

tryRandomPromise(0)
    .then(res => console.log(res))
    .catch(res => console.log(res));

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

const tryTryAgain = async(i) => {
    const random = Math.random();
    await wait(3000 + random * 1000);

    try {
        const result = await tryRandomPromise(random);
        console.log("random again #", i, result);
    } catch (error) {
        console.error("random again #", i, error);
    }
}

for (let i = 1; i < 10; i++){
    tryTryAgain(i);
}


/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

console.log("END OF PROGRAM")
