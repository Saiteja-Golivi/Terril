import {type NextPage} from 'next';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {Button, Col, Container, Form, InputGroup, Row} from 'react-bootstrap';
import Link from 'next/link';
import {type SyntheticEvent, useState} from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import {deleteCookie, getCookie} from 'cookies-next';

const Login: NextPage = () => {
	const router = useRouter();

	const [submitting, setSubmitting] = useState(false);

	const getRedirect = () => {
		const redirect = getCookie('redirect');
		if (redirect) {
			deleteCookie('redirect');
			return redirect.toString();
		}

		return '/otp';
	};

	const login = async (e: SyntheticEvent) => {
		e.stopPropagation();
		e.preventDefault();

		setSubmitting(true);

		const res = await axios.post('api/mock/login');
		if (res.status === 200) {
			void router.push(getRedirect());
		}

		setSubmitting(false);
	};



	const handleClick = () => {
		void router.push('/forgetPassword');
	};


	return (
		<div  className="d-flex justify-content-center align-items-center vh-100 login-main">
			<div>
				<Container >
				
					<div className="login-card">
						<h1>Login</h1>
						<p>Sign In to your account</p>

						<form onSubmit={login}>
							<InputGroup className="mb-3">
								<InputGroup.Text>
									<FontAwesomeIcon
										icon={faUser}
										fixedWidth
									/>
								</InputGroup.Text>
								<Form.Control
									name="username"
									required
									disabled={submitting}
									placeholder="Username / Number"
									aria-label="Username"
									defaultValue="Username"
								/>
							</InputGroup>
							<InputGroup className="mb-3">
								<InputGroup.Text>
									<FontAwesomeIcon
										icon={faLock}
										fixedWidth
									/>
								</InputGroup.Text>
								<Form.Control
									type="password"
									name="password"
									required
									disabled={submitting}
									placeholder="Password"
									aria-label="Password"
									defaultValue="Password"
								/>
							</InputGroup>

							<Row>
								<Col xs={6}>
									<Button className="px-4" variant="primary" type="submit" disabled={submitting}>Next</Button>
								</Col>
								<Col xs={6} className="text-end">
									<Button className="px-0" variant="link" onClick={handleClick}>
                                                 Forgot password?
									</Button>
								</Col>
							</Row>
						</form>
					</div>
				</Container>
			</div>
		</div>
		
	);
};

export default Login;
