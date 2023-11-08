function solution(new_id) {
  // 1단계: 모든 대문자를 대응되는 소문자로 치환
  new_id = new_id.toLowerCase()
  // 2단계: 특수문자 제거
  new_id = new_id.replace(/[^a-z0-9-_.]/g, '');
  // 3단계: 마침표가 2번 이상 연속된 부분을 하나의 마침표로 치환
  new_id = new_id.replace(/\.+/g, '.');
  // 4단계: 처음이나 끝에 위치한 마침표 제거
  new_id = new_id.replace(/^\.|\.$/g, '');
  // 5단계: 빈 문자열이라면 'a' 대입
  if (new_id === '') {
    new_id = 'a';
  }
  // 6단계: 16자 이상이면 15개의 문자 제외한 후 마지막 마침표 제거
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15).replace(/\.$/, '');
  // 순수함수 slice 사용
  }
  // 7단계: 2자 이하라면 마지막 문자를 반복해서 붙임
  if (new_id.length <= 2) {
    const last_new_id = new_id[new_id.length - 1];
    while (new_id.length < 3) {
      new_id += last_new_id;
    }
  }

  return new_id;
}
