class Point
{
    private int x,y;
    public Point()
    {
        this(2,3);
    }
    public Point(int x,int y)
    {
        this.x=x;this.y=y;
    }
    public Point(Point axis)
    {
        x=axis.x;y=axis.y;
    }
    public void display()
    {
        System.out.println("x-axis="+x+",y-axis="+y);
    }
    public static void main(String[] args)
    {
        Point p1=new Point();
        Point p2=new Point(4,5);
        Point p3=new Point(p1);
        p1.display();
        p2.display();
        p3.display();
    }
}



/*

Output:
x-axis=2,y-axis=3
x-axis=4,y-axis=5
x-axis=2,y-axis=3

*/