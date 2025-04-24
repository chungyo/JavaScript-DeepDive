// 📝 문제: 추억 점수
// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
    // 이름, 점수 매핑
    const nameScoreMap = new Map();
    for(let i=0; i<name.length; i++){
        // [["may", 5]]
        nameScoreMap.set(name[i], yearning[i]);
    }

    const answer = [];

    // photo 배열에서 이름을 찾아줘야함.
    for(let pic of photo){
        let sum = 0;
        for(let person of pic){
            if(nameScoreMap.has(person))
                sum += nameScoreMap.get(person)
        }
        answer.push(sum);
    }


    return answer;
}