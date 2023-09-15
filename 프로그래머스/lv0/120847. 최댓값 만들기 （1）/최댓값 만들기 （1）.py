def solution(numbers):
    numbers.sort()
    return numbers[len(numbers)-2] * numbers[len(numbers)-1]