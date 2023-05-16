import people from '../../../assets/icons/group.svg';
import watch from '../../../assets/icons/Group 38729.svg';
import support from '../../../assets/icons/person.svg';
import settings from '../../../assets/icons/Wrench.svg';
import safety from '../../../assets/icons/check.svg';
import delivery from '../../../assets/icons/deliveryt.svg';

const Features = () => {
    return (
        <div className="mt-20">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-orange-600">Core Features</h3>
                <h2 className="text-5xl">Why Choose Us</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> Words which do not look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
                <div className="card py-10 bg-base-100 border-2 shadow-lg">
                    <figure>
                        <img src={people} alt="" className='w-1/2 h-20' />
                    </figure>
                    <p className="mt-4 text-center">Expert Team</p>
                </div>
                <div className="card py-10 bg-orange-600 shadow-lg">
                    <figure>
                        <img src={watch} alt="" className='w-1/2 h-20' />
                    </figure>
                    <p className="mt-4 text-center text-white">Timely Delivery</p>
                </div>
                <div className="card py-10 bg-base-100 border-2 shadow-lg">
                    <figure>
                        <img src={support} alt="" className='w-1/2 h-20' />
                    </figure>
                    <p className="mt-4 text-center">24/7 Support</p>
                </div>
                <div className="card py-10 bg-base-100 border-2 shadow-lg">
                    <figure>
                        <img src={settings} alt="" className='w-1/2 h-20' />
                    </figure>
                    <p className="mt-4 text-center">Best Equipment</p>
                </div>
                <div className="card py-10 bg-base-100 border-2 shadow-lg">
                    <figure>
                        <img src={safety} alt="" className='w-1/2 h-20' />
                    </figure>
                    <p className="mt-4 text-center">100% Guranty</p>
                </div>
                <div className="card py-10 bg-base-100 border-2 shadow-lg">
                    <figure>
                        <img src={delivery} alt="" className='w-1/2 h-20' />
                    </figure>
                    <p className="mt-4 text-center">Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default Features;