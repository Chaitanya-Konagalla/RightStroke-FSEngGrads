import java.util.Scanner;
public class PalindromeNumber
{
  public static void main (String[]args)
  {
    Scanner num = new Scanner (System.in);
      System.out.print ("Enter a number:");
    int n = num.nextInt ();
    int c = 0, k, f;
      f = n;
    while (n > 0)
      {
	k = n % 10;
	c = c * 10 + k;
	n = n / 10;
      }
    if (f == c)
      {
	System.out.println ("Given number is a palindrome");
      }
    else
      {
	System.out.println ("Given number is not a palindrome");
      }
  }
}



/*

Input:
Enter a number:1551

Output:
Given number is a palindrome

*/