function Vacas(list,cod){
    var res=[];
    var list2=list.split(",");
    var cod2=cod.split(",");
    for(let i=0;i<list2.length;i++){
        if(list2[i]==cod2[i]){
            res+= "*";
        }
        else{
            res+=""
        }
    }
    return res;
    
}
function Toros(list,cod){
    var res=[];
    var list2=list.split(",");
    var cod2=cod.split(",");
    for(let i=0;i< list2.length;i++){
        for(let j=0;j<cod2.length;j++){
            if(i!=j && list2[i]==cod2[j]){
                res+= "!";
            }
            else{
                res+=""
            }
        }
    }
    return res;
    
}
function Ternera(list,cod){
    var res=[];
    var list2=list.split(",");
    var cod2=cod.split(",");
    for(let i=0;i<list2.length;i++){
        if(list2[i]>1+cod2[i]){
            res+= "#";
        }
        else{
            res+=""
        }
    }
    return res;
    
}
function Bisonte(list,cod){
    var res=[];
    var list2=list.split(",");
    for(let i=0;i<list2.length;i++){
        if(list2[i]/list2[i]==1 && list2[i]/1==list2[i]){
            res+= "%";
        }
        else{
            res+=""
        }
    }
    return res;
    
}
function VacasyToros(list,cod){
    var res1=[],res2=[],res3=[],res4=[],Res=[],ResT=[],ResTo=[];
    res1+=Vacas(list,cod);
    res2+=Toros(list,cod);
    res3+=Ternera(list,cod);
    res4+=Bisonte(list,cod)
    Res=res1.concat(res2);
    ResT=Res.concat(res3);
    ResTo=ResT.concat(res4);
    return ResTo;
}

export default VacasyToros;