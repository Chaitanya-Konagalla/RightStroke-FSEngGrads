class Thread1 extends Thread
{
	public void run()
	{
		try
		{
			for(int i=0;i<5;i++)
			{
				System.out.println("Message 1");
				Thread.sleep(500);
			}
		}
		catch(Exception ex)
		{
		}
	}
}
class Runnable1 implements Runnable
{
	public void run()
	{
		try
		{
			for(int i=0;i<5;i++)
			{
				System.out.println("Message 2");
				Thread.sleep(500);
			}
		}
		catch(Exception ex)
		{
		}
	}
}
public class ThreadDemo
{
	public static void main(String[] args) throws InterruptedException
	{
		Thread1 t1=new Thread1();
		t1.start();
		t1.setPriority(10);
		Runnable1 r1=new Runnable1();
		Thread t2=new Thread(r1);
		t2.start();
		t2.setPriority(2);
		t1.join();
		t2.join();
		System.out.println("Both threads finished");
	}
}



/*

Output:
Message 1
Message 2
Message 1
Message 2
Message 1
Message 2
Message 1
Message 2
Message 1
Message 2
Both threads finished

*/
