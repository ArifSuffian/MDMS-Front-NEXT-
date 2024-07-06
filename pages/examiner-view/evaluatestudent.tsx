import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Grid,
  Divider,
  Paper,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
} from '@mui/material';

interface Student {
  id: number;
  name: string;
  projectTitle: string;
  fieldOfStudy: string;
}

const initialStudents: Student[] = [
  { id: 1, name: "John Doe", projectTitle: "AI in Healthcare", fieldOfStudy: "Computer Science" },
  { id: 2, name: "Jane Smith", projectTitle: "Sustainable Energy Solutions", fieldOfStudy: "Environmental Engineering" },
  { id: 3, name: "Mike Johnson", projectTitle: "Quantum Computing Applications", fieldOfStudy: "Physics" },
];

const EvaluationPage = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [evaluationData, setEvaluationData] = useState({
    date: '',
    time: '',
    venue: '',
    studentName: '',
    programme: '',
    researchTitle: '',
    examiner1: '',
    examiner2: '',
    chairperson: '',
    result: '',
    representationNextSemester: false,
    rejectionReason: '',
    comments: '',
  });

  const handleOpenModal = (student: Student) => {
    setSelectedStudent(student);
    setEvaluationData(prevData => ({
      ...prevData,
      studentName: student.name,
      researchTitle: student.projectTitle,
      programme: student.fieldOfStudy,
    }));
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEvaluationData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvaluationData(prevData => ({
      ...prevData,
      representationNextSemester: e.target.checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Evaluation submitted:', evaluationData);
    handleCloseModal();
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Student Evaluation List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Project Title</TableCell>
              <TableCell>Field of Study</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.projectTitle}</TableCell>
                <TableCell>{student.fieldOfStudy}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenModal(student)}
                  >
                    Evaluate
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="evaluation-modal"
        aria-describedby="evaluation-form"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxHeight: '90vh',
          overflowY: 'auto',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography variant="h4" gutterBottom>
            EVALUATION REPORT ON MIXED MODE PROPOSAL FOR MASTERS/DOCTOR OF PHILOSOPHY
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Date"
                  name="date"
                  value={evaluationData.date}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Time"
                  name="time"
                  value={evaluationData.time}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Venue"
                  name="venue"
                  value={evaluationData.venue}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name of Student"
                  name="studentName"
                  value={evaluationData.studentName}
                  onChange={handleInputChange}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Programme"
                  name="programme"
                  value={evaluationData.programme}
                  onChange={handleInputChange}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Research Title"
                  name="researchTitle"
                  value={evaluationData.researchTitle}
                  onChange={handleInputChange}
                  multiline
                  rows={2}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Examiner 1"
                  name="examiner1"
                  value={evaluationData.examiner1}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Examiner 2"
                  name="examiner2"
                  value={evaluationData.examiner2}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Chairperson/Supervisor"
                  name="chairperson"
                  value={evaluationData.chairperson}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Paper elevation={3} sx={{ p: 2, mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                The examiners** have decided a result as stated below:
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="evaluation-result"
                  name="result"
                  value={evaluationData.result}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="A"
                    control={<Radio />}
                    label="A. Research proposal is accepted"
                  />
                  <FormControlLabel
                    value="B1"
                    control={<Radio />}
                    label="B1. Research proposal is accepted with minor amendments"
                  />
                  <FormControlLabel
                    value="B2"
                    control={<Radio />}
                    label="B2. Research proposal is accepted with major amendments"
                  />
                  <FormControlLabel
                    value="C"
                    control={<Radio />}
                    label="C. Research proposal is rejected"
                  />
                </RadioGroup>
              </FormControl>
              {evaluationData.result === 'B2' && (
                <Box display="flex" alignItems="center">
                  <Typography>Representation in the following semester:</Typography>
                  <Checkbox
                    checked={evaluationData.representationNextSemester}
                    onChange={handleCheckboxChange}
                    name="representationNextSemester"
                  />
                  <Typography>Yes</Typography>
                </Box>
              )}
              {evaluationData.result === 'C' && (
                <TextField
                  fullWidth
                  label="Please state reason(s) of rejection:"
                  name="rejectionReason"
                  value={evaluationData.rejectionReason}
                  onChange={handleInputChange}
                  multiline
                  rows={4}
                  margin="normal"
                />
              )}
            </Paper>

            <TextField
              fullWidth
              label="Comments of the First Assessment Session"
              name="comments"
              value={evaluationData.comments}
              onChange={handleInputChange}
              multiline
              rows={6}
              margin="normal"
            />

            <Box mt={4}>
              <Button type="submit" variant="contained" color="primary" size="large">
                Submit Evaluation
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default EvaluationPage;