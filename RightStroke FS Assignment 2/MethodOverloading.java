class MethodOverloading
{
    public static void area(float r)
    {
        System.out.println("Area of circle is:"+(3.14f*r*r));
    }
    public static void area(int s)
    {
        System.out.println("Area of square is:"+(s*s));
    }
    public static void area(int l,int b)
    {
        System.out.println("Area of rectangle is:"+(l*b));
    }
    public static void main(String args[])
    {
       MethodOverloading.area(10.0f);
       MethodOverloading.area(10);
       MethodOverloading.area(2,3);
    }
}



/*

Output:
Area of circle is:314.0
Area of square is:100
Area of rectangle is:6

*/