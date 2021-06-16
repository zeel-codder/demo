---
title: Java programming Array Programs
keywords: Java
---

# Java programming Array Programs

# YOU CAN FIND PROGRAMS BELLOW:

## P.1 Addition of Two Array

*Program:*

```java
package Array;

import java.io.*;

public class AddTwoArray {
 public static void main(String[] args) throws NumberFormatException, IOException
 {
  int a[ ][ ]= new int[10][10];
  int b[][]=new int[10][10];
  int r1,r2,c1,c2,i,j;
  BufferedReader d= new BufferedReader(new InputStreamReader(System.in));
  System.out.println("Enter number of raw and column of first Matrix");
  r1=Integer.parseInt(d.readLine());
  c1=Integer.parseInt(d.readLine());
  System.out.println("Enter number of raw and column of first Matrix");
  r2=Integer.parseInt(d.readLine());
  c2=Integer.parseInt(d.readLine());
     if(!(r1==r2&&c1==c2))
     {
      System.out.println("Enter same order of matrix's");
     }
     else
     {
      System.out.println("Enter element in first matrix");
      for(i=0;i<r1;i++)
      {
       for(j=0;j<c1;j++)
       {
        a[i][j]=Integer.parseInt(d.readLine());
       }
      }
      System.out.println("Enter element in Second matrix");
      for(i=0;i<r1;i++)
      {
       for(j=0;j<c1;j++)
       {
        b[i][j]=Integer.parseInt(d.readLine());
       }
      }
      System.out.println("Addition of both matrix is:");
      for(i=0;i<r1;i++)
      {
       for(j=0;j<c1;j++)
       {
             System.out.println((a[i][j]+b[i][j])+"\t");
       }
          System.out.println();
      }
     }
 }

}
```

*Output*

```terminal
Enter number of raw and column of first Matrix
2 
2
Enter number of raw and column of Second
2
2
Enter element in first matrix
1 2
1 2
Enter element in Second matrix
1 2
1 2
Addition of both matrix is:
2 4
2 4
```


## P.2. Copy Of Array.

**Program:**

```java
package Array;

public class ArrayCopy {
 public static void main(String[] args)
 {
  char a[]= {'a','b','c','d','e','f','k'};
  char b[] = new char[12];
  System.arraycopy(a, 2, b, 0, 4);
  System.out.println(b);
 }

}
```

*Output*

```terminal
cdef
```

## P.3. Array Declaration.

*Program:*

```java
package Array;

import java.io.*;

public class ArrayExample {
 public static void main(String[] args) throws NumberFormatException, IOException
 {
  int a[]=new int[10];
  BufferedReader h= new BufferedReader(new InputStreamReader(System.in));
  int n,i;
  System.out.println("Enter how many element you want to enter");
  n=Integer.parseInt(h.readLine());
  System.out.println("Enter element");
  for(i=0;i<n;i++)
  {
   a[i]=Integer.parseInt(h.readLine());
  }
  for(i=0;i<n;i++)
  {
   System.out.println("The value at Array index "+i+" is"+a[i]);
  }
 }

}
```


*Output*

```terminal
Enter how many element you want to enter
4
Enter element
1
1
1
1
The value at Array index 0 is1
The value at Array index 1 is1
The value at Array index 2 is1
The value at Array index 3 is1
```

## P.4. Array  Element Sum and Average.

*Program:*

```java
package Array;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class SumArray {
 public static void main(String[] args) throws NumberFormatException, IOException
 {
  int a[]=new int[10];
  BufferedReader h= new BufferedReader(new InputStreamReader(System.in));
  int n,i,sum=0;
  float avg;
  System.out.println("Enter how many element you want to enter");
  n=Integer.parseInt(h.readLine());
  System.out.println("Enter element");
  for(i=0;i<n;i++)
  {
   a[i]=Integer.parseInt(h.readLine());
  }
  for(i=0;i<n;i++)
  {
   sum=sum+a[i];
  }
  avg=(float)sum/n;
  System.out.println("The sum of all element is"+sum);
  System.out.println("The Average of all element is"+avg);
 }
}
```


*Output*

```terminal
Enter how many element you want to enter
4
Enter element
1
1
1
1
The sum of all element is 4
The Average of all element is 1
```