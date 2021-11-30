let result = 0;

for (let x = 0; x < 101; x++) {
    // console.log(x);
    if (x % 3 == 0 || x % 5 == 0){
        // console.log(x);
        result += x //  result = result + x
    }
}

console.log(result);

// 2418
//(number % 3 == 0) => 3으로 나누었을때 나머지가 0인가? 
// => 3으로 나누어떨어지는가? => 3의 배수인가? 

// 1. false || true       
// 2. true && false
// 3. !true
// 4. !((true && false) || (true && false))
// 5. let x = 10
//    !((x % 5 == 0 && x % 2 == 0) || (x / 2 == 5 && false))
// 6. let y = 10
//    (false && y % 2 == 0) && (y / 2 == 5 && false)
// 7. let z = 3
//    (true && z % 3 == 0) || (z / 2 !== 5 && false) // !==는 잘못된 문법입니다.ㅎㅎ
// ---
// // 드모르간 법칙
// !(x || y) === (!x && !y)
// !(x && y) === (!x || !y)
// ---
// // 3항연산자 대체 용법
// true && '완료' || '미완료';

// 1. true
// 2. false
// 3. false
// 4. true
// 5. false
// 6. False
// 7. 에러

NaN === NaN // false
Number.isNaN(NaN) // true, Number.isNaN을 사용하세요!
isNaN(undefined) // true, isNaN은 논란의 여지가 많음
isNaN(null) // false, 이건 또 false?
isNaN(-NaN) // true
isNaN({}) // true
Object.is(NaN, NaN) // true

x.toString()
'10'
// 위의 이거보다는

  // 실무에서 사용하는 컨벤션들!!!! 회사마다 다름 근데 자주 쓴다 
  123 + '';
'123'
!!true
true
!!'hojun'
true
!!''
false
!!1
true
!!0
false
!!undefined
false
!!NaN
false

!! - 이중부정

'0' == 0
true
0 == ''
true
0 == '0'
true
false == 'false' // ''안에 값이 있으면 true 스트링 문자열로 읽음 
false
false == '0'
true
false == null
false
false == undefined
false
false == NaN
false
!!null
false
!!undefined
false
!!NaN
false

let x = '10000'
undefined
+x
10000

let x = '10000'
undefined
-x
-10000


// String은 + 에서만 String으로 형변환나요

// if문 
if (false) {
  console.log(1);
} else if(true) {
  console.log(2);
} else if(false) {
  console.log(3);
} 
if (true) {
  console.log(4);
}
if (false) {
  console.log(5);
} else if(true) {
  console.log(6);
} else if(false) {
  console.log(7);
} else {
  console.log(99);
}
    2
    4
    6


    if (score >= 90) {
      console.log('mom: i\'m so happy!')
      money += 1000000
  } else if (score >= 80) {
      console.log('mom: i\'m happy!')
      money += 100000
  } else if (score >= 70){
      console.log('mom : i\'m happy');
      money += 10000;
  }else if (score >= 60){
      console.log('mom : happy?');
      money += 10000;
  } else {
      console.log('...');
  }

// escape문자
// \t
// \n
// \\
// \'
// \"



// 구구단 출력 (외워라!)
for(let i = 2; i < 10; i++){
  for(let j = 1; j < 10; j++){
      console.log(`${i} X ${j} = ${i*j}`)
  }
}




let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let temp = sample[0];

for (let i = 0; i < sample.length; i++) {
    if (temp > sample[i]){
        temp = sample[i];
    }
}

console.log(temp);
// = 3
// 최소값 구하기 



let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0]
let result = 0

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        result = value[i+1] - value[i];
    }
}

console.log(result);