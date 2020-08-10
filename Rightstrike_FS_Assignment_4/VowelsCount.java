package assignment_4;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
public class VowelsCount
{
	public static void main(String[] args) throws IOException
	{
		int i,vcount=0;
		FileInputStream fin;
		try
		{
		fin=new FileInputStream("D://java programs/vowelscountinput.txt");
		}
		catch(ArrayIndexOutOfBoundsException e)
		{
			System.out.println("Usage: ShowFile");
			return;
		} 
		catch (FileNotFoundException e)
		{
			System.out.println("File Not Found");
			return;
		}
		System.out.println("The input string in the given file is:");
		do
		{
			i=fin.read();
			System.out.print((char)i);
			if(((i!=-1)&&(((char)i=='a')||((char)i=='e')||((char)i=='i')||((char)i=='o')||((char)i=='u')||((char)i=='A')||((char)i=='E')||((char)i=='I')||((char)i=='O')||((char)i=='U'))))
					{
				vcount++;
					}
		}while (i!=-1);
		fin.close();
		System.out.println();
		System.out.println("Number of vowels in the given file are: "+vcount);
	}
}



/*

Output:
The input string in the given file is:
Write a java program to count no of vowels in a given file?
Number of vowels in the given file are: 20

*/