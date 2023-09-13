def solution(my_string):
    alpha = ("a,e,i,o,u")
    for i in alpha:
        my_string = my_string.replace(i,"")
    return my_string