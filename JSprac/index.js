// switch문
let myChoice = 2;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...')
    break;
  case 2:
    console.log('고영이를 선택한 당신, ...')
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...')
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...')
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.')

}

if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

//if문과 switch문 모두 특정한 조건에 따라 다르게 동작하는 코드를 만들 수 있지만, 어떤 넓은 범위를 만족하는 조건식을 만들 때는 if문을 활용하는 것이 좀 더 효과적이고 특정한 값에 일치하는 조건을 만들 때는 switch문이 좀 더 효과적입니다.

// 한 가지 주의할 점은 조건식에서 등호를 반드시 3개를 입력해 주어야 한다는 점인데요. switch문은 암시적 형 변환을 허용하지 않기 때문입니다. switch문은 값들을 비교할 때 자료형을 엄격하게 구분한다는 것과 if문으로 대체할 때는 반드시 등호 3개로 일치비교를 해야한다는 것.