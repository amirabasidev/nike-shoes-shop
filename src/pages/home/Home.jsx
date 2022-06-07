import Banner from "../../components/UI/banner/Banner";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";

const Home = () => {
  return (
    <section>
      <Banner />
      <ProductsSlider
        title="last products"
        url="https://amirabasinasab.ir/nike/index.php/productitems"
      />
      <ProductsSlider
        title="joradn Shoes"
        url="https://amirabasinasab.ir/nike/index.php/productitems?categoryName='jordan'"
      />
    </section>
  );
};

export default Home;
