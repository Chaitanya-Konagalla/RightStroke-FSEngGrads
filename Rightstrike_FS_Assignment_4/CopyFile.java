package assignment_4;
import java.io.*;
public class CopyFile 
{
	public static void main(String[] args) throws IOException
	{
		int i;
		FileInputStream fin = null;
        FileOutputStream fout = null;
        try
        {
        	fin=new FileInputStream("D://text files/input.txt");
        }
        catch(FileNotFoundException e) 
        {
        	System.out.println("File not found");
        }
        try
        {
        	fout=new FileOutputStream("D://text files/input1.txt");
        }
        catch(FileNotFoundException e)
        {
        	System.out.print("File unable to open");
        }
        try
        {
        	do
        	{
        		i=fin.read();
        		if(i!=-1)
        		{
        			fout.write(i);
        		}
        	}while(i!=-1);
        }
        catch(FileNotFoundException e)
        {
        	System.out.println("File unable to copy");
        }
        fin.close();
        fout.close();
        
	}

}
