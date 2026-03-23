/**
 * 싱글 구구단
 */

export function singleGugudan(dan) {
    console.log(`----------${dan}단 입니다----------`);
    for (let i = 1; i <= 9; i++) {
        console.log(`${dan} * ${i} = ${dan*i}`);
    }
}

/**
 * 멀티 구구단
 */

export function multiGugudan(dan1, dan2) {
    console.log(`----------${dan1}단 ~ ${dan2}단 입니다----------`);
    
    for (let i = 1; i <= 9; i++) {
        let output = '';
        for (let j = dan1; j <= dan2; j++) {
            output += `${j} * ${i} = ${j*i} \t`
        }
        console.log(output);
        
    }
}