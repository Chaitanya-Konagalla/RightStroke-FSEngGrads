import java.util.Scanner;
class UDE extends Exception
{
	int basicpay;
	UDE(int basicpay)
	{
		this.basicpay=basicpay;
	}
	public String toString()
	{
		return("Invalid basicpay:"+basicpay);
	}
}
public class PayOutOfBoundsException
{
	public static void main(String[] args) 
	{
		Scanner inp=new Scanner(System.in);
		System.out.print("Enter the basicpay:");
		int basicpay=inp.nextInt();
		try
		{
			if((basicpay<10000)||(basicpay>30000)) throw new UDE(basicpay);
			System.out.println("Valid basicpay:"+basicpay);
		}
		catch(UDE ex)
		{
			System.out.println(ex);
		}
	}
}



/*

Input:
Enter the basicpay:2000

Output:
Invalid basicpay:2000

*/