1부터 45까지 중 로또 번호 한 개를 뽑는 코드(공1개)를 작성해보세요 

Math.random();
= > 0이상 1미만 실수(float)

Math.random() * 45; 
=> 0이상 45미만 실수 (float)

Math.random() * 45 +1 ;
=> 0은 제외하고 45는 포함해야하니 1이상 46미만 실수 (float)

실수를 정수로 변환 parseInt();
=> 소수점은 버리고 정수로 변환 

parseInt(Math.random() * 45 + 1);
=> 1이상 45이하 정수(int)

답
var num = Math.random() * 45 + 1;
var ball1 = parseInt(num);
document.write(ball1);


변수를 하나정해서 하나 뽑는 것은 위의 예시와 같게 하면 되는데 여러개 뽑을 시에는 변수가 많아져 번거로우니 “배열(Array)”를 쓴다, 

.push();
=> 배열에서 마지막 값 추가 


1부터 45까지 중 로또 번호 한 개를 뽑는 코드(공6개)

<!-- var lotto = [];
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
document.write(lotto); -->
=> 반복적인 코딩은 반복문으로 해결하기! (for / while)

var lotto = [];
for (var i = 0; i < 6; i++) {
  lotto.push(parseInt(Math.random() * 45 + 1));
}
document.write(lotto);

for (시작; 끝; 증가) {
	반복하려는 코드 
}