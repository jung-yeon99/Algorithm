def solution(my_string, n):
    result = []
    for i in my_string:
        result.append(i*n)
    return ''.join(result)