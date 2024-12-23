
import { nodes_list, edges_list } from './objects.js';


// Create an array of nodes
var nodes = new vis.DataSet(nodes_list);

// Create an array of edges
var edges = new vis.DataSet([]);

// Function to add edges to the dataset
function addEdges(edgesList) {
  edgesList.forEach(node => {
    if (node.linked_nodes) { 
      node.linked_nodes.forEach(linkedNode => {
        edges.add({ from: node.Node, to: linkedNode });
      });
    }
  });
}
  
// Add edges to the dataset
addEdges(edges_list);

// Create the network
var container = document.getElementById('mynetwork');
var data = {
  nodes: nodes,
  edges: edges
};


var options = {
    width: '100%', // Set width to 100% of the container
    height: '100%', // Set height to 100% of the container

    nodes: {
      shape: 'circle',
      size: 50,
      color: {
        border: '#000',
        background: '#fff', 
        highlight: {
          border: '#000',
          background: '#ccc' 
        },
        hover: {
          border: '#000',
          background: '#ddd' 
        }
      },
      font: {
        color: '#000',
        size: 12,
        align: 'center',
        multi: true    
      }
    },
    edges: {
      color: '#000',
      smooth: 'continuous',
      arrows: {
           to: {
             enabled: true, // Enable arrows
             scaleFactor: 1 // Adjust arrow size
           }
         }
    },
 physics: {
        enabled: true,
        stabilization: true,
        solver: 'forceAtlas2Based',
        minDistance: 1000,
        springLength: 1000
    },  
       layout: {
        hierarchical: {
            direction: 'UD', // Upwards direction
            levelSeparation: 300, // Adjust spacing between levels
            nodeSpacing: 1000, // Adjust spacing between nodes
            treeSpacing: 300 // Adjust spacing between subtrees
        }
    }
  
};
var network = new vis.Network(container, data, options);

