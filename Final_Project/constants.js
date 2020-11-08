const urls = {
    home_url: 'http://automationpractice.com/index.php',
    logo_url_redirect: 'http://automationpractice.com/index.php',
    t_shirt_url: 'http://automationpractice.com/index.php?id_category=5&controller=category'
};
const errors = {
    invalid_email: 'Invalid email address.',
    exist_email: 'An account using this email address has already been registered. Please enter a valid password or request a new one.',
    required_email: 'An email address required.',
    required_password: 'Password is required.',
    auth_error: 'Authentication failed.',
    notRegistered_email: 'There is no account registered for this email address.',
    forgot_password_alert: 'A confirmation email has been sent to your address: a@a.com',
    register_phone_required: 'You must register at least one phone number.',
    register_last_name_required: 'lastname is required.',
    register_first_name_required: 'firstname is required.',
    register_password_required: 'passwd is required.',
    register_address_required: 'address1 is required.',
    register_city_required: 'city is required.',
    register_zip_code_required: "The Zip/Postal code you've entered is invalid. It must follow this format: 00000",
    register_country_required: 'This country requires you to choose a State.',
    search_alert_error: 'Please enter a search keyword',
    search_alert_error_no_results: 'No results were found for your search',
};

export {errors, urls};