import java.util.Scanner;
class Nprimes
{
  public static void main (String args[])
  {
    int num = 2, c = 0;
    Scanner value = new Scanner (System.in);
    System.out.print ("Enter a number:");
    int n = value.nextInt ();
    System.out.println("The "+n+" prime numbers are:");
    while (c != n)
    {
        boolean t = true;
	    for(int i=2;i<Math.sqrt(num);i++)
	    {
	        if (num % i == 0)
	        {
	            t = false;
	            break;
	        }
	    }
	    if (t)
	    {
	        c++;
	        System.out.print (num + " ");
	    }
	    num++;
    }
  }
}



/*

Input:
Enter a number:15

Output:
The 15 prime numbers are:
2 3 4 5 7 9 11 13 17 19 23 25 29 31 37

*/