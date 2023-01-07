import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img style = {{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto'}} 
             src={img} 
             alt="img" /> //process.env.PUBLIC_URL + '/error.gif' <--- if img in folder Public --->
    );
}

export default ErrorMessage;