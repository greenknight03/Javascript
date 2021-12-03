function randomFunc(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function lottoGenerator() {
  let lottoArr = [];
  while (lottoArr.length < 6) {
      let result = randomFunc(1, 46);
      // 중복 판단, 다만 include는 IE지원안됨
      // 중복되는 숫자가 없다면
      if(!lottoArr.includes(result)) {
          lottoArr.push(result);
      }
  }
  return lottoArr;
}
console.log(lottoGenerator());

// 로또 다른 ver 인터넷익스층오러어 없음