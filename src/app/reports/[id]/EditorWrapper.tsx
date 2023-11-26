"use client";
import { useState } from 'react';
import { Report, ApiEndpoints, Editor, emptyReport } from 'pantherpdf';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

const editorApi: ApiEndpoints = {};

export default function EditorWrapper() {
  const [report, setReport] = useState<Report>(emptyReport);
  const setReport2 = async (val: Report) => { setReport(val); };
  return (
    <Editor
      layout="fullscreen"
      report={report}
      setReport={setReport2}
      api={editorApi}
      navbar={{
        left: <Brand />,
      }}
    />
  );
}

function Brand() {
  return (
    <Typography fontWeight="bold">
      <Link href="/">
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          &lt;-
        </span>
        &nbsp; Go back
      </Link>
    </Typography>
  );
}
