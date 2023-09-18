def solution(n):
    strn = str(n)
    sum = 0
    for i in range(len(strn)):
        sum += int(strn[i])
    return sum