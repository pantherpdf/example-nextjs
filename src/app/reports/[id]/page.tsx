import { allReports } from '../allReports';
import EditorWrapper from './EditorWrapper';
import ThemeRegistry from '@/app/ThemeRegistry';

function parseId(value: string): number | null {
  const id = parseInt(value);
  if (isNaN(id)) {
    return null;
  }
  const txt2 = id.toString();
  if (txt2 !== value) {
    return null;
  }
  return id;
}

function ReportPageImpl({ id }: { id: string }) {
  const id2 = parseId(id);
  const item = allReports.find(x => x.id === id2);
  if (id2 === null || !item) {
    return <div className="container mx-auto">404 | Page not found</div>;
  }
  return <EditorWrapper />
}

export default function ReportPage({ params }: { params: { id: string } }) {
  return (
    <ThemeRegistry options={{ key: 'mui' }}>
      <ReportPageImpl id={params.id} />
    </ThemeRegistry>
  );
}
