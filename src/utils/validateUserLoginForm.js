export const validateUserLoginForm = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username < 6) {
        errors.username = 'Must be at least 2 characters.';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.lastName < 8) {
        errors.lastName = 'Must be at least 8 characters.';
    } 
}