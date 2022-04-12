function Vacas(list,cod){
    var res=[];
    var list2=list.split(",");
    var cod2=cod.split(",");
    for(let i=1;i<=list2.length;i++){
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

export default Toros;