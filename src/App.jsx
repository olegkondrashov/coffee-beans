
import About from "./components/about/about.component";
import Footer from "./components/footer/footer.component";
import Main from "./components/main/main.component";
import TopProducts from "./components/top-products/top-products.component";

const App = () => {
  return (
    <div className="App">
      <Main/>
      <About/>
      <TopProducts/>
      <Footer/>
    </div>
  );
}

export default App;
