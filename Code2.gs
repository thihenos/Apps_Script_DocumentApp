function myFun1(){
 let body = DocumentApp.getActiveDocument().getBody();
 let ui = DocumentApp.getUi();
 let response = ui.prompt('Search', 'What do you want to find?', ui.ButtonSet.OK_CANCEL);
 if(response.getResponseText()){
   let replacer = ui.prompt('Replace', 'Replace with what?', ui.ButtonSet.OK_CANCEL);
   body.replaceText(response.getResponseText(), replacer.getResponseText());
 }
 
 
}
 function myFun2(){
 let body = DocumentApp.getActiveDocument().getBody();
 let ui = DocumentApp.getUi();
 let response = ui.prompt('Search', 'What do you want to find?', ui.ButtonSet.OK_CANCEL);
 if(response.getResponseText()){
   let finderContent = body.findText(response.getResponseText());
   Logger.log(finderContent);
   let outputContent = finderContent.getElement().editAsText();  
   Logger.log(outputContent);
   let startPos = finderContent.getStartOffset();
   let endPos = finderContent.getEndOffsetInclusive();
   outputContent.setForegroundColor(startPos, endPos, '#00FFFF');
    
 }
}

function myFun3(){
let selection = DocumentApp.getActiveDocument().getSelection();
if (selection){
 let el = selection.getRangeElements();  
 for (x = 0; x< el.length; x++){
       if (el[x].getElement().editAsText){
           let textSelected = el[x].getElement().editAsText();
           if (el[x].isPartial()){         
            let selText = textSelected.getText().substring(el[x].getStartOffset(), el[x].getEndOffsetInclusive() +1);
            textSelected.deleteText(el[x].getStartOffset(), el[x].getEndOffsetInclusive());
            textSelected.insertText(el[x].getStartOffset(), selText.toUpperCase());
             Logger.log(selText); 
           } else {
            textSelected.setText(textSelected.getText().toUpperCase()) 
           }
      }
    }
  }
}
 function myFun4(){
 let doc = DocumentApp.getActiveDocument();
 let body = doc.getBody();
 let finderContent = body.findText('HELLO');
 let x = 0;
 let finderHello = body.findText('hello');
  
while (finderHello != null){
   let outputHello = finderHello.getElement().editAsText();
   outputHello.setText(outputHello.getText().toUpperCase());
   finderHello = body.findText('hello', finderHello);
} 
   
finderContent = body.findText('HELLO');
while (finderContent){
  //x = x+1;
  let outputContent = finderContent.getElement().asText();
  let startPos = finderContent.getStartOffset();
  let endPos = finderContent.getEndOffsetInclusive()+1;
  outputContent.insertText(endPos, ' WORLD ');
  outputContent.insertText(startPos, ' ' + x + ' ');
  outputContent.setForegroundColor (startPos, endPos+9, '#FF0000');
  
  finderContent = body.findText('HELLO', finderContent);
  
 }
}


function myFun5(){ //adding a bookmark
    let doc = DocumentApp.getActiveDocument();
    let body = doc.getBody();
    let finderContent = body.findText('HELLO');
    let x = 1;
    while (finderContent){
      let outputContent = finderContent.getElement().asText();
      
      //finalizar...
    
    }
}

 function myFun6(){

}
 function myFun7(){

} 
  function myFun8(){

}
  function myFun9(){
   
}
 
 function myFun10(){

}
