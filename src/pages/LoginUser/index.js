import { useState } from "react";
import { Formik, Form } from 'formik';
import Input from '../../components/Input';
import { Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux'
import {
	Wrapper,
	Forms,
	ForgotPassLink,
	Container
} from './styled.js';
import { signInValidationSchema } from "../../utils/validation";

const Login = () => {
	const { UpdatedPassword } = useSelector((state) => state)
	const [message, setMessage] = useState('');
	const [error, setError] = useState(true);

	const handleLoginSubmit = ({ email, password }) => {
		if (email === 'admin@gmail.com' && password === UpdatedPassword) {
			setError(false)
			setMessage('Login Successfully')
			console.log(email, password)
		}
		else (
			setMessage('Wrong Email & password')
		)
	};

	return (
		<Container>
			<Wrapper>
				<Typography
					variant="h5"
					color="black"
					align="center"
					display="block"
				>
					USER SIGN IN
				</Typography>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={signInValidationSchema()}
					onSubmit={handleLoginSubmit}
				>
					{({ errors, touched, values, handleChange, submitForm, handleBlur }) => (
						<Forms>
							<Form>
								<Input
									type="email"
									name="email"
									placeholder="Email"
									onBlur={handleBlur}
									error={touched.email && 1}
									onChange={handleChange}
									value={values.email}
									errormessage={errors.email}
								/>
								<Input
									type="password"
									name="password"
									placeholder="Password"
									onChange={handleChange}
									onBlur={handleBlur}
									error={touched.password && 1}
									value={values.password}
									errormessage={errors.password}
								/>
								<Typography style={{color: error === true ? "#8B0000" : '#007E33'}}   >
									{message}
								</Typography>
								<Typography
									color="primary"
									align="right"
									display="block"
								>
									<ForgotPassLink to={'/reset-password'}>Reset PassLink</ForgotPassLink></Typography>
								<Button variant="contained" color="inherit" onClick={submitForm}>
									Sign In
								</Button>
							</Form>
						</Forms>
					)}
				</Formik>
			</Wrapper>
		</Container>
	);
};

export default Login;

