
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
        color: '#000'
      }
    },
    edges: {
      color: '#000',
      arrows: {
           to: {
             enabled: true, // Enable arrows
             scaleFactor: 1 // Adjust arrow size
           }
         }
    },
    physics: {
      enabled: false // Disable physics for static layout
    },
  
        layout: {
                improvedLayout: false,
                hierarchical: {
                        enabled: true,
                        levelSeparation: 150,
                        nodeSpacing: 500,
                        treeSpacing: 200,
                        blockShifting: false,
                        edgeMinimization: true,
                        parentCentralization: true,
                        direction: "UD",
                        sortMethod: "directed",
                        shakeTowards: "roots"
                }
        }
  
};
var network = new vis.Network(container, data, options);

