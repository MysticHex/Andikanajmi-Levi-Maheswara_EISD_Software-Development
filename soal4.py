def has_duplicates(arr):
    return len(arr) != len(set(arr))

numbers = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10,  12, 14, 16, 18, 20, 17, 19]
duplikat=has_duplicates(numbers)

if duplikat==True:
    print("Panjang array: ",len(numbers))
    print("Panjang dengan value unik: ",len(set(numbers)))
    print("Terdapat duplikat di dalam array")
else:
    print("Tidak terdapat duplikat di dalam array")