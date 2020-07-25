public class ExceptionHandling 
{
	public static void main(String args[])
	{
		int i,num,charcount=0;
		for(i=0;i<args.length;i++)
		{
			try
			{
				num=Integer.parseInt(args[i]);
			}
			catch(NumberFormatException e)
			{
				charcount++;
			}
		}
		System.out.println("Numbers Count in the command line input is: "+(args.length-charcount));
		System.out.println("Characters Count in the command line input is: "+(charcount));
	}
}



/*

Input:
c h a i t u 1 0 0

Output:
Numbers Count in the command line input is: 3
Characters Count in the command line input is: 6

*/