function math(){
    a=Number(document.cal.first.value);
    b=Number(document.cal.second.value);
    c=a*b;
    document.cal.mul.value=c;
  
    d=a+b;
    document.cal.add.value=d;

    e=a-b;
    document.cal.sub.value=e;
  
    f=a/b;
    document.cal.div.value=f;
  }