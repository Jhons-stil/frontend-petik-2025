import Card from "./components/card/Card";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <h3>Daftar pelanggan</h3>
      <Content nama={"Ucup"} membership={"Platinum"} />
      <Content nama={"Bambang"} membership={"Gold"} />
      <Content nama={"Budi"} membership={"Silver"} />
      <h3>Yukk berlangganan membership!</h3>
      {/* <Card member={"Free"} harga={0}/>
      <Card member={"Gold"} harga={15000}/>
      <Card member={"Platinum"} harga={18000}/> */}

      {/* ngobar sama kak sukma */}
      <div className="card-wrapper">
        <Card
          title={"Free"}
          price={"0"}
          list1={"Gratis tanpa biaya langganan"}
          list2={"Bisa melihat katalog & update terbaru"}
          list3={"Akses dasar ke fitur utama"}
          list4={"Dukungan komunitas"}
        />
        <Card
          title={"Gold"}
          price={"1000000"}
          isPopular={true}
          list1={"Prioritas layanan pelanggan"}
          list2={"Akses premium terpilih"}
          list3={"Promo & diskon khusus member"}
          list4={"Dukungan komunitas diutamakan"}
        />
        <Card
          title={"Platinum"}
          price={"2000000"}
          list1={"Akses penuh ke seluruh fitur premium"}
          list2={"Prioritas tertinggi suporrt & layanan"}
          list3={"Penawaran eklusif & early access"}
          list4={"Promo & diskon khusus member"}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
