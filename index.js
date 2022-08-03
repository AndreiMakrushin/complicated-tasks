
function text(arg){
  if (typeof arg == 'string') {
    sli = arg.trim().slice(0,30);
    if (sli.length < arg.length) {
       sli += ' ...'  
  }
  }
  console.log(sli);
};
text('     Js совсем не сложный для новичка');
