import {type NextPage} from 'next';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import {
	Button, Col, Container, Form, InputGroup, Row,
} from 'react-bootstrap';
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

		return '/';
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

	return (
		<div className="bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent">
			<Container>
				<Row className="justify-content-center align-items-center px-3 ">
					<Col lg={8}>
						<Row>
							<Col md={7} className="bg-white border p-5">
								<div >
                                    <div className='d-flex justify-content-center align-items-center mt-4'>
                                    <FontAwesomeIcon  size="5x" icon={faLock} fixedWidth />
                                    </div>
                                             
									<h1>Forgot Password ? </h1>
									<p className="text-black-50">You can reset your password here.</p>

									<form onSubmit={login}>
										<InputGroup className="mb-3">
											<InputGroup.Text>
												<FontAwesomeIcon
													icon={faEnvelope}
													fixedWidth
												/>
											</InputGroup.Text>
											<Form.Control
												name="email"
												required
												disabled={submitting}
												placeholder="email address"
												aria-label="email"
												defaultValue="email"
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
												name="New Password"
												required
												disabled={submitting}
												placeholder="New Password"
												aria-label="New Password"
												defaultValue="New Password"
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
												name="Retype New Password"
												required
												disabled={submitting}
												placeholder="Retype New Password"
												aria-label="Retype New Password"
												defaultValue="Retype New Password"
											/>
										</InputGroup>

										<Row>
											<Col xs={6}>
												<Button className="px-4" variant="primary" type="submit" disabled={submitting}>Reset Password </Button>
											</Col>
											
										</Row>
									</form>
								</div>
							</Col>
							<Col
								md={5}
								className="bg-primary text-white d-flex align-items-center justify-content-center p-5"
							>
								<div className="text-center">
									<h2>Sign up</h2>
									<p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
									</p>
									<Link href="/register">
									<button className="btn btn-lg btn-outline-light mt-3" type="button">
                                       Register Now!
									</button>
									</Link>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
