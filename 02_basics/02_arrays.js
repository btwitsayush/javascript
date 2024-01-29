const marvelHeroes =["IronMan","SpideMan","Thor"]

const dcHeroes =["joker","BatMan","SuperMan"]

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
//Problem is that it will takee dcHeroes as 3rd element the two arrays will not be merged.
// console.log(marvelHeroes[3][1]);//It will give us output  Batman; 

const ans= marvelHeroes.concat(dcHeroes)// concat will return us new array after merging the two arrays.

// console.log(ans);

//better way use spread(...) the main beneift is that with concat we can only  merge two arrays but with spread we can merge any amount of arrays

const allHeroes=[...marvelHeroes,...dcHeroes]
// console.log(allHeroes);

const array =[1,2,3,[4,5,6],7,[8,9,[10]]]

const ansArray = array.flat(Infinity);
// flat will return a new Array with all elements .In place of Infinity we can pass till which level nested Arrays we want to simplify.
// console.log(ansArray);

 console.log(Array.isArray("Ayush"));// false
 console.log(Array.from("Ayush"));// convert to array
 console.log(Array.from({name:"Ayush"}));// It can't convert an object to directly array so it will return empty array

 let score1=100
 let score2=200
 let score3=300

 console.log(Array.of(score1,score2,score3));



/*Main difference b/w Array.of and Array.from is 
that Array.of is used to convert mutiples values to Array on other hand Array.from is used to convert objects in Array
 */