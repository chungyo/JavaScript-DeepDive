// 📝 문제: 주식 가격
// https://school.programmers.co.kr/learn/courses/30/lessons/42584

// 반복문 방법
function solution(prices) {
    const answer = []
    for(let i = 0; i<prices.length; i++){
        let count = 0;
        for(let j = i+1; j<prices.length; j++){
            count++;
            if(prices[j] < prices[i]){
                break;
            }
        }
        answer.push(count);
    }

    return answer
}
