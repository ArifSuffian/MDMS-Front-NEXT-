import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from '@/styles/Submission.module.css';

interface FileUpload {
  id: string;
  name: string;
  file: File | null;
}

const Submission: React.FC = () => {
  const [proposalFile, setProposalFile] = useState<FileUpload>({ id: 'proposal', name: 'Proposal', file: null });
  const [progress1Files, setProgress1Files] = useState<FileUpload[]>([
    { id: 'demo1', name: 'Demo slide', file: null },
    { id: 'logbook1', name: 'Logbook', file: null },
    { id: 'report1', name: 'PSM-report', file: null },
  ]);
  const [progress2Files, setProgress2Files] = useState<FileUpload[]>([
    { id: 'demo2', name: 'Demo slide', file: null },
    { id: 'logbook2', name: 'Logbook', file: null },
    { id: 'report2', name: 'PSM-report', file: null },
  ]);
  const [finalFiles, setFinalFiles] = useState<FileUpload[]>([
    { id: 'presentation', name: 'Presentation Slide', file: null },
    { id: 'logbookFinal', name: 'Logbook', file: null },
    { id: 'reportTOC', name: 'PSM Report (TOC)', file: null },
    { id: 'reportCh1', name: 'PSM Report (Chapter 1)', file: null },
    { id: 'reportFull', name: 'PSM Report (Full)', file: null },
    { id: 'shortPaper', name: 'Short paper', file: null },
  ]);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setterFunction: React.Dispatch<React.SetStateAction<FileUpload | FileUpload[]>>,
    id: string
  ) => {
    const file = event.target.files?.[0] || null;
    setterFunction((prev: FileUpload | FileUpload[]) => {
      if (Array.isArray(prev)) {
        return prev.map(item => item.id === id ? { ...item, file } : item);
      } else {
        return { ...prev, file };
      }
    });
  };

  const handleDelete = (
    setterFunction: React.Dispatch<React.SetStateAction<FileUpload | FileUpload[]>>,
    id: string
  ) => {
    setterFunction((prev: FileUpload | FileUpload[]) => {
      if (Array.isArray(prev)) {
        return prev.map(item => item.id === id ? { ...item, file: null } : item);
      } else {
        return { ...prev, file: null };
      }
    });
  };

  const renderFileUpload = (
    fileUpload: FileUpload,
    setterFunction: React.Dispatch<React.SetStateAction<FileUpload | FileUpload[]>>
  ) => (
    <div key={fileUpload.id} className={styles.fileUpload}>
      <label htmlFor={fileUpload.id}>{fileUpload.name}:</label>
      <input
        type="file"
        id={fileUpload.id}
        onChange={(e) => handleFileChange(e, setterFunction, fileUpload.id)}
      />
      {fileUpload.file && (
        <div>
          <span>{fileUpload.file.name}</span>
          <button onClick={() => handleDelete(setterFunction, fileUpload.id)}>Delete</button>
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.container}>
      <h1>Submission Page</h1>
      <div className={styles.card}>
        <Tabs>
          <TabList>
            <Tab>Proposal</Tab>
            <Tab>Progress 1</Tab>
            <Tab>Progress 2</Tab>
            <Tab>Final Progress</Tab>
          </TabList>

          <TabPanel>
            <h2>Proposal</h2>
            {renderFileUpload(proposalFile, setProposalFile)}
          </TabPanel>
          <TabPanel>
            <h2>Progress 1</h2>
            {progress1Files.map(file => renderFileUpload(file, setProgress1Files))}
          </TabPanel>
          <TabPanel>
            <h2>Progress 2</h2>
            {progress2Files.map(file => renderFileUpload(file, setProgress2Files))}
          </TabPanel>
          <TabPanel>
            <h2>Final Progress</h2>
            {finalFiles.map(file => renderFileUpload(file, setFinalFiles))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Submission;
