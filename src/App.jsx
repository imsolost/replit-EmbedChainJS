import './App.css'
// import { App } from 'embedchain'
// import Client from '@replit/database'
import { useState, useEffect } from 'react'

// const client = new Client()

// const chatApp = App()

// Function to retrieve a list of files in the docs folder using the Fetch API
const getListOfDocs = async () => {
  try {
    const response = await fetch('/docs');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const fileList = await response.json();
    return fileList;
  } catch (e) {
    console.error('Failed to retrieve docs:', e);
  }
};
// Function to produce a list of files in the docs folder
// const getListOfDocs = async () => {
//   return new Promise((resolve, reject) => {
//     fs.readdir('docs', (err, fileList) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(fileList);
//     });
//   });
// }


export default function Home() {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    getListOfDocs().then(setDocs).catch(console.error);
  }, []);

  
  // Add the docs to our chatApp
  const updateChatAppDocs = async (docs) => {
    // await chatApp.setDocs(docs);
    console.log(docs)
  };

  updateChatAppDocs(docs)
  
  
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit
    </main>
  )
}
