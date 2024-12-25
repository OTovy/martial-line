
import { nodes_list } from './objects.js';


var nodes_array = [];
var edges_array = [];

// Function to add edges to the dataset
function populateNodeLists(nodeList) {
  nodeList.forEach(node => {
    var nodeObject = new { id: node.id, label: node.label };
    if (!nodes_array.includes(nodeObject)) {
      nodes_array.push(nodeObject);
    }
      
    if (node.linked_nodes) { 
      node.linked_nodes.forEach(linkedNode => {
        var lNodeObject = new { id: linkedNode.id, label: linkedNode};
        if (!nodes_array.includes(lNodeObject)) {
            nodes_array.push(lNodeObject)
        }
        edges_array.push({ from: node.id, to: linkedNode });
      });
    }
  });
}
  
// Add edges to the dataset
populateNodeLists(nodes_list);

var nodes = new vis.DataSet( Array.from(new Set(nodes_array)) ); 
var edges = new vis.DataSet( edges_array ); 

console.log(nodes)

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
     smooth: {
         type: 'continuous',
         roundness: 0.5 
     },
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
        forceAtlas2Based: {
            springLength: 1000
        }
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

