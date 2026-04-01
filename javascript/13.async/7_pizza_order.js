/**
 * 동기식, 비동기식 => 피자 주문 로직
 * - 1. 고객이 주문
 * - 2. 피자 만들기 : 5초
 * - 3. 배달
 * 
 */

async function piazzaOrder(name, address) {
    // 1. 고객이 주문
    console.log(`1. ${name} 고객 주문 완료!!`);
    
    // 2. 피자 만들기 = 5초
    let makePizza = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`2. 피자가 완성되었습니다~`);
            resolve();
        }, 5000);
    });

    await makePizza
        .then(resolve => console.log('resolve-------------->'))
        .catch(reject => console.log('reject--------------->'));

    // 3. 피자 제작 완료, 배달
    console.log(`3. ${address} 주소로 배달 완료!!`);

}

piazzaOrder('홍길동', '서울시 강남구 123');