import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Modal from './components/Modal';
import './App.css';

interface ModalData {
  image: string;
  title: string;
  context: string;
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [modalData, setModalData] = useState<ModalData | null>(null);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const openModal = (image: string, title: string, context: string) => {
    setModalData({ image, title, context });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalData(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects openModal={openModal} />
      <Skills />
      <Contact />
      {modalData && (
        <Modal
          image={modalData.image}
          title={modalData.title}
          context={modalData.context}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default App;
