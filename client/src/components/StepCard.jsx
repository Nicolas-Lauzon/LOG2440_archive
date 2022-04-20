import React from 'react';

export default function StepCard({ step }) {
  return (
    <div className='recipe-step'>
      <img className='recipe-image' alt={step.title} src={step.image} />
      <h2>
        {step.order}. {step.title}
      </h2>
      <p>{step.text}</p>
    </div>
  );
}
