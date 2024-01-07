
const Privacy = () => {
    return (
        <div className='p-6'>
          
            <h1 className=' font-semibold  text-lg'>
                Personal Identification Information
            </h1>
            <p>
                We may collect personal identification information from Users in various ways, including but not limited to when Users visit our site, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, and credit card information. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site-related activities.
            </p>
            <h1 className=' font-semibold  text-lg mt-4'>
                Non-Personal Identification Information
            </h1>
            <p>
                We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer, and technical information about Users' means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
            </p>
            <h1 className=' font-semibold  text-lg mt-4'>
                Web Browser Cookies

            </h1>
            <p>
                Our Site may use "cookies" to enhance User experience. Users' web browsers place cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
            </p>
            <h1 className=' font-semibold  text-lg mt-4'>
                How We Protect Your Information
            </h1>
            <p>
                We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of Users' personal information, username, password, transaction information, and data stored on our Site.        </p>
            <h1 className=' font-semibold  text-lg mt-4'>
                Sharing Personal Information
            </h1>

            <p>
                We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
            </p>
            <h1 className=' font-semibold  text-lg mt-4'>
                Third-party Links
            </h1>
            <p>
                QuickMart may contain links to third-party websites or services. These sites have their own privacy policies, and we are not responsible for the content or activities of these linked sites.
                By using QuickMart, users consent to our Privacy Policy and agree to its terms and conditions. QuickMart reserves the right to modify this Privacy Policy at any time. Users are encouraged to review this policy periodically for any changes.
                If you have any questions about our Privacy Policy, please contact us at 'qucikmart@gmail.com'.
            </p>

            <div className=' text-center'>
                <button onClick={() => window.history.back()} className=' rounded-md bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-10'>Go back</button>
            </div>
        </div>
    )
}

export default Privacy