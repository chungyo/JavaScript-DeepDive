// 📝 문제: 기능 개발
// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
    const answer = [];
    // 얼마나 걸리는지 날짜를 계산해놓는다
    const days = progresses.map((p,i) => (Math.ceil((100-p) / speeds[i])));
    let current = days[0];
    let count = 0;
    for(let i=0; i<progresses.length; i++){
        if(days[i] <= current){
            count++;
        }
        else{
            answer.push(count);
            current = days[i];
            count = 1;
        }
    }

    answer.push(count)
    return answer;
}
