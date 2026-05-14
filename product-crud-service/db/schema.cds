namespace product.management;

entity Products{
    key itemId : Integer;
    description : String(200);
    qunatity : Integer;
    price : Decimal(10,4);
}