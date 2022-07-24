import { useState } from "react";
import { Formik, Form } from 'formik';
import Input from '../../components/Input';
import { Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
	Wrapper,
	Forms,
	ForgotPassLink,
	Container
} from './style.js';
import { resetPasswordValidationSchema } from "../../utils/validation";

const ResetPassword = () => {
	const dispatch = useDispatch();
	const { UpdatedPassword } = useSelector((state) => state)
	const [message, setMessage] = useState('');
	const [error, setError] = useState(true);

	const handleLoginSubmit = ({ password, newPassword, confirmPassword }) => {
		if (UpdatedPassword === password) {
			if (newPassword === confirmPassword) {
				dispatch({ type: "UPDATE_PASSWORD", payload: confirmPassword })
				setError(false)
				setMessage('Password Change Successfully!')
			}
			else {
				setMessage('New Password not match with confirm Password ')
			}
		}
		else {
			setMessage('Wrong Current Password')
		}

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
						password: '',
						newPassword: '',
						confirmPassword: '',
					}}
					validationSchema={resetPasswordValidationSchema()}
					onSubmit={handleLoginSubmit}
				>
					{({ errors, touched, values, handleChange, submitForm, handleBlur }) => (
						<Forms>
							<Form>
								<Input
									type="password"
									name="password"
									placeholder="Current Password"
									onChange={handleChange}
									onBlur={handleBlur}
									error={touched.password && 1}
									value={values.password}
									errormessage={errors.password}
								/>
								<Input
									type="password"
									name="newPassword"
									placeholder="New Password"
									onChange={handleChange}
									onBlur={handleBlur}
									error={touched.newPassword && 1}
									value={values.newPassword}
									errormessage={errors.newPassword}
								/>
								<Input
									type="password"
									name="confirmPassword"
									placeholder="Confirm New Password"
									onChange={handleChange}
									onBlur={handleBlur}
									error={touched.confirmPassword && 1}
									value={values.confirmPassword}
									errormessage={errors.confirmPassword}
								/>
								<Typography style={{ color: error === true ? "#8B0000" : '#007E33' }}   >
									{message}
								</Typography>
								<Typography
									color="primary"
									align="right"
									display="block"
								>
									<ForgotPassLink to={'/'}>Go to sign in page</ForgotPassLink>
								</Typography>
								<Button variant="contained" color="inherit" onClick={submitForm}>
									Reset Password
								</Button>
							</Form>
						</Forms>
					)}
				</Formik>
			</Wrapper>
		</Container>
	);
};

export default ResetPassword;

