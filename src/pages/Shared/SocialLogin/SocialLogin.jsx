import { FcGoogle } from 'react-icons/fc';

const SocialLogin = ({ handleGoogleSignIn }) => {
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FcGoogle size={26} />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;