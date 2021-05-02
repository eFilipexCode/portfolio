import Header from './components/Header/Header';
import Showcase from './components/Showcase/Showcase';
import ShowCaseAbout from './components/ShowCaseAbout/ShowCaseAbout';
import SectionSelector from './components/SectionSelector/SectionSelector';
import Topic from './components/Topic/Topic';
import ContactTab from './components/ContactTab/ContactTab';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import { WebsitesContextProvider } from './contexts/WebsitesContext';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';
import { LanguageContext } from './contexts/LanguageContext';

function App() {
  const { currentPalette } = useContext(ThemeContext);
  const { languages, language } = useContext(LanguageContext);

  return (
      <WebsitesContextProvider>
        <div style={{ background: currentPalette.primary }}>
          <Header />
          <Topic title={languages[`${language}`].titles.aboutMe} description={languages[`${language}`].titleDescriptions.aboutMe} />
          <ShowCaseAbout title="Emanuel Filipe" description={languages[`${language}`].showCaseAboutDescription} />
          <Topic title={languages[`${language}`].titles.projects} description={languages[`${language}`].titleDescriptions.projects} />
          <SectionSelector />
          <Showcase />
          <Topic title={languages[`${language}`].titles.skills} description={languages[`${language}`].titleDescriptions.skills} />
          <Skills />
          <Topic title={languages[`${language}`].titles.contact} description={languages[`${language}`].titleDescriptions.contact} />
          <ContactTab currentLanguage={language}/>
          <Footer />
        </div>
      </WebsitesContextProvider>
  );
}

export default App;
