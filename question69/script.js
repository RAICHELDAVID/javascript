function balancedBracketsFunction() {

   var string=document.getElementById("string").value;
  let i = -1;
    let stack = [];
    for (let ch of string) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
            i++;
        } else {
            if (i >= 0 && ((stack[i] === '(' && ch === ')') || (stack[i] === '{' && ch === '}') || (stack[i] === '[' && ch === ']'))) {
                stack.pop();
                i--;
            } else {
                return;
            }
        }
    }
    return i === -1;
}
document.getElementById('largestWord').value=max;
document.getElementById('smallestWord').value=min;
}



