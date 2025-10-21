import Navbar from './Navbar';
import PdfDownload from './Holding/PdfDownload';
import Intro from './intro';
import Preface from './preface';
import DocPdf from './Holding/DocPdf';
import Merged3 from './Holding/Merged3';
import Merged4 from './Holding/Merged4';
import Merged5 from './Holding/Merged5';
import Merged6 from './Holding/Merged6';
import Merged7 from './Holding/Merged7';
import Merged8 from './Holding/Merged8';
import Merged9 from './Holding/Merged9';
import Editoria from './Editoria';
import Note from './note';
import Footer from './Footer';

const App = () => {
  return (
    <main>
      <Navbar />
      <Intro />
      <Preface />
      <DocPdf />
     <PdfDownload />
     <Merged3 />
     <Merged4 />
     <Merged5 />
     <Merged6 />
     <Merged7 />
     <Merged8 />
     <Merged9 />
     <Editoria />
     <Note />
     <Footer />
    </main>
  );
};
export default App;