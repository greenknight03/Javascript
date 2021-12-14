// 정리 전

loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
          }
        });

      }
    })
  }
});

// 정리 후
loadScript("/article/promise-chaining/one.js")
.then(script => loadScript("/article/promise-chaining/two.js"))
.then(script => loadScript("/article/promise-chaining/three.js"))
.then(script => {
  // 스크립트를 정상적으로 불러왔기 때문에 스크립트 내의 함수를 호출할 수 있습니다.
  one();
  two();
  three();
});


// 12/8
// 손코딩 1 
// 1차 접종 퍼센트를 구해주세요!
fetch('https://블라블라.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(function(json) {
        console.log(2);
        console.log(json);
        return json
    })
    .then(function(json) {
        console.log(3);
        console.log(json.filter(s => s['시·도별(1)'] === '전국').map(obj => obj['1차 접종 퍼센트']));
        return
    })


    // 손코딩2
    new Promise(function(resolve, reject) {

      setTimeout(() => reject('error'), 1000);
    
    }).then(function(result) {
    
      alert(result + ' : 잘 수행!');
      return result + 'one';
    
    }).catch(function(result) {
    
      alert(result + ' : 애러 발생!'); // 1
      return result + 'two';
    
    }).then(function(result) {
    
      alert(result + ' : 잘 수행!'); // 2
      return result + 'three';
    
    });    



    /*
    
      async await키워드를 사용하면  promise 댐댐댐 하는게 아니라
      동기적(순차적)으로 절차적으로 비 동기적 방식 처릴를 동기적인 모습의 코드로 간단하게 순차적으로 읽어 내릴 수 있어서 편리하다는 차이가 있어요!!
      코드 가독성 좋아지고 읽기 편해짐 

    */