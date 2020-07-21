import java.util.*;
public class AreaOfRect
{
  public static void main (String[]args)
  {
    Scanner values = new Scanner (System.in);
      System.out.print ("Enter the length of the rectangle:");
    int l = values.nextInt ();
      System.out.print ("Enter the bredth of the rectangle:");
    int b = values.nextInt ();
      System.out.println ("Area of the rectangle is:" + l * b);
  }
}



/*

Input:
Enter the length of the rectangle:2
Enter the bredth of the rectangle:3

Output:
Area of the rectangle is:6

*/