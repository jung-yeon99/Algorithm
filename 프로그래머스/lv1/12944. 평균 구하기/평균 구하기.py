def solution(arr):
    result = 0
    result2 = 0
    for i in range(len(arr)):
        result += arr[i]
        result2 = result / len(arr)
    return result2