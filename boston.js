const {Boston}=require('machinelearn/datasets');
const {LinearRegression}=require('machinelearn/linear_model');
const { train_test_split }=require('machinelearn/model_selection');
const tf=require('@tensorflow/tfjs');
tf.disableDeprecationWarnings();
(async function(){
    const boston=new Boston();
    const d=await boston.load();
    const ln=new LinearRegression();
    let split=train_test_split(d.data, d.targets, {
        test_size: 0.1,
        train_size: 0.9,
        random_state: Math.random()*100
    });

    ln.fit(split.xTrain, split.yTrain);
    for(let i=0; i<split.xTest.length; i++){
        let y=ln.predict(new Array(split.xTest[i]));
        console.log(split.yTest[i], y);
    }
})();