const {Iris}=require('machinelearn/datasets');
const {KNeighborsClassifier}=require('machinelearn/neighbors');

(async function(){
    const iris=new Iris();
    const d=await iris.load();
    const knn=new KNeighborsClassifier();
    knn.fit(d.data, d.targets);
    for(let i=0; i<d.data.length; i++){
        console.log(d.targets[i], knn.predict(d.data[i]));
    }
})();