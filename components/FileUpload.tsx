import React, { ChangeEvent } from 'react';
import { Button } from '@mui/material';

interface FileUploadProps {
  onUpload: () => void;
  isUploaded: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload, isUploaded }) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you would typically handle the file upload to your server
      // For this example, we'll just call onUpload to simulate a successful upload
      onUpload();
    }
  };

  return (
    <div>
      <input
        accept="*/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={handleFileChange}
        disabled={isUploaded}
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" component="span" disabled={isUploaded}>
          {isUploaded ? 'File Uploaded' : 'Upload File'}
        </Button>
      </label>
    </div>
  );
};

export default FileUpload;