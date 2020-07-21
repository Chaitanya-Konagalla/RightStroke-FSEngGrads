import java.util.Scanner;
public class EvenNums
{
	public static void main(String[] args) 
	{
	    Scanner values=new Scanner(System.in);
	    int s,e,i;
	    System.out.print("Enter starting number:");
	    s=values.nextInt();
	    System.out.print("Enter ending number:");
	    e=values.nextInt();
	    System.out.println("The even numbers between "+s+" and "+e+" are");
	    for(i=s;i<=e;i++)
	    {
	        if(i%2==0)
	        {
	            System.out.print(i+" ");
	        }
	    }
	}
}



/*

Input:
Enter starting number:2
Enter ending number:25

Output:
The even numbers between 2 and 25 are
2 4 6 8 10 12 14 16 18 20 22 24

*/
