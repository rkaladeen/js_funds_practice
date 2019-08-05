function bracesValid(n){
  // If there is an odd number of braces false is returned
  if (n.length % 2 == 1){return false;};
  
  var l_Brace = ['(', '{', '['];
  var r_Brace = [')', '}', ']'];

  // Starting of ending with wrong bracket
  if (r_Brace.includes(n[0])){return false;}
  if (l_Brace.includes(n[n.length-1])){return false;}

  var brace = {
    l_square: '[',
    r_square: ']',
    l_curly: '{',
    r_curly: '}',
    l_par: '(',
    r_par: ')'
  };

  var brace_counter = {
    l_square: 0,
    r_square: 0,
    l_curly: 0,
    r_curly: 0,
    l_par: 0,
    r_par: 0
  };

  function opposite(brace){
    if (brace === '['){return ']';}
    if (brace === ']'){return '[';}
    if (brace === '('){return ')';}
    if (brace === ')'){return '(';}
    if (brace === '{'){return '}';}
    if (brace === '}'){return '{';}
  }

  
  for (var i = 0; i < n.length; i++){
    if (brace.l_square === n[i]){brace_counter.l_square++;}
    if (brace.r_square === n[i]){brace_counter.r_square++;}
    if (brace.l_curly === n[i]){brace_counter.l_curly++;}
    if (brace.r_curly === n[i]){brace_counter.r_curly++;}
    if (brace.l_par === n[i]){brace_counter.l_par++;}
    if (brace.r_par === n[i]){brace_counter.r_par++;}
  };
  
  var pair_total = brace_counter.l_square + brace_counter.l_curly + brace_counter.l_par;

  // Ensure that there is an equal amount of brack distribution
  if (brace_counter.l_square != brace_counter.r_square){return false;}
  if (brace_counter.l_curly != brace_counter.r_curly){return false;}
  if (brace_counter.l_par != brace_counter.r_par){return false;}

  
  
  var found_counter = pair_total;

  var start_pos = last_pos = 0;
  
  for (var i = 0; i < n.length; i++){
    for (var j = i+1; j < n.length; j++){
      
      if (start_pos == last_pos && r_Brace.includes(n[j])){return false;}
      
      start_pos = j
      if (opposite(n[i]) === n[j]){
        found_counter--;
        last_pos = j;
      }
      if (start_pos == last_pos){j++;}
      

    }

  }
  console.log(found_counter);
  if (found_counter != 0){return false;}
  

  return true;
}

console.log(bracesValid("{}[])(()"));