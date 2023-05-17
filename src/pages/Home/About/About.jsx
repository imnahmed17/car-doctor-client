import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="pt-3 text-justify">Car Doctor is a platform that provides expert auto repair services and maintenance tips. Our goal is to make car ownership a hassle-free experience by providing our customers with top-notch service and advice. Our team of experienced mechanics has been serving the local community for over 10 years.</p>
                    <p className="py-3 text-justify">We offer a wide range of services, including routine maintenance, oil changes, brake repairs, and more. Whether you need a quick tune-up or a major repair, our skilled technicians will get the job done right. We pride ourselves on providing high-quality workmanship and exceptional customer service. We believe in treating our customers like family, and we always go above and beyond to ensure their satisfaction.</p>
                    <p>If you have any questions or would like to schedule an appointment, please do not hesitate to contact us. We look forward to hearing from you!</p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;