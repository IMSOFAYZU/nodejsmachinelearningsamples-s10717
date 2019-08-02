const {Iris}=require('machinelearn/datasets');
const {KNeighborsClassifier}=require('machinelearn/neighbors');
const { train_test_split }=require('machinelearn/model_selection');
(async function(){
    const iris=new Iris();
    const d=await iris.load();
    const knn=new KNeighborsClassifier();
    let s=train_test_split(d.data,d.targets,{
            test_size:0.1,train_size:0.9,random_state:50
    });
    knn.fit(d.data, d.targets);
    let count=0;
    for(let i=0; i<d.data.length; i++){
        let y=d.targets[i];
        let p=kmm.predict(d.data[i]);
        if(y==p){
            count++;
        }
    }
    console.log(count/s.xTest.length);
})();