/*const multiply = (x,y)=> x*y;
console.log(multiply(2,3));

const student = {
    name:'Iliyas',
    age: 22,
    greet(){
        console.log('Hi i am :'+ this.name);
    }
}

student.greet();*/

//Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon].
// Transform it into ['apple', 'oranges' , 'empty string', 'mango',  'empty string', 'lemon] using array maps
/*
const arr = ['apple','oranges' ,'','mango','' ,'lemon'];

function rep(str){
    if(str == '')
    {
        return str = str + 'empty string';
    }
    else {
        return str;
    }
}

const output = arr.map(rep);
console.log(output);
    
*/
/*
const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}



console.log(obj1)

console.log(obj2)
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

	const { key1, key3}  = { ...obj1};

	

	console.log(key1, key3)
*/
/*
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3} = obj1



key1 = 20;

key3 = 123

console.log(obj1.key1, obj1.key3)*/





/*
2) console.log('a');

console.log('b');

setTimeOut(() => console.log('c'), 3000)

setTimeOut(() => console.log('d'), 0)

console.log('e');

Challenge
Can you make the above code print in the following sequence using promises and async/await. Write the code and paste it here
Expected Output  a b c d e*/

/* Async code and promises
const a = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('a');

        },1000)
    })
}

const b= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('b');
        },1000)
    })
}

const c= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('c');
        },1000)
    })
}

const d= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('d');
        },1000)
    })
}

const e= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('e');
        },1000)
    })
}
/*
a().then((msg1)=>{
    console.log(msg1)
    b().then((msg2)=>{
        console.log(msg2)
        c().then((msg3)=>{
            console.log(msg3)
            d().then((msg4)=>{
                console.log(msg4)
                e().then((msg5)=>{
                    console.log(msg5)
                })
            })
        })
    })
}).catch((err)=>{
    console.log(err)
})*/
/*
 async function fun2(){
    const a1 = await a();
    console.log(a1)
    const b2 = await b();
    console.log(b2)
    const c3 = await c();
    console.log(c3)
    const d4 = await d();
    console.log(d4);
    const e5 = await e();
    console.log(e5)
}

fun2();
*/

