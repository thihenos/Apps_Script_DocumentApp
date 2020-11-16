/* Function: findAndReplace
 * Description: This function is used as a helper to search and replace
 * Params: none
 */
\function findAndReplace(){
 
 let body = DocumentApp.getActiveDocument().getBody();
 let ui = DocumentApp.getUi();
 let response = ui.prompt('Search', 'What do you want to find?', ui.ButtonSet.OK_CANCEL);
 
 if(response.getResponseText()){
   let replacer = ui.prompt('Replace', 'Replace with what?', ui.ButtonSet.OK_CANCEL);
   body.replaceText(response.getResponseText(), replacer.getResponseText());
 }
 
}

/* Function: getTextAndSetColor
 * Description: This function is used as a helper to search a certain text and color it in Cyan
 * Params: none
 */
function getTextAndSetColor(){
 
 let body = DocumentApp.getActiveDocument().getBody();
 let ui = DocumentApp.getUi();
 let response = ui.prompt('Search', 'What do you want to find?', ui.ButtonSet.OK_CANCEL);
 
 if(response.getResponseText()){
   let finderContent = body.findText(response.getResponseText());
   Logger.log(finderContent);
   let outputContent = finderContent.getElement().editAsText();  
   Logger.log(outputContent);
   //let startPos = finderContent.getStartOffset();
   //let endPos = finderContent.getEndOffsetInclusive();
   outputContent.setForegroundColor(finderContent.getStartOffset() , finderContent.getEndOffsetInclusive(), '#00FFFF');
 }
 
}

/* Function: setTextUpper
 * Description: transform selected text into uppercase
 * Params: none
 */
function setTextUpper(){
 
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

/* Function: getTextFindHello
 * Description: Find how many times Hello World is found and print its count
 * Params: none
 */
 function getTextFindHello(){
  
  let doc = DocumentApp.getActiveDocument();
  let body = doc.getBody();
  let x = 1;

  let finderContent = body.findText('HELLO');
  let finderHello = body.findText('hello');
  
  while (finderHello != null || typeof finderHello != 'undefined'){
   let outputHello = finderHello.getElement().editAsText();
   outputHello.setText(outputHello.getText().toUpperCase()); //sem uso
   finderHello = body.findText('hello', finderHello); // não entendi o por que dessa  mesma verificação da linha 79
  } 
   
  while (finderHello != null || typeof finderHello != 'undefined'){
   
    let outputContent = finderContent.getElement().asText();
    let startPos = finderContent.getStartOffset();
    let endPos = finderContent.getEndOffsetInclusive()+1;
    x = x+1;//Acho que em JS vc pode também usar x++
    //Códigos iguais, podem ser declarados num passo anterior para economizar o tamanho do script
    outputContent.insertText(endPos, ' WORLD ');
    outputContent.insertText(startPos, ' ' + x + ' '); // Se for menor que 9, o código sobrescreverá
    outputContent.setForegroundColor (startPos, endPos+9, '#FF0000');

   if (x>9){
    //x = x+1;//Acho que em JS vc pode também usar x++
    //let outputContent = finderContent.getElement().asText();
    //let startPos = finderContent.getStartOffset();
    //let endPos = finderContent.getEndOffsetInclusive()+1;
    //outputContent.insertText(startPos, ' ' + x + ' '); // Se for menor que 9, o código sobrescreverá
    //outputContent.setForegroundColor (startPos, endPos+9, '#FF0000');
    //finderContent = body.findText('HELLO', finderContent);
   //} else {
    //x = x+1;//Acho que em JS vc pode também usar x++
    //let outputContent = finderContent.getElement().asText();
    //let startPos = finderContent.getStartOffset();
    //let endPos = finderContent.getEndOffsetInclusive()+1;
    //outputContent.insertText(endPos, ' WORLD ');
    outputContent.insertText(startPos, x + ' ');
    outputContent.setForegroundColor (startPos, endPos+9, '#0000FF');
    finderContent = body.findText('HELLO', finderContent);
   }
   
 }
}

/* Function: getTextFindHello
 * Description: ?
 * Params: none
 */
function myFun5(){ 
 
    let doc = DocumentApp.getActiveDocument();
    let body = doc.getBody();
    let finderContent = body.findText('HELLO');
    let x = 1;
 
    while (finderContent){
      let outputContent = finderContent.getElement().asText();
          
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
