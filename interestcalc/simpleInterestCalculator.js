function compute(){
    let p,r,t,si;
    p=Pam.value;
    r=Rof.value;
    t=tim.value;
    si=(p*(t*12)*r)/100;
    //result.value="simple interest amount:"+si;
    result.innerHTML="<strong>Total amount:</strong>&#8377;"+(si+parseInt(p));
}