import java.util.*;
import java.lang.Math;
public class Armstrong
{
  public static void main (String[]args)
  {
    Scanner value = new Scanner (System.in);
      System.out.print ("Enter a number:");
    String num = value.nextLine ();
    int l = num.length ();
    int n = Integer.parseInt (num);
    int f = n;
    int c = 0, k;
    while (n > 0)
      {
	k = n % 10;
	c = c + (int) Math.pow (k, l);
	n = n / 10;
      }
    if (c == f)
      {
	System.out.println ("Armstrong number");
      }
    else
      {
	System.out.println ("Not an armstrong number");
      }
  }
}



/*

Input:
Enter a number:153

Output:
Armstrong number

*/
