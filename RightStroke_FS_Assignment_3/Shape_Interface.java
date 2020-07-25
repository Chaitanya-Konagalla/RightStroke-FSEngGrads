interface Shape
{
    final double pi=3.14;
    public float CalculateArea(float a,float b);
}
class Square implements Shape
{
    public float CalculateArea(float a,float b)
    {
        return (a*b);
    }
}
class Circle implements Shape
{
    public float CalculateArea(float a,float b)
    {
        return ((float)pi*a*b);
    }
}
class Triangle implements Shape
{
    public float CalculateArea(float l,float h)
    {
        return ((float)0.5*l*h);
    }
}
public class Shape_Interface
{
   public static void main (String[] args)
   {
       Shape s1,s2,s3;
       s1=new Square();
       System.out.println("Area of the Square is: "+s1.CalculateArea(5,5));
       s2=new Circle();
       System.out.println("Area of the Circle is: "+s2.CalculateArea(10,10));
       s3=new Triangle();
       System.out.println("Area of the Triangle is: "+s3.CalculateArea(2,3));
   } 
}



/*

Output:
Area of the Square is: 25.0
Area of the Circle is: 314.0
Area of the Triangle is: 3.0

*/