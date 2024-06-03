import React from 'react';
import { Button, Card, CardContent, Typography } from '@material-ui/core';

const ContentPost = ({ content, tipContent }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{content.contentHash}</Typography>
        <Typography variant="subtitle1">Creator: {content.creator}</Typography>
        <Typography variant="subtitle1">Tips Received: {ethers.utils.formatEther(content.tipsReceived)} ETH</Typography>
        <Button variant="contained" color="primary" onClick={() => tipContent(content.id)}>
          Tip
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContentPost;
