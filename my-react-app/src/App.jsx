import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo.jsx'
import Actor from './map.jsx'
import Familys from './arry.jsx'
import Librey from './Librey.jsx'




function App() {

  const actors = ['salman Khan', 'bappaRaj', 'asik Khan', 'manna'];

  const familys = [
    { id: 1, name: 'Abu Bakr as-Siddiq', father: 'Uthman ibn Amir', mother: 'Umm al-Khayr Salma', Bonso: 'Quraysh (Banu Taym)', age: 63 },
    { id: 2, name: 'Umar ibn al-Khattab', father: 'Al-Khattab ibn Nufayl', mother: 'Hantama bint Hisham', Bonso: 'Quraysh (Banu Adi)', age: 63 },
    { id: 3, name: 'Uthman ibn Affan', father: 'Affan ibn Abi al-As', mother: 'Arwa bint Kurayz', Bonso: 'Quraysh (Banu Umayyah)', age: 82 },
    { id: 4, name: 'Ali ibn Abi Talib', father: 'Abu Talib ibn Abd al-Muttalib', mother: 'Fatimah bint Asad', Bonso: 'Quraysh (Banu Hashim)', age: 63 },
    { id: 5, name: 'Talha ibn Ubaydullah', father: 'Ubaydullah ibn Uthman', mother: 'Sakba bint al-Hadrami', Bonso: 'Quraysh (Banu Taym)', age: 64 },
    { id: 6, name: 'Zubayr ibn al-Awwam', father: 'Al-Awwam ibn Khuwaylid', mother: 'Safiyyah bint Abd al-Muttalib', Bonso: 'Quraysh (Banu Asad)', age: 64 },
    { id: 7, name: 'Abdur Rahman ibn Awf', father: 'Awf ibn Abd Awf', mother: 'Al-Shifa bint Awf', Bonso: 'Quraysh (Banu Zuhrah)', age: 72 },
    { id: 8, name: 'Sa’d ibn Abi Waqqas', father: 'Malik ibn Uhayb', mother: 'Hamna bint Sufyan', Bonso: 'Quraysh (Banu Zuhrah)', age: 68 },
    { id: 9, name: 'Sa’id ibn Zayd', father: 'Zayd ibn Amr', mother: 'Fatimah bint Ba’ja', Bonso: 'Quraysh (Banu Adi)', age: 70 },
    { id: 10, name: 'Abu Ubaydah ibn al-Jarrah', father: 'Abdullah ibn al-Jarrah', mother: 'Umm Ghanm', Bonso: 'Quraysh (Banu al-Harith)', age: 58 },

    { id: 11, name: 'Bilal ibn Rabah', father: 'Rabah', mother: 'Hamama', Bonso: 'Habashi', age: 60 },
    { id: 12, name: 'Salman al-Farsi', father: 'Unknown (Persian noble)', mother: 'Unknown', Bonso: 'Persian', age: 78 },
    { id: 13, name: 'Abu Dharr al-Ghifari', father: 'Junada ibn Sakan', mother: 'Ramla', Bonso: 'Ghifar', age: 60 },
    { id: 14, name: 'Ammar ibn Yasir', father: 'Yasir ibn Amir', mother: 'Sumayyah bint Khayyat', Bonso: 'Banu Makhzum', age: 90 },
    { id: 15, name: 'Hudhayfah ibn al-Yaman', father: 'Husail ibn Jabir', mother: 'Unknown', Bonso: 'Banu Abs', age: 60 },
    { id: 16, name: 'Muadh ibn Jabal', father: 'Jabal ibn Amr', mother: 'Hind bint Sahl', Bonso: 'Ansar (Khazraj)', age: 33 },
    { id: 17, name: 'Anas ibn Malik', father: 'Malik ibn Nadr', mother: 'Umm Sulaym', Bonso: 'Ansar (Khazraj)', age: 103 },
    { id: 18, name: 'Abu Hurairah', father: 'Sakhr ibn Daws', mother: 'Maymunah', Bonso: 'Daws', age: 78 },
    { id: 19, name: 'Khalid ibn al-Walid', father: 'Al-Walid ibn al-Mughira', mother: 'Lubabah bint al-Harith', Bonso: 'Quraysh (Banu Makhzum)', age: 60 },
    { id: 20, name: 'Amr ibn al-As', father: 'Al-As ibn Wa’il', mother: 'Al-Nabigha', Bonso: 'Quraysh (Banu Sahm)', age: 90 },

    { id: 21, name: 'Abdullah ibn Masud', father: 'Masud ibn Ghafil', mother: 'Umm Abd', Bonso: 'Hudhayl', age: 60 },
    { id: 22, name: 'Abdullah ibn Umar', father: 'Umar ibn al-Khattab', mother: 'Zaynab bint Mazun', Bonso: 'Quraysh (Banu Adi)', age: 84 },
    { id: 23, name: 'Abdullah ibn Abbas', father: 'Abbas ibn Abd al-Muttalib', mother: 'Lubabah al-Kubra', Bonso: 'Quraysh (Banu Hashim)', age: 71 },
    { id: 24, name: 'Abdullah ibn Amr', father: 'Amr ibn al-As', mother: 'Rayta bint Munabbih', Bonso: 'Quraysh (Banu Sahm)', age: 72 },
    { id: 25, name: 'Zayd ibn Harithah', father: 'Harithah ibn Sharahil', mother: 'Su’da bint Tha’laba', Bonso: 'Kalb', age: 55 },
    { id: 26, name: 'Ja’far ibn Abi Talib', father: 'Abu Talib', mother: 'Fatimah bint Asad', Bonso: 'Quraysh (Banu Hashim)', age: 41 },
    { id: 27, name: 'Hamza ibn Abd al-Muttalib', father: 'Abd al-Muttalib', mother: 'Hala bint Uhayb', Bonso: 'Quraysh (Banu Hashim)', age: 59 },
    { id: 28, name: 'Musab ibn Umayr', father: 'Umayr ibn Hashim', mother: 'Khunas bint Malik', Bonso: 'Quraysh (Banu Abd al-Dar)', age: 40 },
    { id: 29, name: 'Ubayy ibn Ka’b', father: 'Ka’b ibn Qays', mother: 'Suhailah', Bonso: 'Ansar (Khazraj)', age: 60 },
    { id: 30, name: 'Thabit ibn Qays', father: 'Qays ibn Shammas', mother: 'Unknown', Bonso: 'Ansar (Khazraj)', age: 60 },

    { id: 31, name: 'Sa’d ibn Muadh', father: 'Muadh ibn Nu’man', mother: 'Kabsha bint Rafi', Bonso: 'Ansar (Aws)', age: 37 },
    { id: 32, name: 'Sa’d ibn Ubadah', father: 'Ubadah ibn Dulaym', mother: 'Amrah bint Masud', Bonso: 'Ansar (Khazraj)', age: 58 },
    { id: 33, name: 'Miqdad ibn Amr', father: 'Amr ibn Tha’laba', mother: 'Unknown', Bonso: 'Kindah', age: 70 },
    { id: 34, name: 'Abu Musa al-Ashari', father: 'Qays ibn Sulaym', mother: 'Dafina', Bonso: 'Azd', age: 63 },
    { id: 35, name: 'Abdullah ibn Zubayr', father: 'Zubayr ibn al-Awwam', mother: 'Asma bint Abu Bakr', Bonso: 'Quraysh (Banu Asad)', age: 72 },
    { id: 36, name: 'Asma bint Abu Bakr', father: 'Abu Bakr as-Siddiq', mother: 'Qutaylah bint Abd al-Uzza', Bonso: 'Quraysh (Banu Taym)', age: 100 },
    { id: 37, name: 'Aisha bint Abu Bakr', father: 'Abu Bakr as-Siddiq', mother: 'Umm Ruman', Bonso: 'Quraysh (Banu Taym)', age: 66 },
    { id: 38, name: 'Hafsa bint Umar', father: 'Umar ibn al-Khattab', mother: 'Zaynab bint Mazun', Bonso: 'Quraysh (Banu Adi)', age: 60 },
    { id: 39, name: 'Fatimah bint Muhammad', father: 'Prophet Muhammad', mother: 'Khadijah bint Khuwaylid', Bonso: 'Quraysh (Banu Hashim)', age: 29 },
    { id: 40, name: 'Ruqayyah bint Muhammad', father: 'Prophet Muhammad', mother: 'Khadijah bint Khuwaylid', Bonso: 'Quraysh (Banu Hashim)', age: 23 },

    { id: 41, name: 'Umm Salama', father: 'Abu Umayyah', mother: 'Atika bint Amir', Bonso: 'Quraysh (Banu Makhzum)', age: 84 },
    { id: 42, name: 'Zaynab bint Jahsh', father: 'Jahsh ibn Riab', mother: 'Umayma bint Abd al-Muttalib', Bonso: 'Quraysh (Banu Asad)', age: 53 },
    { id: 43, name: 'Khadijah bint Khuwaylid', father: 'Khuwaylid ibn Asad', mother: 'Fatimah bint Zaida', Bonso: 'Quraysh (Banu Asad)', age: 65 },
    { id: 44, name: 'Umm Ayman (Barakah)', father: 'Unknown', mother: 'Unknown', Bonso: 'Habashi', age: 70 },
    { id: 45, name: 'Abu Talha al-Ansari', father: 'Sahl ibn al-Aswad', mother: 'Unknown', Bonso: 'Ansar (Khazraj)', age: 70 },
    { id: 46, name: 'Zayd ibn Thabit', father: 'Thabit ibn al-Dahhak', mother: 'Al-Nawar bint Malik', Bonso: 'Ansar (Khazraj)', age: 56 },
    { id: 47, name: 'Imran ibn Husayn', father: 'Husayn ibn Ubayd', mother: 'Unknown', Bonso: 'Khuza’ah', age: 62 },
    { id: 48, name: 'Abdullah ibn Rawaha', father: 'Rawaha ibn Thalaba', mother: 'Kabsha bint Waqid', Bonso: 'Ansar (Khazraj)', age: 40 },
    { id: 49, name: 'Usama ibn Zayd', father: 'Zayd ibn Harithah', mother: 'Umm Ayman', Bonso: 'Kalb', age: 20 },
    { id: 50, name: 'Abdullah ibn Salam', father: 'Salam ibn al-Harith', mother: 'Unknown', Bonso: 'Banu Qaynuqa', age: 70 }
  ];

  const books = [
    { id: 1, name: "Quran", price: 500, category: "Islamic" },
    { id: 2, name: "Sahih Bukhari", price: 1200, category: "Hadith" },
    { id: 3, name: "Sahih Muslim", price: 1100, category: "Hadith" },
    { id: 4, name: "Riyad-us-Saliheen", price: 800, category: "Hadith" },
    { id: 5, name: "Tafsir Ibn Kathir", price: 1500, category: "Tafsir" }
  ];

  return (
    <>
      <div>
        <h3>Helo World</h3>
        {/* {
          actors.map(actor => <Actor name={actor}></Actor>)
        } */}

      </div>
      <div>
        <Librey books={books} ></Librey>

      </div>
      <div className='grid'>
        {
          familys.map(family => (
            <Familys key={family.id} family={family} ></Familys>
          ))
        }
      </div>


    </>
  )
}

export default App

// function Student() {
//   const age = 14;

//   const studentStyle = {
//     color: 'red'
//   }
//   return (
//     <h1 className='borderd' style={studentStyle}>This is  his age is {age} and his is a
//     </h1>
//   )

// };

// function Developer(props) {
//   console.log(props)


//   return (
//     <div className='borderd'>
//       <h1>Hello Developer {props.name}</h1>
//       <span>his age is {props.age}</span>
//       <p>his designation is {props.designation}</p>
//     </div>
//   )

// }
// function Players({ name, Runs, bari }) {
//   return (
//     <div className='borderd'>
//       <h2>Hello {name} </h2>
//       <p>Tumi {Runs} Ran korecho</p>
//       <p>Tumi {bari} thyky ascho</p>
//     </div>
//   )
// }