function solution(new_id) {
    new_id = step1(new_id);
    new_id = step2(new_id);
    new_id = step3(new_id);
    new_id = step4(new_id);
    new_id = step5(new_id);
    new_id = step6(new_id);
    new_id = step7(new_id);

    return new_id;
}

function step1(new_id) {
    return new_id.toLowerCase();
}

function step2(new_id) {
    return new_id.replace(/[^a-z0-9-_.]/g, '');
}

function step3(new_id) {
    return new_id.replace(/\.{2,}/g, '.');
}

function step4(new_id) {
    return new_id.replace(/^\.|\.$/g, '');
}

function step5(new_id) {
    return new_id === '' ? 'a' : new_id;
}

function step6(new_id) {
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15).replace(/\.$/, '');
    }
    return new_id;
}

function step7(new_id) {
    while (new_id.length <= 2) {
        new_id += new_id[new_id.length - 1];
    }
    return new_id;
}