def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

results = []
n = 1
# 输出 2000 以内的斐波那契数列
while True:
    result = fibonacci(n)
    if result <= 2000:
        results.append(result)
        n = n + 1
    else:
        break
print(results)

# 翻转
results.reverse()
print(results)

# 去除首尾两个元素
results.pop(0)
results.pop()
print(results)

# 取出次大数和最大数进行求和
first_max = results[0]
second_max = results[1]
print(first_max + second_max)

