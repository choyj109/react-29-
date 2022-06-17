const list = [1, 2, 3, 4, 5];
const list2 = list;
const list3 = [...list];
const obj = { a: 1, b: 2, c: 3 };
// const obj2 = obj -> 참조만 맞춘것
const obj2 = { ...obj, c: 4, b: 1, e: 8 };

console.log(list);
console.log(list2);
console.log(list3);
console.log(obj);
console.log(obj2);
