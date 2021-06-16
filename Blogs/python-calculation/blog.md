---
title: Python programming Calculation Programs
keywords: python
---

# Python programming Calculation Programs

# YOU CAN FIND PROGRAMS BELLOW:

P.1.Find Angstrom Number.

Program:

n=int(input('Enter  three digit number: '))
nu=n
sum=0
for x in range(0,3):
    r=n%10
    # print(r)
    sum=sum+r**3
    # print(sum)
    n=n//10
    # print(n)
   
if(sum==nu):
    print('Enter Number is Angstrom Number')
else:
    print('Enter Number is not Angstrom Number')


Output:
Enter  three digit number: 121
Enter Number is not Angstrom Number


P.2.Find Are Of Circle.

Program:

p=3.14
r=float(input('Enter Radius of Circle :'))
a=p*r*r
print(f'The are of circle {a}')


Output:
Enter Radius of Circle :12
The are of circle 452.15999999999997


P.3.Find ASCII Value.

Program:

c='a'
print('the ASCII of a is ',ord(c))


Output:

the ASCII of a is  97


P.4.Find Calendar at year and month.

Program:

import calendar
print(calendar.month(2002,2))

Output:

 February 2002
Mo Tu We Th Fr Sa Su
             1  2  3
 4  5  6  7  8  9 10
11 12 13 14 15 16 17
18 19 20 21 22 23 24
25 26 27 28


P.5.Find Binary ,Octal of Decimal.

Program:

dec = 344
print("The decimal value of", dec, "is:")
print(bin(dec), "in binary.")
print(oct(dec), "in octal.")
print(hex(dec), "in hexadecimal.")

Output:

The decimal value of 344 is:
0b101011000 in binary.
0o530 in octal.
0x158 in hexadecimal.


P.6.Find Factorial of Number.

Program:

def factorial(n):
    if n==0 or n==1:
        return 1
    else:
        return n*factorial(n-1)
n=int(input('Enter Number :'))
f=factorial(n)
print(f'Factorial is {f}')


Output:

Enter Number :5
Factorial is 120


P.7.Find Angstrom in given range.

Program:

def a(n):
    sum=0
    o=len(str(n))
    for x in range(0,n+1):
        r=n%10
        sum=sum+r**o
        n=n//10
    return sum


n1=int(input('Enter Upper range: '))
n2=int(input('Enter Lower range: '))
l=[]
for x in range(n1,n2+1):
    sum=a(x)
    if(sum==x):
        l.append(x)
    else:
        pass
print(f'Angstrom number between {n1} and {n2}')
print(l)

Output:

Enter Upper range: 150
Enter Lower range: 200
Angstrom number between 150 and 200
[153]

P.8.Palidrome Number.

Program:

print('Enter Number(>10)')
s=str(input())
d=s[::-1]
if s==d:
    print('Enter number is Palindrome Number')
else:
    print('Enter number is not Palindrome Number')

Output:

Enter Number(>10)
12
Enter number is not Palindrome Number

P.9.Kilometre to mile.

Program:

kill=float(input('Enter kilometre:'))
mile=kill*.62
print('%.2f kilometre is equal to %.2f mile'%(kill,mile))

Output:

Enter kilometre:100
100.00 kilometre is equal to 62.00 mile

P.10. Check lip year.

Program:

year=int(input('Enter year: '))

if (year % 4) == 0:
   if (year % 100) == 0:
       if (year % 400) == 0:
           print("{0} is a leap year".format(year))
       else:
           print("{0} is not a leap year".format(year))
   else:
       print("{0} is a leap year".format(year))
else:
   print("{0} is not a leap year".format(year))

Output:

Enter year: 2112
2112 is a leap year


P.11. Reverse the string World.

Program:

import array 
s=str(input('Enter String :'))
d=len(s)
# print(s[0])
# print(d)
b=''
# print(d[0])
f=d
for x in range(d-1,-1,-1):
    if(s[x]==" "):
        for i in range(x,f):
            b=b+s[i]
        f=x
        b=b+' '  
i=0
while s[i]!=' ':
    b=b+s[i]
    i+=1
print(b)

Output:

Enter String :zeel is best
 best  is zeel


P.12. Reverse of string.

Program:

s=str(input('Enter the String: '))
d=s[::-1]
print(d)
print(type(d))

Output:

Enter String :zeel is best
tseb si leez


P.13. Swap of two numbers.

Program:

def swap(a,b):
    t=a
    a=b
    b=t
    #or a,b=b,a
    print(f'After swapping a={a} and b={b}')
a=int(input('Enter the first Number: '))
b=int(input('Enter the Second Number: '))
print(f'Before swapping a={a} and b={b}')
swap(a,b)

Output:

Enter the first Number: 2
Enter the Second Number: 3
Before swapping a=2 and b=3
After swapping a=3 and b=2


P.14.FIND Mean , Median and Mode.

Program:

from statistics import mean as m 
s=m([1,2,1,1,1,2,2])
print(f'The mean is {s}')
from statistics import median as m 
s=m([1,2,1,1,1,2,2])
print(f'The median is {s}')
from statistics import mode as m 
s=m([1,2,1,1,1,2,2])
print(f'The mode is {s}')
from statistics import variance as m 
s=m([1,2,1,1,1,2,2])
print(f'The  variance is {s}')

Output:

The mean is 1.4285714285714286
The median is 1
The mode is 1
The  variance is 0.2857142857142857


P.15.Find the sum at given rang.

Program:

s=int(input('Enter the first number: '))
n=int(input('Enter the  Second number: '))
d=list(range(s,n+1))
sum=0
for x in d:
    sum=sum+x
print(f'sum= {sum}')

Output:

Enter the first number: 2
Enter the  Second number: 67
sum= 2277