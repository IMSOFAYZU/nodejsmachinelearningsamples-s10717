const {Iris}=require('machinelearn/datasets');
const {KNeighborsClassifier}=require('machinelearn/neighbors');

(async function(){
    const iris=new Iris();
    const d=await iris.load();
})();