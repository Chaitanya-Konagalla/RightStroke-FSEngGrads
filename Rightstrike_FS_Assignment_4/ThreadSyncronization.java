class Callme
{
	synchronized void call()
	{
		System.out.print("{Hi");
		try
		{
			Thread.sleep(500);
		}
		catch(InterruptedException ie)
		{
		}
		System.out.println("}");
	}
}
class Caller implements Runnable
{
	Callme target;
	Thread t;
	Caller(Callme target)
	{
		this.target=target;
		t=new Thread(this);
		t.start();
	}
	public void run()
	{
		target.call();
	}
}
public class ThreadSyncronization 
{
	public static void main(String[] args)
	{
		Callme target=new Callme();
		Caller c1=new Caller(target);
		Caller c2=new Caller(target);
		Caller c3=new Caller(target);
	}
}



/*

Output:
{Hi}
{Hi}
{Hi}

*/