
import { nodes_list, positionsList } from './objects.js';


// Process nodes and edges
var elements = [];

// Add all nodes from nodes_list
var nodeSet = new Set();
nodes_list.forEach(node => {
  nodeSet.add(node.id);
  elements.push({
    data: { id: node.id, label: node.label }
  });
});

// Add any missing nodes from linked_nodes
nodes_list.forEach(node => {
  node.linked_nodes.forEach(linkedNode => {
    if (!nodeSet.has(linkedNode)) {
      nodeSet.add(linkedNode);
      elements.push({
        data: { id: linkedNode, label: linkedNode }
      });
    }
  });
});

// Add edges
nodes_list.forEach(node => {
  node.linked_nodes.forEach(linkedNode => {
    elements.push({
      data: { source: node.id, target: linkedNode }
    });
  });
});

// Initialize Cytoscape
var cy = cytoscape({
  container: document.getElementById('mynetwork'), // Container to render in
  elements: elements,
style: [
  {
    selector: 'node',
    style: {
      'border-color': '#000000',
      'border-width': 2,
      'label': 'data(label)',
      'color': '#000000',
      'background-opacity': 0,
      'background-color': '#ffffff',
      'shape': 'ellipse', // This makes the node a circle
      'text-valign': 'center',
      'text-halign': 'center',
      'font-size': '10px', // Adjust the font size
      'width': '60px',          // Width of the node (circle's diameter)
      'height': '60px',         // Height of the node (circle's diameter)
      'padding': '10px', // Add some padding around the text
      'text-wrap': 'wrap', // Allow text to wrap inside the node
      'text-max-width': '55px' // Set a maximum width for wrapped text
    }
  },
  {
    selector: 'edge',
    style: {
      'curve-style': 'bezier', // Use bezier style for curves
      'width': 2,
      'line-color': '#000000',
      'target-arrow-color': '#000000',
      'target-arrow-shape': 'triangle',
      'z-index': 1,

    }
  }
],
  layout: {
    name: 'dagre', // 'cose' is a force-directed layout
    rankDir: 'TB', // Top-to-bottom direction
   ranker: 'network-simplex', // Alternative options: 'tight-tree', 'longest-path'
  boxSelectionEnabled: true
    }
});


    // Function to dynamically curve edges during drag
    function updateEdgeCurves(node) {
      node.connectedEdges().forEach(edge => {
        const source = edge.source();
        const target = edge.target();

        // Skip if the node is not involved in the edge
        if (node.id() !== source.id() && node.id() !== target.id()) return;

        // Calculate positions
        const dx = target.position().x - source.position().x;
        const dy = target.position().y - source.position().y;

        // Calculate dynamic control-point distance based on distance
        const distance = Math.sqrt(dx * dx + dy * dy);
        const controlPointDistance = Math.min(100, distance / 4);

        // Apply the dynamic control-point distance
        edge.style('control-point-distance', controlPointDistance);
      });
    }

    // Adjust edge curves dynamically during node drag
    cy.on('drag', 'node', event => {
      const node = event.target;
      updateEdgeCurves(node);
    });

    // Final adjustment on drag release
    cy.on('dragfree', 'node', event => {
      const node = event.target;
      updateEdgeCurves(node);
    });

    // Initial edge curve adjustments
    cy.nodes().forEach(node => updateEdgeCurves(node));

// Log all node positions when any node is moved
cy.on('free', 'node', function () {
  const nodePositions = cy.nodes().map(node => ({
    id: node.id(),
    position: node.position()
  }));
  console.log('Node positions after drop:', nodePositions);
});

