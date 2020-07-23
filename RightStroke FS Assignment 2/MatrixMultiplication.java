public class MatrixMultiplication
{
	public static void main(String[] args) 
	{
	    int i,j,k;
	    int a[][]={{1,2,3},{4,5,6},{7,8,9}};
	    int b[][]={{1,2,3},{4,5,6},{7,8,9}};
		int c[][]=new int[3][3];
		for(i=0;i<=2;i++)
		{
		    int count=0;
		    for(j=0;j<=2;j++)
		    {
		        for(k=0;k<=2;k++)
		        {
		            count+=a[i][k]*b[k][j];
		        }
		        c[i][j]=count;
		        System.out.print(c[i][j]+" ");
		    }
		    System.out.println();
		}
	}
}



/*

Output:
30 66 108
66 147 243
102 228 378

*/