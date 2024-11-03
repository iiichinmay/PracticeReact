import React, { useState } from 'react';

const ThemeToggle = () => {
  const [DarkTheme, setDarkTheme] = useState(false); 

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${DarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-3xl font-bold mb-4">{DarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
      <button 
        onClick={() => setDarkTheme(!DarkTheme)} 
        className={`py-2 px-4 rounded focus:outline-none ${DarkTheme ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
      >
        {DarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
      <p className="mt-4">This is an example of toggling between themes using useState and Tailwind CSS.</p>
    </div>
  );
}

export default ThemeToggle;

// import React, { useState } from 'react';

// const ThemeToggle = () => {
//   const [DarkTheme, setDarkTheme] = useState(false); 

//   const toggleTheme = () => {
//     setDarkTheme((prevTheme) => !prevTheme); 
//   };

//   return (
//     <div className={`min-h-screen flex flex-col items-center justify-center ${DarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
//       <h1 className="text-3xl font-bold mb-4">{DarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
//       <button 
//         onClick={toggleTheme} 
//         className={`py-2 px-4 rounded focus:outline-none ${DarkTheme ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
//       >
//         {DarkTheme ? 'Light' : 'Dark'} Theme
//       </button>
//       <p className="mt-4">This is an example of toggling between themes using useState and Tailwind CSS.</p>
//     </div>
//   );
// }
// export default ThemeToggle;


