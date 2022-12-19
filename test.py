#miniMaxSum challenge 
def miniMaxSum(arr):
    return (sum(sorted(arr)[:-1]), sum(sorted(arr)[1:]))

print(miniMaxSum([7,69,2,221,8974]))
print(miniMaxSum([1,2,3,4,5]))