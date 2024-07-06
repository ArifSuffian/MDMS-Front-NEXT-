import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "@/styles/Submission.module.css";
import { Box, Typography, Button, Alert } from "@mui/material";

interface FileUpload {
  id: string;
  name: string;
  file: File | null;
}
type SetterFunction<T extends FileUpload | FileUpload[]> = React.Dispatch<React.SetStateAction<T>>;

const Submission: React.FC = () => {
  const [proposalFile, setProposalFile] = useState<FileUpload>({
    id: "proposal",
    name: "Proposal",
    file: null,
  });
  const [progress1Files, setProgress1Files] = useState<FileUpload[]>([
    { id: "demo1", name: "Demo slide", file: null },
    { id: "logbook1", name: "Logbook", file: null },
    { id: "report1", name: "PSM-report", file: null },
  ]);
  const [progress2Files, setProgress2Files] = useState<FileUpload[]>([
    { id: "demo2", name: "Demo slide", file: null },
    { id: "logbook2", name: "Logbook", file: null },
    { id: "report2", name: "PSM-report", file: null },
  ]);
  const [finalFiles, setFinalFiles] = useState<FileUpload[]>([
    { id: "presentation", name: "Presentation Slide", file: null },
    { id: "logbookFinal", name: "Logbook", file: null },
    { id: "reportTOC", name: "PSM Report (TOC)", file: null },
    { id: "reportCh1", name: "PSM Report (Chapter 1)", file: null },
    { id: "reportFull", name: "PSM Report (Full)", file: null },
    { id: "shortPaper", name: "Short paper", file: null },
  ]);
  const [error, setError] = useState<string | null>(null);

  const isValidFileType = (file: File): boolean => {
    const validTypes = ['application/pdf', 'application/zip', 'application/x-zip-compressed'];
    return validTypes.includes(file.type);
  };

  const handleFileChange = <T extends FileUpload | FileUpload[]>(
    event: React.ChangeEvent<HTMLInputElement>,
    setterFunction: SetterFunction<T>,
    id: string
  ) => {
    const file = event.target.files?.[0] || null;
    if (file && !isValidFileType(file)) {
      setError("Invalid file type. Please upload only PDF or ZIP files.");
      return;
    }
    setError(null);
    setterFunction((prev: T) => {
      if (Array.isArray(prev)) {
        return prev.map(item => item.id === id ? { ...item, file } : item) as T;
      } else {
        return { ...prev, file } as T;
      }
    });
  };
  
  const handleDelete = <T extends FileUpload | FileUpload[]>(
    setterFunction: SetterFunction<T>,
    id: string
  ) => {
    setterFunction((prev: T) => {
      if (Array.isArray(prev)) {
        return prev.map(item => item.id === id ? { ...item, file: null } : item) as T;
      } else {
        return { ...prev, file: null } as T;
      }
    });
  };

  const renderFileUpload = <T extends FileUpload | FileUpload[]>(
    fileUpload: FileUpload,
    setterFunction: SetterFunction<T>
  ) => (
    <Box key={fileUpload.id} className={styles.fileUpload} sx={{ mb: 2 }}>
      <Typography variant="subtitle1">{fileUpload.name}:</Typography>
      <input
        type="file"
        id={fileUpload.id}
        accept=".pdf,.zip"
        onChange={(e) => handleFileChange(e, setterFunction, fileUpload.id)}
        style={{ display: 'none' }}
      />
      <label htmlFor={fileUpload.id}>
        <Button variant="contained" component="span">
          Choose File
        </Button>
      </label>
      {fileUpload.file && (
        <Box sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ mr: 1 }}>{fileUpload.file.name}</Typography>
          <Button variant="outlined" color="secondary" onClick={() => handleDelete(setterFunction, fileUpload.id)}>
            Delete
          </Button>
        </Box>
      )}
    </Box>
  );

  return (
    <Box className={styles.container} sx={{ p: 2, bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom><b>Submission Page</b></Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <Box className={styles.card}>
        <Tabs>
          <TabList>
            <Tab>Proposal</Tab>
            <Tab>Progress 1</Tab>
            <Tab>Progress 2</Tab>
            <Tab>Final Progress</Tab>
          </TabList>
  
          <TabPanel>
            <Typography variant="h5" gutterBottom>Proposal</Typography>
            {renderFileUpload(proposalFile, setProposalFile)}
          </TabPanel>
          <TabPanel>
            <Typography variant="h5" gutterBottom>Progress 1</Typography>
            {progress1Files.map(file => renderFileUpload(file, setProgress1Files))}
          </TabPanel>
          <TabPanel>
            <Typography variant="h5" gutterBottom>Progress 2</Typography>
            {progress2Files.map(file => renderFileUpload(file, setProgress2Files))}
          </TabPanel>
          <TabPanel>
            <Typography variant="h5" gutterBottom>Final Progress</Typography>
            {finalFiles.map(file => renderFileUpload(file, setFinalFiles))}
          </TabPanel>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Submission;