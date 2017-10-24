#include <stdio.h>
void main(){
    int a = 0x4d;
    printf("%x \n",a);
    int b=oxb3;
    printf("%x \n",b);
    int x=a^b;
    printf("%x \n",x);
    b=~(b^0x3f);
    printf("%x \n",b);
    int y=x|b;
    printf("%x \n",y);
    if(y<x){int z=a<<4;
        printf("%x \n",z);}
    else{int z=a>>4;
        printf("%x \n",z);}
    do{
        a++;
        printf("%x \n",a);
        x=(x>>2)|0xc0;
        printf("%x \n",x);

    }while(a<0x4f);
}