import React from 'react';
import Head from 'next/head';

const ProgressPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Progress</title>
      </Head>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className="container mx-auto p-4">
        <div className="row">
          <div className="col-xl-12 col-sm-6">
            <div className="card">
              <div className="card-body">
                <h1 className="text-2xl font-bold mb-4">My progress</h1>

                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-blue-500 h-4 rounded-full" // will add logics to them
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '75%' }}
                  ></div>
                </div>
                
                <h2 className="text-xl font-semibold mb-4">Current semester info:</h2>

                <div className="row details mb-2">
                  <div className="col-3 font-bold">Session</div>
                  <div className="col-9">: 2023/2024</div>
                </div>

                <div className="row details mb-2">
                  <div className="col-3 font-bold">Semester</div>
                  <div className="col-9">: 2</div>
                </div>

                <div className="row details mb-2">
                  <div className="col-3 font-bold">Progress 1</div>
                  <div className="col-9">: 2024-4-28</div>
                </div>

                <div className="row details mb-2">
                  <div className="col-3 font-bold">Progress 2</div>
                  <div className="col-9">: 2024-6-2</div>
                </div>

                <div className="row details mb-2">
                  <div className="col-3 font-bold">Final Report</div>
                  <div className="col-9">: 2024-7-4</div>
                </div>

                <div className="row details mb-2">
                  <div className="col-3 font-bold">Presentation & Demo</div>
                  <div className="col-9">: 2024-07-07</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProgressPage;
