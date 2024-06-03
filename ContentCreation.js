import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';

const ContentCreation = ({ createContent }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createContent(content);
  };

  return (
    <Container>
      <Typography variant="h4">Create Content</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </form>
    </Container>
  );
};

export default ContentCreation;
