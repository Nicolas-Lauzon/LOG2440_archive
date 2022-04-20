import React from 'react';

export default function StepForm({ step, onChange }) {
  const imgRef = React.createRef();

  const handleChange = (event) => {
    const updatedStep = {
      ...step,
      [event.target.name]: event.target.name === 'img' ? event.target.files[0] : event.target.value,
    };
    onChange(updatedStep);
  };

  return (
    <fieldset className='form-control'>
      <legend>Étape #{step.order}</legend>

      <label htmlFor={`step_name_${step.order}`}>Nom de l'étape:</label>
      <input
        type='text'
        id={`step_name_${step.order}`}
        name='title'
        value={step.title}
        onChange={handleChange}
        required
      />

      {/* TODO : Compléter le code HTML pour l'input de description de l'étape */}
      <label htmlFor={`step_description_${step.order}`}>Description de l'étape:</label>
      <input
        type='text'
        id={`step_description_${step.order}`}
        name='text'
        value={step.text}
        onChange={handleChange}
        required
      />

      {/* TODO : Compléter le code HTML pour l'input de l'image de l'étape */}
      <label htmlFor={`img_step_${step.order}`}>Ajouter une image pour cette étape:</label>
      <input
        type='file'
        name='img'
        id={`img_step_${step.order}`}
        accept='image/*'
        ref={imgRef}
        onChange={handleChange}
        required
      />
    </fieldset>
  );
}
