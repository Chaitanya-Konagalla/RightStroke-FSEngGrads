class SurfaceArea
{
    constructor (public a?:number, public b?:number, public c?:number){}
    r_sarea()
    {

        console.log("The surface area of rectangle is "+2*((this.a*this.b)+(this.b*this.c)+(this.c*this.a)));
    }
    s_sarea()
    {
        console.log("The surface area of square is "+this.a*this.a);
    }
    t_sarea()
    {
        console.log("The surface area of triangle is "+0.5*this.a*this.b);
    }
}
let Rectangle_area = new SurfaceArea(5,6,9);
Rectangle_area.r_sarea();
let Square_area = new SurfaceArea(5);
Square_area.s_sarea();
let Triangle_area = new SurfaceArea(6,9);
Triangle_area.t_sarea();


/*

The surface area of rectangle is 258
The surface area of square is 25
The surface area of triangle is 27

*/


