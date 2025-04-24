function solution(bandage, health, attacks) {
    let currentHealth = health;
    let combo = 0;
    const lastAttackTime = attacks[attacks.length - 1][0];

    // Map으로 관리해줌. Set은 진짜 그 값이 있을 때 확인하는 용도. 이렇게 key value 필요할때는 map 사용
    const attacksMap = new Map();
    for (const [time, damage] of attacks) {
        attacksMap.set(time, damage);
    }

    // 구조 분해 할당으로 바로 값 뽑아줌.
    const [t, x, y] = bandage;

    for (let time = 1; time <= lastAttackTime; time++) {
        if (attacksMap.has(time)) {
            const damage = attacksMap.get(time);
            console.log(`${time}초: 공격 발생! ${damage}만큼 피해`);
            currentHealth -= damage;
            combo = 0;

            if (currentHealth <= 0) return -1;
        } else {
            console.log(`${time}초: 공격 없음`);

            combo++;

            if (combo >= t) {
                currentHealth += x + y;
                combo = 0;
            } else {
                currentHealth += x;
            }
            currentHealth = Math.min(currentHealth, health);  // 체력 제한
        }
    }

    return currentHealth;
}
