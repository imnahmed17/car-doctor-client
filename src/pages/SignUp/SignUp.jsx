import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import img from '../../assets/images/login/login.svg';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { createUser, updateUserData, logOut } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    useTitle('SignUp');

    const handleSignUp = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, email, password, confirmPassword);

        if (password !== confirmPassword) {
            setError('Password did not match');
            return;
        }
        else if (password.length < 6) {
            setError('Password should be greater than 6 characters');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user);
                setError('');
                setSuccess('User has been created successfully');
                // set user name
                updateUserData(result.user, name)
                    .then(() => {
                        console.log('User name updated');
                    })
                    .catch(error => {
                        setError(error.message);
                    });
                form.reset();
                logOut();
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "text" : "password"} name='password' placeholder="******" className="input input-bordered" required />
                                <label className="label" onClick={() => setShow(!show)}>
                                    {
                                        show ? 
                                            <p className="label-text-alt link link-hover">Show password</p>
                                            :
                                            <p className="label-text-alt link link-hover">Hide password</p>
                                    }
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type={show ? "text" : "password"} name='confirmPassword' placeholder="******" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='mt-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
                        <p className="text-sm text-center text-success">{success}</p>
                        <p className="text-sm text-center text-error">{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;