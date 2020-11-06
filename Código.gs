function onOpen(){
  DocumentApp.getUi()

  .createMenu('Advanced 2')
  .addItem('one', 'myFun1')
  .addItem('two', 'myFun2')
  .addSeparator()
  .addItem('three', 'myFun3')
  .addItem('four', 'myFun4')
  .addItem('five', 'myFun5')
  .addItem('six', 'myFun6')
  .addItem('seven', 'myFun7')
  .addItem('eight', 'myFun8')
  .addItem('nine', 'myFun9')
  .addItem('ten', 'myFun10')
  .addToUi();
}

 
