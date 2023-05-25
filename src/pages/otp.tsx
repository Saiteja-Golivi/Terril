/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// Otp.stories.tsx

import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {Form, InputGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import OtpInput from 'react-otp-input';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const OtpPage = () => {
	const router = useRouter();
	const [otp, setOtp] = useState('');
	const [timer, setTimer] = useState(30);
	const [isTimerActive, setIsTimerActive] = useState(false);

	const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setOtp(e.target.value);
	};


	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		void router.push('/');
	};

	const handleResendOtp = () => {
		// Logic to resend OTP
		startTimer();
	};

	const otpStyle = {
		width: '80px',
		height:'50px',
		margin:'5% 0 10% 7%',
		textAlign :'center',
		borderRadius :'20px',
	};

	const startTimer = () => {
		setIsTimerActive(true);
		setTimer(30);
	};

	useEffect(() => {

		console.log(toast.success);
		
		let interval: NodeJS.Timeout;

		if (isTimerActive) {
			interval = setInterval(() => {
				setTimer((prevTimer) => prevTimer - 1);
			}, 1000);
		}

		if (timer === 0) {
			setIsTimerActive(false);
			clearInterval(interval!);
		}

		return () => {
			clearInterval(interval!);
			if (!isTimerActive) {
				// eslint-disable-next-line new-cap
				NotifyToast();
			}
		};
	}, [isTimerActive, timer]);


	const NotifyToast = () => {
		toast.success('OTP has been sent to registered Email ID and number!', { 
			position: toast.POSITION.TOP_RIGHT,
		});
	};

	


	return (
		<div className="d-flex justify-content-center align-items-center vh-100 login-main">
			<div className='login-card'>
				<div className="card-body">
					<h3 className="text-center mb-3">Enter OTP</h3>
					<form onSubmit={handleSubmit}>

						<ToastContainer /> 

	     		   <OtpInput
							value={otp}
							onChange={setOtp}
							numInputs={4}
							renderInput={(props) => <input {...props} style={otpStyle} />}
						/>

				
					  <div className='d-flex justify-content-between'>
							<button type="submit" className="btn btn-primary w-60">Verify OTP</button>
							{isTimerActive ? (
								<button className="btn btn-link mt-3" disabled>
                                   Resend OTP in {timer}s
								</button>
							) : (
								<button className="btn btn-link" onClick={handleResendOtp}>
                                   Resend OTP
								</button>
							)}
						</div>
						
					</form>
				</div>
			</div>
		</div>
	);
};

export default OtpPage;
