def solution(numbers):
    answer= 0
    for i in range(0,len(numbers)):
        answer+=numbers[i]
    return answer / len(numbers)