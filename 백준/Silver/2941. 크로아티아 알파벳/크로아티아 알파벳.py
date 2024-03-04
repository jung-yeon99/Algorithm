i = input()
c = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
for j in c:
    i = i.replace(j,"a")
print(len(i))