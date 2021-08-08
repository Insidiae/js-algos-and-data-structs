//! For this section, we will be building an UNDIRECTED graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    //  If vertex is not currently in adjacency list:
    if (!this.adjacencyList[vertex]) {
      //  Initialize the new vertex with an empty array
      this.adjacencyList[vertex] = [];
    }

    //  Optionally return the graph for easy chaining
    return this;
  }

  addEdge(vertex1, vertex2) {
    //  For undirected graphs,
    //  simply add directed edge going both ways
    this.addDirectedEdge(vertex1, vertex2).addDirectedEdge(vertex2, vertex1);

    //  Optionally return the graph for easy chaining
    return this;
  }

  addDirectedEdge(vertex1, vertex2) {
    //  If vertices are not already connected,
    //  simply push one vertex to the other's adjacency list
    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
    }

    //  Optionally return the graph for easy chaining
    return this;
  }

  removeVertex(vertex) {
    //  Remove all edges connected to the vertex
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeDirectedEdge(adjacentVertex, vertex);
    }

    //  Remove the vertex itself
    delete this.adjacencyList[vertex];

    //  Optionally return the graph for easy chaining
    return this;
  }

  removeEdge(vertex1, vertex2) {
    //  For undirected graphs,
    //  simply remove directed edges going both ways
    this.removeDirectedEdge(vertex1, vertex2).removeDirectedEdge(
      vertex2,
      vertex1
    );

    //  Optionally return the graph for easy chaining
    return this;
  }

  removeDirectedEdge(vertex1, vertex2) {
    //  Simply filter out vertex2 from vertex1's adjacency list
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );

    //  Optionally return the graph for easy chaining
    return this;
  }

  depthFirstSearch(startVertex) {
    //  Create an array to store results
    const res = [];
    //  Create an object to track visited vertices
    const visited = {};

    //  Create recursive helper function to traverse the graph
    const traverseDepthFirst = (vertex) => {
      //  Add vertex to results list
      res.push(vertex);
      //  Mark vertex as visited
      visited[vertex] = true;
      //  Loop over vertex's neighbors
      for (let neighbor of this.adjacencyList[vertex]) {
        //  If neighbor is not visited:
        if (!visited[neighbor]) {
          //  Make recursive call on neighbor
          traverseDepthFirst(neighbor);
        }
      }
    };

    //  Invoke the recursive helper function
    traverseDepthFirst(startVertex);

    //  Return results array
    return res;
  }

  depthFirstSearchIterative(startVertex) {
    //  Create an array to store results
    const res = [];
    //  Create an object to track visited vertices
    const visited = {};
    //  Create a stack to store vertices to visit
    //  and push start vertex to that stack
    const toVisit = [startVertex];
    //  While stack is not empty:
    while (toVisit.length) {
      //  Get the next vertex to visit from the stack
      const vertex = toVisit.pop();
      //  If vertex has not yet been visited:
      if (!visited[vertex]) {
        //  Add vertex to results list
        res.push(vertex);
        //  Mark vertex as visited
        visited[vertex] = true;
        //  Push all neighbors of the vertex to the stack
        for (let neighbor of this.adjacencyList[vertex]) {
          toVisit.push(neighbor);
        }
      }
    }

    //  Return results array
    return res;
  }

  breadthFirstSearch(startVertex) {
    //  Create an array to store results
    const res = [];
    //  Create an object to track visited vertices
    const visited = {};
    //  Create a queue to store vertices to visit
    //  and enqueue start vertex to that queue
    const toVisit = [startVertex];
    //  Mark start vertex as visited
    visited[startVertex] = true;

    //  Create recursive helper function to traverse the graph
    const traverseBreadthFirst = () => {
      //  Get the next vertex to visit from the queue
      const vertex = toVisit.shift();
      //  Add vertex to results list
      res.push(vertex);
      //  Loop over its neighbors
      for (let neighbor of this.adjacencyList[vertex]) {
        //  If the neighbor is not yet visited:
        if (!visited[neighbor]) {
          //  Mark it as visited
          visited[neighbor] = true;
          //  Enqueue it to the queue
          toVisit.push(neighbor);
        }
      }
      //  If there are still vertices in the queue, keep going
      if (toVisit.length) traverseBreadthFirst();
    };

    //  Invoke the recursive helper function
    traverseBreadthFirst();
    //  Return results array
    return res;
  }

  breadthFirstSearchIterative(startVertex) {
    //  Create an array to store results
    const res = [];
    //  Create an object to track visited vertices
    const visited = {};
    //  Create a queue to store vertices to visit
    //  and enqueue start vertex to that queue
    const toVisit = [startVertex];
    //  While queue is not empty:
    while (toVisit.length) {
      //  Get the next vertex to visit from the queue
      const vertex = toVisit.shift();
      //  If vertex has not yet been visited:
      if (!visited[vertex]) {
        //  Add vertex to results list
        res.push(vertex);
        //  Mark vertex as visited
        visited[vertex] = true;
        //  Enqueue all neighbors of the vertex to the queue
        for (let neighbor of this.adjacencyList[vertex]) {
          toVisit.push(neighbor);
        }
      }
    }

    //  Return results array
    return res;
  }
}
