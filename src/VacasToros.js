function codSecret(list,cod){
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
export default codSecret;