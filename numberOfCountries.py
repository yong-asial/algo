def color (val, B, A, x, y):
    if x < 0 or x >= len(A):
        return
    if y < 0 or y >= len(A[0]):
        return
    if not B[x][y] :
        return
    if A[x][y] != val:
        return
    B[x][y] = False
    color(val, B, A, x + 1, y)
    color(val, B, A, x - 1, y)
    color(val, B, A, x, y - 1)
    color(val, B, A, x, y + 1)

def solution(A):
    B = [[True for x in A[0]] for y in A]
    count = 0
    for x in range(0, len(A)):
        for y in range(0, len(A[x])):
            if not B[x][y]:
                continue;
            count += 1
            color(A[x][y], B, A, x, y)
    return count
    pass