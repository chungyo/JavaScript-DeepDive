// 📝 문제: 해시 / 완주하지 못한 선수
//https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    let answer = '';
    // 이름별 개수 기록
    const participantMap = new Map();
    // 이것도 이름별 개수 기록
    const completionMap = new Map();

    for(let name of participant){
        participantMap.set(name, (participantMap.get(name) || 0) + 1);
    }
    for(let name of completion){
        completionMap.set(name, (completionMap.get(name) || 0) + 1);
    }

    for (let name of completion) {
        participantMap.set(name, participantMap.get(name) - 1);
    }
    for (let [name, count] of participantMap) {
        if (count > 0) {
            answer = name;
            break;
        }
    }
    return answer;
}