
function text(arg){
  if (typeof arg !== 'string') {
    alert('передана не строка');
    return;
  }else{
    sli = arg.replace(/ /g,'').slice(0,30);
    if (sli.length < arg.length) {
       sli += ' ...'
    }
  }
  
  alert(sli);
  
};
text('Js совсем не сложный для новичка');
