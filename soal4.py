def has_duplicates(arr):
    return len(arr) != len(set(arr))

numbers = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10,  12, 14, 16, 18, 20, 17, 19]
print(has_duplicates(numbers))  # Returns True