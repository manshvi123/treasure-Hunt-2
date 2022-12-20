class Riddle{
constructor(){
 this.questions = [
    {ques:"Introducing a man, a woman said ,'He is the only son of my mother's mother.'", ans:"niece"},
    {ques:"if 375 = CGF,then what is 428 = ?",ans:"DBH"},
    {ques:"what should come in the place of question mark (?)in the following alpha-nurmeric series? C-3,E-5,G-7,I-9,?,?",ans:"K-11,M-13"}
 ]   
}
showQues(){
    textSize(18)
  var quiz = Math.round(random(0,this.questions.length-1))
  text(this.questions[quiz].ques,300,500)
}
}
