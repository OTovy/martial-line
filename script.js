
import { nodes_list } from './objects.js';


var nodes_array = new Array();
var edges_array = new Array();

// Function to add edges to the dataset
function populateNodeLists(nodeList) {
  nodeList.forEach(node => {
    nodes_array.push({ id: node.id, label: node.label });

    if (node.linked_nodes) { 
      node.linked_nodes.forEach(linkedNode => {
        nodes_array.push({ id: linkedNode, label: linkedNode });
        edges_array.push({ from: node.id, to: linkedNode });
      });
    };
  });
}

function removeDuplicates(arr, key) {
  return arr.reduce((unique, obj) => {
    if (!unique.some(item => item[key] === obj[key])) {
      unique.push(obj);
    }
    return unique;
  }, []);
}

populateNodeLists(nodes_list);

var nodes_array = removeDuplicates(nodes_array, "id")

var nodes = new vis.DataSet( nodes_array ); 
var edges = new vis.DataSet( edges_array ); 


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
       hoverWidth: 3,
       selectionWidth: 3,
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
    interaction: {
        hover: true
    },
     physics: {
            enabled: false,
            solver: 'forceAtlas2Based',
        },
       layout: {
        hierarchical: {
            direction: 'UD', // Upwards direction
            levelSeparation: 300, // Adjust spacing between levels (Rows)
            nodeSpacing: 300, // Adjust spacing between nodes (Columns)
            treeSpacing: 300, // Adjust spacing between subtrees
            edgeMinimization: true
        }
    }
  
};
var network = new vis.Network(container, data, options);

