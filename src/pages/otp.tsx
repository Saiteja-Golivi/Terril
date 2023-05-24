import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

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
		// Perform verification logic with the entered OTP
		// You can make an API call to verify the OTP or implement your own validation logic

		// Redirect to the next page if OTP is valid
		router.push('/');
	};

	const handleResendOTP = () => {
		// Logic to resend OTP
		startTimer();
	};

	const startTimer = () => {
		setIsTimerActive(true);
		setTimer(30);
	};

	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (isTimerActive) {
			interval = setInterval(() => {
				setTimer((prevTimer) => prevTimer - 1);
			}, 1000);
		}

		if (timer === 0) {
			setIsTimerActive(false);
			clearInterval(interval);
		}

		return () => {
			clearInterval(interval);
		};
	}, [isTimerActive, timer]);



	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div className="card" style={{width: '400px'}}>
				<div className="card-body">
					<h1 className="card-title text-center">Enter OTP</h1>
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<input type="text" className="form-control" value={otp} onChange={handleOtpChange} />
						</div>
						<button type="submit" className="btn btn-primary w-100">Verify OTP</button>
						{isTimerActive ? (
							<button className="btn btn-link mt-3" disabled>
              Resend OTP in {timer}s
							</button>
						) : (
							<button className="btn btn-link mt-3" onClick={handleResendOTP}>
              Resend OTP
							</button>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default OtpPage;
