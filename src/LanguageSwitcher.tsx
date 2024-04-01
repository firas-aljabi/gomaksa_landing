import React from 'react';
import { useLanguage } from './hooks/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const buttonStyle = {
    padding: '12px 24px', // Increased padding for a larger button
    margin: '5px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontWeight: 'bold', // Make text bold
    fontSize: '16px', // Larger font size

  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ccc',
    cursor: 'default',
  };

  return (
    <div>
      {language === 'en' ? (
        <button
          onClick={() => setLanguage('ar')}
          style={buttonStyle}
        >
          ع
        </button>
      ) : (
        <button
          onClick={() => setLanguage('en')}
          style={buttonStyle}
        >
          Eng
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
