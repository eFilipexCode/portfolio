import Header from './components/Header/Header';
import Showcase from './components/Showcase/Showcase';
import ShowCaseAbout from './components/ShowCaseAbout/ShowCaseAbout';
import SectionSelector from './components/SectionSelector/SectionSelector';
import Topic from './components/Topic/Topic';
import ContactTab from './components/ContactTab/ContactTab';
import Footer from './components/Footer/Footer';
import { WebsitesContextProvider } from './contexts/WebsitesContext';

function App() {
  return (
    <WebsitesContextProvider>
      <Header />
      <Topic title="About me" description="Who's efilipex? 🤔" />
      <ShowCaseAbout title="Emanuel Filipe" description="Hello! Super glad you're here 😁. I'm Emanuel Filipe - or also called efilipex - and I'm a frontend development student, seeking new knowledges and skills! I'm currently learning ReactJs, React Native, Node, Svelte, Typescript and Python." />
      <Topic title="Projects" description="Here are some of the projects I build on my own! Let's check it out."/>
      <SectionSelector />
      <Showcase />
      <Topic title="Contact" description="Let's keep in touch!" />
      <ContactTab />
      <Footer />
    </WebsitesContextProvider>
  );
}

export default App;
