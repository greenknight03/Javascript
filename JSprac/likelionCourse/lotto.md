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


=>> 변수를 하나정해서 하나 뽑는 것은 위의 예시와 같게 하면 되는데 여러개 뽑을 시에는 변수가 많아져 번거로우니 “배열(Array)”를 쓴다, 

.push();
=> 배열에서 마지막 값 추가 


로또 번호 추첨기 3
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
=>> 숫자가 중복될 가능성이 있다. 


로또 번호 추첨기 4 
만약 중복이 아니라면 .push()
조건문 
.indexOf(값)
값이 있으면 위치, 없으면 -1
= 오른쪽에서 왼쪽 값 할당 == 비교연산자 
<script>
        var lotto = [];
        for (var i = 0; i < 6; i++){
            var num = parseInt(Math.random() * 45 + 1);
            if (lotto.indexOf(num) == -1) {
                lotto.push(num);
            }
        }
        document.write(lotto);
    </script>
    = 중복없는 값만 나오게 됨 / if (값이없으면) 값을 뒤에서 push()추가해줘라

    =>> 중간에 중복된 값이 나오게 되면 총 6개 뽑기중에 한 번이 안들어 갈 수 있어서 공이 6개가 될 때까지 반복해보자


로또 번호 추첨기 5,6
while
공이 6개가 될 때까지 반복
.length = 배열의 길이
배열 순서가 뒤죽박죽 = 오름차순으로 배열값 정렬
.sort() == 배열값 정렬 - 사전식 정렬 맨앞자리 기준으로 1,11,2,22,3,33 
숫자의 크기순으로 정렬하기위헤서는 .sort((a,b)=>a-b) = 익명함수 사용 = 오름차순으로 쓰임





<script>
        var lotto = [];
        while (lotto.length < 6) {
            var num = parseInt(Math.random() * 45 + 1);
            if (lotto.indexOf(num) == -1) {
                lotto.push(num);
            }
        }
        lotto.sort((a,b)=>a-b);
        document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
        document.write("<div class='ball ball2'>" + lotto[1] + "</div>");
        document.write("<div class='ball ball3'>" + lotto[2] + "</div>");
        document.write("<div class='ball ball4'>" + lotto[3] + "</div>");
        document.write("<div class='ball ball5'>" + lotto[4] + "</div>");
        document.write("<div class='ball ball6'>" + lotto[5] + "</div>");
    </script>