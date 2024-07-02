import React from 'react';
import styles from '@/styles/EvaluationForm.module.css';

const EvaluationForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Thesis Evaluation Form</h1>
      <form className={styles.form}>
        {/* ... (previous form groups remain unchanged) ... */}

        <table className={styles.evaluationTable}>
          <thead>
            <tr>
              <th>CRITERIA</th>
              <th>RATING</th>
              <th>REMARKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3}><strong>A. Paper / Manuscript</strong></td>
            </tr>
            <tr>
              <td>
                Statement of the Research Problem (10%)
                <br />
                - Does design/project satisfies the statement of the problem?
              </td>
              <td><input type="text" /></td>
              <td><textarea rows={3}></textarea></td>
            </tr>
            <tr>
              <td>
                Structure (5%)
                <br />
                - Correctness of the writing structure of the paper.
              </td>
              <td><input type="text" /></td>
              <td><textarea rows={3}></textarea></td>
            </tr>
            <tr>
              <td>
                Choice of Literature (10%)
                <br />
                - Does the cited literature on the paper satisfy the required information needed in writing the paper and construction of the design/project?
              </td>
              <td><input type="text" /></td>
              <td><textarea rows={3}></textarea></td>
            </tr>
            <tr>
              <td>
                Quality of Research Methods and Processing (10%)
                <br />
                - Does the paper uses correct methods in doing the research?
              </td>
              <td><input type="text" /></td>
              <td><textarea rows={3}></textarea></td>
            </tr>
            <tr>
              <td>
                Quality of Conclusion (10%)
                <br />
                - Does the conclusion satisfy the problems being stated on the paper?
              </td>
              <td><input type="text" /></td>
              <td><textarea rows={3}></textarea></td>
            </tr>
            <tr>
              <td colSpan={3}><strong>B. Design/Project</strong></td>
            </tr>
            <tr>
              <td>
                Originality of the Design/Project (5%)
                <br />
                - Is the design/project unique?
              </td>
              <td><input type="text" /></td>
              <td><textarea rows={3}></textarea></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default EvaluationForm;