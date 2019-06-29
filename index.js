const {Iris}=require('machinelearn/datasets');
const {KNeighborsClassifier}=require('machinelearn/neighbors');

(async function(){
    const iris=new Iris();
    const d=await iris.load();
    const knn=new KNeighborsClassifier();
    knn.fit(d.data, d.targets);
    let correct=0.0;
    for(let i=0; i<d.data.length; i++){
        if(d.targets[i]==knn.predict(d.data[i])){
            correct=correct+1;
        }
        console.log(d.targets[i], knn.predict(d.data[i]));
    }
    console.log(correct/d.data.length);
})();