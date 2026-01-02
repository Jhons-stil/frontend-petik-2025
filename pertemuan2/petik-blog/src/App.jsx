/**
 * 
 * function yang dibawah kita sebut komponen
 * setiap mau bikin komponen harus di awali huruf besar dan juga file nya di awali huruf besar
 * 
 */


import Customer from "./componen/Customer/Customer";
import Footer from "./componen/Footer/Footer";
import Header from "./componen/Header/Header";
import Profile from "./componen/profile/Profile";


function App() {
  // bisa juga bukin logic JS disini
  // contoh
  const a = 10
  const b = 20
  console.log(a+b);
  
  return (
    <>
      {/* <Header /> */}
      {/* <h1>To-do List :</h1> */}
      {/* <ol>
        <li>Mengerjakan togas front end</li>
        <li>Mempelajari tutorial react js</li>
        <li>Murojaah</li>
      </ol> */}
      {/* <img src="https://picsum.photos/200/300" alt="gambar" /> */}
      {/* reusable namanya, bisa di panggil ulang, jadii dia membuat komponen baru */}
      {/* <Profile nama="Haikal" alamat={"Sukabumi"} umur={19} /> */}
      {/* <Profile nama="Bambang" alamat={"Bandung"} umur={18} /> */}
    {/* <Footer nama="Jhon Stil" /> */}
    <h1>Our Customer</h1>
    <Customer nama="Haikal" alamat="Sukabumi" membership="Platinum" />
    <Customer nama="Jhon" alamat="Sumedang" membership="Premium" />
    <Customer nama="Jhon" alamat="Sumedang" membership="Gold" />
    </>
  );
};



export default App
