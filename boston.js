const {Boston}=require('machinelearn/datasets');
const {LinearRegression}=require('machinelearn/linear_model');
const { train_test_split }=require('machinelearn/model_selection');

(async function(){
    const boston=new Boston();
    const d=await boston.load();
    console.log(d.data);
})();