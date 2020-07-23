class Student
{
    String rollno;  
    String name;  
    static String college="GIET";  
    static void change()
    {  
     college="GIER";  
    }  
    Student(String r,String n)
    {  
     rollno=r;  
     name=n;  
    }  
    void display()
    {
        System.out.println(rollno+" "+name+" "+college);
    }  
}  
  
public class TestStaticMethod
{  
    public static void main(String args[])
    {  
    Student.change();
    Student s1 = new Student("17551A04B5","Chaitanya");  
    Student s2 = new Student("17551A04A9","Sanjay");  
    Student s3 = new Student("17551A04F1","Srinvas");  
    s1.display();  
    s2.display();  
    s3.display();  
    }  
}  



/*

Output:
17551A04B5 Chaitanya GIER
17551A04A9 Sanjay GIER
17551A04F1 Srinvas GIER

*/