// 📝 문제: 대충 만든 자판
// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
    //모든 알파벳 문자에 대해 "최소 몇 번 눌러야 입력되는지"를 미리 Map으로 저장
    const tryMap = new Map();
    for(let i=0; i<keymap.length;i++){
        for(let j=0; j<keymap[i].length;j++){
            const char = keymap[i][j];
            const pressCount= j + 1;
            if(!tryMap.has(char) || tryMap.get(char) > pressCount){
                tryMap.set(char, pressCount);
            }
        }
    }

    const answer=[];

    for(let word of targets){
        let sum=0;
        let canType=true;
        for(let char of word){
            if(!tryMap.has(char)){
                canType=false;
                break;
            }
            sum+=tryMap.get(char);
        }
        answer.push(canType? sum : -1);

    }
    return answer;
}