//! Task-1
// ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// !Task-2
// 1. উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let biggerName = [];
let initialVal = 0;
for (let i = 0; i < friends.length; i++) {
  if (friends[i].length > initialVal) {
    initialVal = friends[i].length;
    biggerName = friends[i];
  }
}
console.log(biggerName);

//! Task-3
// 2. উপরের এইয়ারের ভেতর থেকে শুধু জোড় সংখ্যা গুলোকে নিয়ে আরেকটা এরে তৈরি করতে হবে
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
