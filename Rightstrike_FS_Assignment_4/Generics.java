package assignment_4;
class Gen<T>
{
	T ob;
	Gen(T o)
	{
		ob=o;
	}
	T getob()
	{
		return ob;
	}
	void showType()
	{
		System.out.println("Type of T is "+ob.getClass().getName());
	}
}
public class Generics
{
	public static < E > void printArray( E[] inputArray ) 
	{
		for(E element : inputArray)
		{
			System.out.printf("%s ", element);
		}
		System.out.println();
	}
	public static void main(String[] args) 
	{
		System.out.println("By using generic class");
		System.out.println();
		Gen<Integer> iOb=new Gen<Integer>(10);
		iOb.showType();
		int v=iOb.getob();
		System.out.println("Value:"+v);
		System.out.println();
		Gen<Float> fOb=new Gen<Float>(10.0F);
		fOb.showType();
		Float f=fOb.getob();
		System.out.println("Value:"+f);
		System.out.println();
		System.out.println("By using generic method");
		System.out.println();
	    Integer[] intArray = { 1, 2, 3, 4, 5 };
	    Double[] doubleArray = { 1.1, 2.2, 3.3, 4.4 };
	    Character[] charArray = { 'H', 'E', 'L', 'L', 'O' };
	    System.out.println("Array integerArray contains:");
	    printArray(intArray);
	    System.out.println("\nArray doubleArray contains:");
	    printArray(doubleArray);
	    System.out.println("\nArray characterArray contains:");
	    printArray(charArray);
	}
}



/*

By using generic class

Type of T is java.lang.Integer
Value:10

Type of T is java.lang.Float
Value:10.0

By using generic method

Array integerArray contains:
1 2 3 4 5 

Array doubleArray contains:
1.1 2.2 3.3 4.4 

Array characterArray contains:
H E L L O 

*/