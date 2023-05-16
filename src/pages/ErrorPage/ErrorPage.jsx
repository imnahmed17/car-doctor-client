import img from '../../assets/images/error/error404.png';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error');

    return (
        <div className="min-h-[calc(100vh-112px)] ">
            <figure className="mt-14 flex justify-center">
                <img src={img} alt="" />
            </figure>
        </div>
    );
};

export default ErrorPage;