var removeDuplicateLetters = function (s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
      var char = s[i];
      if (stack.indexOf(char) > -1) continue;
     while (
        stack.length > 0 &&
        stack[stack.length - 1] > char &&
        s.indexOf(stack[stack.length - 1], i) > i
      ) {
        stack.pop();
      }
      stack.push(char);
    }
    return stack.join("");
  };