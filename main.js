//https://teachablemachine.withgoogle.com/models/fyQCGtwcM/
function start_classification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fyQCGtwcM/model.json",modelready);
    }
    function modelready(){
        classifier.classify(gotresults);
    }
    function gotresults(error,results){
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            randomnum_r=Math.floor(Math.random()*255)+1;
            randomnum_g=Math.floor(Math.random()*255)+1;
            randomnum_b=Math.floor(Math.random()*255)+1;
    
    
            document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
            document.getElementById("result_confidence").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
            document.getElementById("result_label").style.color="rgb("+randomnum_r+","+randomnum_g+","+randomnum_b+")";
            document.getElementById("result_confidence").style.color="rgb("+randomnum_r+","+randomnum_g+","+randomnum_b+")";
    
            img1=document.getElementById("Ear");
            
            if(results[0].label=="Cat"){
              
             img1.src="cat.jpg";
    
            }
            else if(results[0].label=="Dog_barking"){
                img1.src="dog.jpg";  
                
      
              }
              
              else {
                img1.src="Ear.jpg";  
      
            
              }
        }
    }
    