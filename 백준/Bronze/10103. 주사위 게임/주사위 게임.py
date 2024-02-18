# 첫째줄 라운드 수
# 다음 줄부터 첫번째는 창영, 주번째는 상덕
N=int(input())
jungsu = 100
chanyong = 100
for n in range(N):
   a,b=map(int,input().split())
   if a>b:
      chanyong-=a
   if b>a:
      jungsu-=b
print(jungsu, chanyong)