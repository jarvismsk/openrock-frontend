import React from 'react';

const ModelDetail = ({ modelId }) => {
  // Fetch model details using modelId and display them here
  const modelDetails = {
    model1: { name: 'Model 1', description: 'Description for Model 1' },
    model2: { name: 'Model 2', description: 'Description for Model 2' },
    // Add more model details here
  };

  const model = modelDetails[modelId];

  if (!model) {
    return <div>Model not found</div>;
  }

  return (
    <div>
      <h2>{model.name}</h2>
      <p>{model.description}</p>
    </div>
  );
};

export default ModelDetail;
