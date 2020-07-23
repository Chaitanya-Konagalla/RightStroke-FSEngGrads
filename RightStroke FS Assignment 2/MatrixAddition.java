public class MatrixAddition
{
	public static void main(String[] args) 
	{
	    int i,j;
	    int a[][]={{1,2,3},{4,5,6},{7,8,9}};
	    int b[][]={{10,11,12},{13,14,15},{16,17,18}};
		int c[][]=new int[3][3];
		for(i=0;i<=2;i++)
		{
		    for(j=0;j<=2;j++)
		    {
		        c[i][j]=a[i][j]+b[i][j];
		        System.out.print(c[i][j]+" ");
		    }
		    System.out.println();
		}
	}
}



/*

Output:
11 13 15
17 19 21
23 25 27

*/