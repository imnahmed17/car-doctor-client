import calendar from '../../../assets/icons/calendar.png';
import phone from '../../../assets/icons/phone.png';
import location from '../../../assets/icons/location.png';

const ContactInfo = () => {
    return (
        <div className="mt-28 bg-slate-300 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card w-96 px-10 py-16 ">
                <div className='flex items-center gap-3'>
                    <img src={calendar} alt="" className="h-2/3" />
                    <div>
                        <p className="text-sm">We are open monday-friday</p>
                        <h2 className="card-title">7:00 am - 9:00 pm</h2>
                    </div>
                </div>
            </div>
            <div className="card w-96 px-10 py-16 ">
                <div className='flex items-center gap-3'>
                    <img src={phone} alt="" className="h-2/3" />
                    <div>
                        <p className="text-sm">Have a question?</p>
                        <h2 className="card-title">+2546 251 2658</h2>
                    </div>
                </div>
            </div>
            <div className="card w-96 px-10 py-16 ">
                <div className='flex items-center gap-3'>
                    <img src={location} alt="" className="h-2/3" />
                    <div>
                        <p className="text-sm">Need a repair? our address</p>
                        <h2 className="card-title">Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;