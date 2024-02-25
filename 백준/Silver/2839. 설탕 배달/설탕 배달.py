N = int(input())
count = 0

while N > 0:  # N이 0 이상인 동안
    if N % 5 == 0:
        count += N // 5
        break
    else:
        N -= 3
        count += 1
if N < 0:
    count = -1
print(count)