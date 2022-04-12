import Nav from "../components/Nav";
import Card from "../components/Card";
import Footer from "../components/Footer";

const daftar = [
  { gambar: "../img/jam1.jpg", title: "Jam Tangan pria", content: "Rp 50.000" },
  { gambar: "../img/jam2.jpg", title: "Jam Tangan pria", content: "RP 50.000" },
  { gambar: "../img/jam3.jpg", title: "Jam Tangan wanita", content: "Rp 70.000" },
  { gambar: "../img/jam4.jpg", title: "Jam Tangan pria", content: "Rp 100.000" },
  { gambar: "../img/jam5.jpg", title: "Jam Tangan pria", content: "Rp 80.000" },
  { gambar: "../img/jam6.jpg", title: "Jam Tangan pria", content: "Rp 55.000" },
  { gambar: "../img/jam7.jpg", title: "Jam Tangan pria", content: "Rp 150.000" },
  { gambar: "../img/jam8.jpg", title: "Jam Tangan pria", content: "Rp.90.000" },
];

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          {daftar.map((agt, indeks) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-6">
              <Card gambar={agt.gambar} title={agt.title} content={agt.content} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
