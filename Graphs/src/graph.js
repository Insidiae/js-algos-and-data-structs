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
    //  For directed graphs,
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
}
