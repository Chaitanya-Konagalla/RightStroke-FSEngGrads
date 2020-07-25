class Publication
{
    String title;
    int price;
    Publication(String title,int price)
    {
        this.title=title;
        this.price=price;
    }
    void display()
    {
        System.out.println("Title:"+title);
        System.out.println("Price:"+price+"/-");
    }
}
class Book extends Publication
{
    int pages;
    Book(String title,int price,int pages)
    {
        super(title,price);
        this.pages=pages;
    }
    void display()
    {
        super.display();
        System.out.println("Pages:"+pages);
    }
}
class CD extends Publication
{
    int size;
    CD(String title,int price,int size)
    {
        super(title,price);
        this.size=size;
    }
    void display()
    {
        super.display();
        System.out.println("CDSize:"+size+"GB");
    }
}
class PublicationDetails
{
    public static void main(String[] args)
    {
        Publication pbook;
        Publication pcd;
        System.out.println("Harry Potter Book details:");
        pbook=new Book("Harry Potter",500,250);
        pbook.display();
        System.out.println();
        System.out.println("Harry Potter CD details:");
        pcd=new CD("Harry Potter",100,2);
        pcd.display();
    }
}



/*

Output:
Harry Potter Book details:
Title:Harry Potter
Price:500/-
Pages:250

Harry Potter CD details:
Title:Harry Potter
Price:100/-
CDSize:2GB

*/