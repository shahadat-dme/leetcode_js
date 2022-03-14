var simplifyPath = function(path) {
    path = path.split("/");
    let stack = [];
    for (let p of path) {
        switch (p) {
            case "":
                break;
            case ".":
                break;
            case "..":
                stack.pop();
                break;
            default:
                stack.push(p);
                break;
        }
    }
    return "/" + stack.join("/");
};