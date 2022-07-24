import { object, string } from 'yup';

export const signInValidationSchema = () => object().shape({
	email: string().required('Empty email').email('Empty password'),
	password: string()
		.required('Empty Password')
		.matches(/^.*[0-9].*/, 'Atleast one number')
		.matches(/[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g, 'Atleast one symbol')
		.matches(/.*[A-Z].*/, 'Atleast one uppercase')
		.matches(/.*[a-z].*/, 'Atleast one lowercase')
		.min(8, 'Invalid Password'),
});

export const resetPasswordValidationSchema = () => object().shape({
	password: string()
		.required('Empty Password')
		.matches(/^.*[0-9].*/, 'Atleast one number')
		.matches(/[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g, 'Atleast one symbol')
		.matches(/.*[A-Z].*/, 'Atleast one uppercase')
		.matches(/.*[a-z].*/, 'Atleast one lowercase')
		.min(8, 'Invalid Password'),
	newPassword: string()
		.required('Empty Password')
		.matches(/^.*[0-9].*/, 'Atleast one number')
		.matches(/[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g, 'Atleast one symbol')
		.matches(/.*[A-Z].*/, 'Atleast one uppercase')
		.matches(/.*[a-z].*/, 'Atleast one lowercase')
		.min(8, 'Invalid Password'),
	confirmPassword: string()
		.required('Empty Password')
		.matches(/^.*[0-9].*/, 'Atleast one number')
		.matches(/[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g, 'Atleast one symbol')
		.matches(/.*[A-Z].*/, 'Atleast one uppercase')
		.matches(/.*[a-z].*/, 'Atleast one lowercase')
		.min(8, 'Invalid Password'),
});
