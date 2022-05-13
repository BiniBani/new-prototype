function post() {
    let userProductId = document.getElementById('productId').value;
    let userColor = document.getElementById('productColor').value;
    const API_URL = 'https://0p2heigvnl.execute-api.ap-northeast-2.amazonaws.com/prod/product';
    let params = {
    productId: userProductId,
    color: userColor
    }

    fetch(API_URL, { 
        mode: 'cors', // API Gateway및 lambda와 함께 사용시 없어도 상관없음. 왜냐면 cors를 다루는건 lambda response headers와 api gateway resources에서 enable CORS이기 때문.
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(params) 
    })
    .then(res => {
        return res.json(); // "console.log(res.json());"를 하면 Promise 타입의 객체를 콘솔창에 출력한다.
        /* 그 결과는 다음과 같았다.
        [[Prototype]]: Promise
        [[PromiseState]]: "fulfilled" // fetch가 성공적으로 임무를 수행했음을 알려줌. FYI, 실패하면 "rejected".
        [[PromiseResult]]: Object
        Item: {productId: 'gag', color: 'gfreg'}
        Message: "SUCCESS"
        Operation: "SAVE"
        [[Prototype]]: Object
        */
    })
    // javascript 화살표 함수의 유일한 문장이 'return'일 때 'return'와 중괄호({})를 생략할 수 있다.
    .then((data) => {
        console.log(data); // 위에있는 PromiseResult 객체를 바로 그다음 .then()의 func에서의 인자가 됨.
    });
};

document.getElementsByTagName('button')[0].addEventListener('click', post);
