function setup()
{
    createCanvas(1000,700);
}
function draw()
{
    orbite();
    soare();
}
function soare()
{
    stroke("black");
    fill("yellow");
    circle(500,350,100);
}
function orbite()
{
    stroke("black");
    fill("white");
    ellipse(500,350,250,120);
    stroke("black");
    fill("white");
    ellipse(500,350,400,192);
    stroke("black");
    fill("white");
    ellipse(500,350,550,264);
    stroke("black");
    fill("white");
    ellipse(500,350,700,336);

}