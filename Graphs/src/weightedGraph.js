class WeightedGraph {
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

  addEdge(vertex1, vertex2, weight) {
    //  For undirected graphs,
    //  simply add directed edge going both ways
    this.addDirectedEdge(vertex1, vertex2, weight).addDirectedEdge(
      vertex2,
      vertex1,
      weight
    );

    //  Optionally return the graph for easy chaining
    return this;
  }

  addDirectedEdge(vertex1, vertex2, weight) {
    //  If vertices are not already connected,
    //  simply push one vertex to the other's adjacency list
    const isConnected = this.adjacencyList[vertex1].filter(
      (item) => item.vertex === vertex2
    ).length;
    if (!isConnected) {
      this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
    }

    //  Optionally return the graph for easy chaining
    return this;
  }

  removeVertex(vertex) {
    //  Remove all edges connected to the vertex
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeDirectedEdge(adjacentVertex.vertex, vertex);
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
      (item) => item.vertex !== vertex2
    );

    //  Optionally return the graph for easy chaining
    return this;
  }

  dijkstra(startVertex, endVertex) {
    //  Create an object to store the shortest
    //  distances from the start vertex
    const distances = {};

    //  Create another object to keep track of the
    //  previous vertices within the shortest path
    const previousVertices = {};

    for (let vertex in this.adjacencyList) {
      //  Set each key in the distances object to be
      //  every vertex in the adjacency list,
      //  and set each value to be Infinity except for
      //  the start vertex which should have a value of 0
      distances[vertex] = vertex === startVertex ? 0 : Infinity;

      //  Set each key to be every vertex in the adjacency list,
      //  and set each value to be null
      //! Looks like we can skip this because we're
      //! initializing falsy values either way
      // previousVertices[vertex] = null;
    }

    //  Create a priority queue to help traverse the graph
    const pq = new PriorityQueue();

    //  Enqueue starting vertex with priority of 0
    pq.enqueue(startVertex, 0);

    //  Loop through the priority queue
    while (pq.values.length) {
      //  Dequeue the next vertex from the queue
      const currentVertex = pq.dequeue().value;
      //  If vertex is the same as end vertex, exit the loop
      if (currentVertex === endVertex) {
        break;
      }

      //  Otherwise:
      //  Loop through the neighbors of that vertex
      for (let neighbor of this.adjacencyList[currentVertex]) {
        //  Calculate the distance to the neighbor
        //  from the starting vertex
        const distance = distances[currentVertex] + neighbor.weight;
        //  If the distance is less than what is
        //  currently stored in the distances object:
        if (distances[neighbor.vertex] > distance) {
          //  Update the distances object with the lower distance
          distances[neighbor.vertex] = distance;
          //  Update the path to the neighbor stored
          //  within the previous vertices object
          previousVertices[neighbor.vertex] = currentVertex;
          //  Enqueue the vertex with the total distance
          //  from the start node
          pq.enqueue(neighbor.vertex, distance);
        }
      }
    }

    //  Create an array to store results
    const res = [];
    //  Initialize a variable to traverse the graph,
    //  starting from end vertex
    let v = endVertex;
    //  Traverse the graph using the previous vertices object
    while (v) {
      //  Add current vertex to results array
      res.push(v);
      //  Get previous vertex, if any
      v = previousVertices[v];
    }
    //  Return the results array
    //? Make sure to reverse since we traversed from end
    return res.reverse();
  }

  bellmanFord(startVertex, endVertex) {
    //  Create an object to store the shortest
    //  distances from the start vertex
    const distances = {};

    //  Create another object to keep track of the
    //  previous vertices within the shortest path
    const previousVertices = {};

    for (let vertex in this.adjacencyList) {
      //  Set each key in the distances object to be
      //  every vertex in the adjacency list,
      //  and set each value to be Infinity except for
      //  the start vertex which should have a value of 0
      distances[vertex] = vertex === startVertex ? 0 : Infinity;
    }

    //  Iterate over the graph V - 1 times
    //? Where V = the number of vertices
    for (let i = 0; i < Object.keys(this.adjacencyList).length - 1; i++) {
      //  Iterate over every edge
      for (let currentVertex in this.adjacencyList) {
        for (let neighbor of this.adjacencyList[currentVertex]) {
          //  Calculate the distance to the neighbor
          //  from the starting vertex
          const distance = distances[currentVertex] + neighbor.weight;
          //  If the distance is less than what is
          //  currently stored in the distances object:
          if (distances[neighbor.vertex] > distance) {
            //  Update the shortest distance
            distances[neighbor.vertex] = distance;
            //  Update the path to the neighbor stored
            //  within the previous vertices object
            previousVertices[neighbor.vertex] = currentVertex;
          }
        }
      }
    }

    //  Iterate over every edge one more time
    for (let currentVertex in this.adjacencyList) {
      for (let neighbor of this.adjacencyList[currentVertex]) {
        //  Calculate the distance to the neighbor
        //  from the starting vertex
        const distance = distances[currentVertex] + neighbor.weight;
        //  If the distance is less than what is
        //  currently stored in the distances object:
        if (distances[neighbor.vertex] > distance) {
          //  Indicate that a negative cycle exists
          throw new Error("Negative cycle exists!");
        }
      }
    }

    //  Create an array to store results
    const res = [];
    //  Initialize a variable to traverse the graph,
    //  starting from end vertex
    let v = endVertex;
    //  Traverse the graph using the previous vertices object
    while (v) {
      //  Add current vertex to results array
      res.push(v);
      //  Get previous vertex, if any
      v = previousVertices[v];
    }
    //  Return the results array
    //? Make sure to reverse since we traversed from end
    return res.reverse();
  }
}
