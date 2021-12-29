var findMinHeightTrees = function(n, edges) {
    if (!edges || n < 2) return [0];
    let graph = [];

    for (let [x, y] of edges) {
        graph[x] = graph[x] || [];
        graph[y] = graph[y] || [];
        graph[x].push(y);
        graph[y].push(x);
    }
    let childs = [];

    graph.map((pts,i) => pts.length === 1 && childs.push(i));
    while (n > 2) {
        n = n - childs.length;
        let next_childs = [];
        for (let child of childs) {
            tmp = graph[child].pop();
            graph[tmp].splice(graph[tmp].indexOf(child),1);
            graph[tmp].length === 1 && next_childs.push(tmp);
        }
        childs = next_childs;
    }
    return childs;
};