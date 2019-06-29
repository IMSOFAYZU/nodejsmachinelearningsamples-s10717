const {Iris}=require('machinelearn/datasets');
const {KNeighborsClassifier}=require('machinelearn/neighbors');
const { train_test_split }=require('machinelearn/model_selection');

(async function(){
    const iris=new Iris();
    const d=await iris.load();
    const knn=new KNeighborsClassifier();

    let split=train_test_split(d.data, d.targets, {
        test_size: 0.1,
        train_size: 0.9,
        random_state: Math.random()*100
    });

    knn.fit(split.xTrain, split.yTrain);
    let correct=0.0;
    for(let i=0; i<split.xTest.length; i++){
        let result=knn.predict(split.xTest[i]);
        if(split.yTest[i]==result){
            correct=correct+1;
        }
    }
    console.log(correct/split.xTest.length);
})();