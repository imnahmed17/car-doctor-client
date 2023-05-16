import useTitle from "../../../hooks/useTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactInfo from "../ContactInfo/ContactInfo";
import Features from "../Features/Features";
import Products from "../Products/Products";
import Services from "../Services/Services";

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Banner />
            <About />
            <Services />
            <ContactInfo />
            <Products />
            <Features />
        </div>
    );
};

export default Home;