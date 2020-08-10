package assignment_4;
class Q
{
	int n;
	boolean b=false;
	synchronized int get()
	{
		while(!b)
		{
			try
			{
				wait();
			}
			catch(InterruptedException ie){}
		}
		System.out.println("got:"+n);
		b=false;
		notify();
		return n;
	}
	synchronized void put(int n)
	{
		while(b)
		{
			try
			{
				wait();
			}
			catch(InterruptedException ie){}
		}
		this.n=n;
		System.out.println("put:"+n);
		b=true;
		notify();
	}
}
class Producer implements Runnable
{
	Q q;
	Producer(Q q)
	{
		this.q=q;
		new Thread(this,"Producer").start();
	}
	public void run()
	{
		int i=0;
		while(true)
		{
			q.put(i++);
			if(i==5)
			{
				break;
			}
		}
	}
}
class Consumer implements Runnable
{
	Q q;
	Consumer(Q q)
	{
		this.q=q;
		new Thread(this,"Consumer").start();
	}
	public void run()
	{
		while(true)
		{
			q.get();
		}
	}
}
class InterthreadCommunication
{
	public static void main(String[] args)
	{
		Q q=new Q();
		new Producer(q);
		new Consumer(q);
	}
}



/*

Output:
put:0
got:0
put:1
got:1
put:2
got:2
put:3
got:3
put:4
got:4

*/
