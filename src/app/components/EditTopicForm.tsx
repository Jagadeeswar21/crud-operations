// Assuming this component is part of a React project

import React, { useState } from 'react';
import { string } from 'zod';

interface EditTopicFormProps {
  id: string; // Assuming ID is a number, adjust if needed
  title: string;
  description: string;
}

const EditTopicForm: React.FC<EditTopicFormProps> = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState<string>(title);
  const [newDescription, setNewDescription] = useState<string>(description);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDescription(e.target.value);
  };

  // Form submission logic would go here (handle form submit, potentially make API calls, etc.)

  return (
    <div>
      <form className="flex flex-col gap-3">
        <input
          onChange={handleTitleChange}
          value={newTitle}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Title"
        />

        <input
          onChange={handleDescriptionChange}
          value={newDescription}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Description"
        />

        <button className="bg-green-700 font-bold text-white px-3 py-2 w-fit">
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;
