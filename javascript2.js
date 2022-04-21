function math(){
    a=Number(document.cal.first.value);
    b=Number(document.cal.second.value);
    c=Number(document.cal.third.value);
    d=Number(document.cal.forth.value);
    e=Number(document.cal.fifth.value);
    
    f=Math.max(a,b,c,d,e);
    document.cal.max.value=f;
    g=Math.min(a,b,c,d,e);
    document.cal.mkin.value=g;
    h=Math.random(a,b,c,d,e);
    document.cal.random.value=h;

  }