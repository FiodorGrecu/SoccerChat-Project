# import random
# word = input("Give me a word and I will mix it up ")
# word = word.upper()
# print("".join(random.sample(word, len(word))))
# 
# shuffled = list(word)
# random.shuffle(shuffled)
# shuffled = ''.join(shuffled)
# shuffled = shuffled.upper()
# print(word)
# print(shuffled)
# random = "wdd"
# random_string = "".join([str(random.randint(1,10)) for i in range(25)])


# from datetime import datetime
# now = datetime.now()
# print (now.strftime("%Y-%m-%d %H:%M:%S"))

# import time
# timer_length = float(input("How many seconds would you like you're timer to be set for? "))
# time.sleep(timer_length)
# print("Done!")
# import schedule
# import time

# def job():
#     print("I'm working...")

# schedule.every(1).seconds.do(job)
# schedule.every().hour.do(job)

# def square(numbers):
#     return numbers ** 2
# numbers=[1,2,3,4]
# squared = map(square, numbers)
# print(list(squared))

# from datetime import datetime

# datetime.today().strftime('%Y-%m-%d')

list_of_dics = [
  {"name":"Paul"},
  {"name":"Wan"},
  {"name":"Brian"},
  {"name":"David"},
  {"name":"Victor"}
]
  
print(list_of_dics[0]["name"])
print(list_of_dics[1]["name"])
print(list_of_dics[2]["name"])
print(list_of_dics[3]["name"])
print(list_of_dics[4]["name"])
