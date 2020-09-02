import React, {useState} from 'react';
import styled from 'styled-components';
import {Form} from 'react-bootstrap';


import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Authenticate, isAuth} from './helpers/auth'
import {Redirect, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'

//images
import background_1 from './assets/background5.png'

//components

const Styles = styled.div`
  background-image:url(${background_1});
  padding: 8% 15%;
  font-size:36px;
  @media only screen and (max-width: 790px) {
    font-size:28px;
    padding:0;
  }
  @media only screen and (max-width: 320px) {
    font-size:22px;
  }
  .register-card{
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    width:auto;
    height:auto;
    padding:2% 5%;
    background:#F2F0F0;
    color:#555;
    border-radius:15px;
    box-shadow:5px 10px 20px 1px rgba(0,0,0, 0.253);
  }
  .join-us{
    font-size:1em;
    font-weight:bold;
    color:rgba(63,63,179,1);
  }
  .register-welcome{
    font-size:1em;
    color:rgba(63,63,179,1);
  }
  .register-1st-row{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100%;
    @media only screen and (max-width: 790px) {
      flex-direction:column;
      padding:0;
  }
  }
  .register-2nd-row{
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    width:100%;
    padding-top:5%;
    font-size:0.5em;
  }
  .register-3rd-row{
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    width:100%;
    height:10vh;
    margin-top:5%;
  }
  .st-register-column{
    display:flex;
    flex-direction:column;
    width:100%;
    padding-right:2%;
    @media only screen and (max-width: 790px) {
      padding:0;
  }
  }
  .nd-register-column{
    display:flex;
    flex-direction:column;
    width:100%;
    padding-left:2%;
    @media only screen and (max-width: 790px) {
      padding:0;
    }
  }
  .register-input{
    width:100%;
    height:8vh;
    border-radius:5px;
    margin-bottom:5%;
    padding:0 4%;
    border:none;
    font-size:0.5em;
  }
  .register-radio{
    font-size:0.5em;
    margin-right:5%;
    margin-top:5%;
  }
  .register-button{
    width:20%;
    height:50%;
    background:rgba(63,63,179,1);
    border-radius:5px;
    border:none;
    color:white;
    font-weight:600;
    font-size:0.5em;
    @media only screen and (max-width: 550px) {
      width:24%;
  }
  }
  .home-button{
    width:16%;
    height:50%;
    background:#999;
    border-radius:5px;
    border:none;
    color:white;
    font-weight:600;
    font-size:0.5em;
    margin-right:2%;
    @media only screen and (max-width: 550px) {
      width:26%;
  }
  }
`;

toast.configure();
function Register() {

  const[loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email :'', 
    password :'',
    password2 : '',
    title :'', 
    first_name :'', 
    last_name :'', 
    institution :'', 
    country :'', 
    reviewer :false,
    textChange: null
  })

  const {email, password, password2, title, first_name, last_name, institution, country, reviewer, textChange} = formData

  //handle change from inputs
  const handleChange = text => e => {
      setFormData({...formData, [text]: e.target.value})
      let isReviewer = reviewer
      if(e.target.type==='checkbox'){
        setFormData({...formData, [text] : !isReviewer })
        console.log(reviewer)
      }
  }
 
  //submit data to backend
  const handleSubmit = e => {
    e.preventDefault()
    if(email && password && title && first_name && last_name && institution && country){
       if(password === password2){
        setFormData({ ...formData, textChange: 'Submitting' });
         axios.post(`${process.env.REACT_APP_API_URL}/register`, {
          email, password, title, first_name, last_name, institution, country, reviewer
         }).then(res => {
           setFormData({
            ...formData,
            email :'', 
            password :'',
            password2 : '',
            title :'', 
            first_name :'', 
            last_name :'', 
            institution :'', 
            country :'', 
            reviewer :reviewer,
            textChange: 'Registered'
           })
           setLoading(true)
           toast.success(res.data.message)
         }).catch(err => {
          setFormData({
            ...formData,
            email :'', 
            password :'',
            password2 : '',
            title :'', 
            first_name :'', 
            last_name :'', 
            institution :'', 
            country :'', 
            reviewer :reviewer,
            textChange: null
           })
           toast.error(err.response.data.error)
         })
       }else{
         toast.error("passwords don't matches")
       }
    }else{
      toast.error('Please fill all fields')
    }
  }

    return (
       <React.Fragment>
         <Styles>
         {isAuth() ? <Redirect to='/' /> : null}
           <ToastContainer style={{fontSize:'0.5em'}}/>
           <div className='register-card'>
           <p className='join-us'>Join Us Now</p>
           <p className='register-welcome'>Welcome to our community</p>
           <form onSubmit={handleSubmit}>
           <div className='register-1st-row'>
             <div className='st-register-column'>
             <input name='first_name' type='text' placeholder='Your First Name *' className='register-input' value={first_name} onChange={handleChange('first_name')}/>
             <input name='email' type='email' placeholder='Your email' className='register-input' value={email} onChange={handleChange('email')}/>
             <input name='password' type='password' placeholder='Your password' className='register-input' value={password} onChange={handleChange('password')}/>
             </div>
             <div className='nd-register-column'>
             <input name='last_name' type='text' placeholder='Your Last Name *' className='register-input' value={last_name} onChange={handleChange('last_name')}/>
             <input name='title' type='text' placeholder='Your Title (Mr., Mrs., Dr., etc.)' className='register-input' value={title} onChange={handleChange('title')}/>
             <input name='password2' type='password' placeholder='Confirm password' className='register-input' value={password2} onChange={handleChange('password2')}/>
             </div>
           </div>
           <input name='institution' type='text' placeholder='Name of your Institution' className='register-input' value={institution} onChange={handleChange('institution')}/>
           <Form.Control 
              as="select" 
              custom 
              value={country} 
              onChange={handleChange('country')}
           >
             {countries.map((country)=>
             <option>{country.label}</option>
             )}  
           </Form.Control>
           
           <div className='register-2nd-row'>
              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Available as a Reviewer" value={reviewer} onChange={handleChange('reviewer')}/>
              </Form.Group>       
           </div>
           {textChange === 'Submitting' ? 
                <p style={{fontSize:'0.5em', color:'rgba(63,63,179,1)', marginBottom:'1.5%'}}>
                <Spinner animation="border" style={{margin:'0 2%', color:'rgba(63,63,179,1)'}} />
                Submitting...
                </p>
                :
                null
            }
           <div className='register-3rd-row'>
              <button className='home-button'>Go home</button>
              <button type='submit' className='register-button'>Register</button>
           </div>
           </form>
           </div>
         </Styles>
       </React.Fragment>
    );
  }
  
  export default Register;


/*
  //country picker
  function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : isoCode;
  }

  const useStyles = makeStyles({
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  });

  function CountrySelect() {
    const classes = useStyles();
  
    return (
      <Autocomplete
        id="country-select-demo"
        style={{ width: 300 }}
        options={countries}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(option) => (
          <React.Fragment>
            <span>{countryToFlag(option.code)}</span>
            {option.label} ({option.code}) +{option.phone}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill  <CountrySelect />
            }}
          />
        )}
      />
    );
  }
*/

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  { code: 'AE', label: 'United Arab Emirates', phone: '971' },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'DZ', label: 'Algeria', phone: '213' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' },
  { code: 'AU', label: 'Australia', phone: '61', suggested: true },
  { code: 'AW', label: 'Aruba', phone: '297' },
  { code: 'AX', label: 'Alland Islands', phone: '358' },
  { code: 'AZ', label: 'Azerbaijan', phone: '994' },
  { code: 'BA', label: 'Bosnia and Herzegovina', phone: '387' },
  { code: 'BB', label: 'Barbados', phone: '1-246' },
  { code: 'BD', label: 'Bangladesh', phone: '880' },
  { code: 'BE', label: 'Belgium', phone: '32' },
  { code: 'BF', label: 'Burkina Faso', phone: '226' },
  { code: 'BG', label: 'Bulgaria', phone: '359' },
  { code: 'BH', label: 'Bahrain', phone: '973' },
  { code: 'BI', label: 'Burundi', phone: '257' },
  { code: 'BJ', label: 'Benin', phone: '229' },
  { code: 'BM', label: 'Bermuda', phone: '1-441' },
  { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
  { code: 'BO', label: 'Bolivia', phone: '591' },
  { code: 'BR', label: 'Brazil', phone: '55' },
  { code: 'BS', label: 'Bahamas', phone: '1-242' },
  { code: 'BT', label: 'Bhutan', phone: '975' },
  { code: 'BV', label: 'Bouvet Island', phone: '47' },
  { code: 'BW', label: 'Botswana', phone: '267' },
  { code: 'BY', label: 'Belarus', phone: '375' },
  { code: 'BZ', label: 'Belize', phone: '501' },
  { code: 'IO', label: 'British Indian Ocean Territory', phone: '246' },
  { code: 'VG', label: 'British Virgin Islands', phone: '1-284' },
  { code: 'CA', label: 'Canada', phone: '1', suggested: true },
  { code: 'KH', label: 'Cambodia', phone: '855' },
  { code: 'CM', label: 'Cameroon', phone: '237' },
  { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
  { code: 'CC', label: 'Cocos (Keeling) Islands', phone: '61' },
  { code: 'CD', label: 'Congo, Democratic Republic of the', phone: '243' },
  { code: 'CF', label: 'Central African Republic', phone: '236' },
  { code: 'KM', label: 'Comoros', phone: '269' },
  { code: 'CG', label: 'Congo, Republic of the', phone: '242' },
  { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
  { code: 'CK', label: 'Cook Islands', phone: '682' },
  { code: 'CL', label: 'Chile', phone: '56' },
  { code: 'CN', label: 'China', phone: '86' },
  { code: 'CO', label: 'Colombia', phone: '57' },
  { code: 'CR', label: 'Costa Rica', phone: '506' },
  { code: 'CU', label: 'Cuba', phone: '53' },
  { code: 'CV', label: 'Cape Verde', phone: '238' },
  { code: 'CW', label: 'Curacao', phone: '599' },
  { code: 'CX', label: 'Christmas Island', phone: '61' },
  { code: 'TD', label: 'Chad', phone: '235' },
  { code: 'HR', label: 'Croatia', phone: '385' },
  { code: 'CY', label: 'Cyprus', phone: '357' },
  { code: 'CZ', label: 'Czech Republic', phone: '420' },
  { code: 'DE', label: 'Germany', phone: '49', suggested: true },
  { code: 'DJ', label: 'Djibouti', phone: '253' },
  { code: 'DK', label: 'Denmark', phone: '45' },
  { code: 'DM', label: 'Dominica', phone: '1-767' },
  { code: 'DO', label: 'Dominican Republic', phone: '1-809' },
  { code: 'EC', label: 'Ecuador', phone: '593' },
  { code: 'EE', label: 'Estonia', phone: '372' },
  { code: 'EG', label: 'Egypt', phone: '20' },
  { code: 'ER', label: 'Eritrea', phone: '291' },
  { code: 'SV', label: 'El Salvador', phone: '503' },
  { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
  { code: 'ET', label: 'Ethiopia', phone: '251' },
  { code: 'FI', label: 'Finland', phone: '358' },
  { code: 'FJ', label: 'Fiji', phone: '679' },
  { code: 'FK', label: 'Falkland Islands (Malvinas)', phone: '500' },
  { code: 'FO', label: 'Faroe Islands', phone: '298' },
  { code: 'FR', label: 'France', phone: '33', suggested: true },
  { code: 'GF', label: 'French Guiana', phone: '594' },
  { code: 'PF', label: 'French Polynesia', phone: '689' },
  { code: 'TF', label: 'French Southern Territories', phone: '262' },
  { code: 'GA', label: 'Gabon', phone: '241' },
  { code: 'GD', label: 'Grenada', phone: '1-473' },
  { code: 'GE', label: 'Georgia', phone: '995' },
  { code: 'GG', label: 'Guernsey', phone: '44' },
  { code: 'GH', label: 'Ghana', phone: '233' },
  { code: 'GI', label: 'Gibraltar', phone: '350' },
  { code: 'GL', label: 'Greenland', phone: '299' },
  { code: 'GM', label: 'Gambia', phone: '220' },
  { code: 'GN', label: 'Guinea', phone: '224' },
  { code: 'GP', label: 'Guadeloupe', phone: '590' },
  { code: 'GR', label: 'Greece', phone: '30' },
  { code: 'GT', label: 'Guatemala', phone: '502' },
  { code: 'GU', label: 'Guam', phone: '1-671' },
  { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
  { code: 'GY', label: 'Guyana', phone: '592' },
  { code: 'HK', label: 'Hong Kong', phone: '852' },
  { code: 'HM', label: 'Heard Island and McDonald Islands', phone: '672' },
  { code: 'VA', label: 'Holy See (Vatican City State)', phone: '379' },
  { code: 'HN', label: 'Honduras', phone: '504' },
  { code: 'HT', label: 'Haiti', phone: '509' },
  { code: 'HU', label: 'Hungary', phone: '36' },
  { code: 'ID', label: 'Indonesia', phone: '62' },
  { code: 'IE', label: 'Ireland', phone: '353' },
  { code: 'IL', label: 'Israel', phone: '972' },
  { code: 'IM', label: 'Isle of Man', phone: '44' },
  { code: 'IN', label: 'India', phone: '91' },
  { code: 'IQ', label: 'Iraq', phone: '964' },
  { code: 'IR', label: 'Iran, Islamic Republic of', phone: '98' },
  { code: 'IS', label: 'Iceland', phone: '354' },
  { code: 'IT', label: 'Italy', phone: '39' },
  { code: 'JE', label: 'Jersey', phone: '44' },
  { code: 'JM', label: 'Jamaica', phone: '1-876' },
  { code: 'JO', label: 'Jordan', phone: '962' },
  { code: 'JP', label: 'Japan', phone: '81', suggested: true },
  { code: 'KE', label: 'Kenya', phone: '254' },
  { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
  { code: 'KI', label: 'Kiribati', phone: '686' },
  { code: 'KP', label: "Korea, Democratic People's Republic of", phone: '850' },
  { code: 'KR', label: 'Korea, Republic of', phone: '82' },
  { code: 'XK', label: 'Kosovo', phone: '383' },
  { code: 'KW', label: 'Kuwait', phone: '965' },
  { code: 'KZ', label: 'Kazakhstan', phone: '7' },
  { code: 'LA', label: "Lao People's Democratic Republic", phone: '856' },
  { code: 'LB', label: 'Lebanon', phone: '961' },
  { code: 'LI', label: 'Liechtenstein', phone: '423' },
  { code: 'LR', label: 'Liberia', phone: '231' },
  { code: 'LS', label: 'Lesotho', phone: '266' },
  { code: 'LT', label: 'Lithuania', phone: '370' },
  { code: 'LU', label: 'Luxembourg', phone: '352' },
  { code: 'LV', label: 'Latvia', phone: '371' },
  { code: 'LY', label: 'Libya', phone: '218' },
  { code: 'MA', label: 'Morocco', phone: '212' },
  { code: 'MC', label: 'Monaco', phone: '377' },
  { code: 'MD', label: 'Moldova, Republic of', phone: '373' },
  { code: 'ME', label: 'Montenegro', phone: '382' },
  { code: 'MG', label: 'Madagascar', phone: '261' },
  { code: 'MH', label: 'Marshall Islands', phone: '692' },
  { code: 'MK', label: 'Macedonia, the Former Yugoslav Republic of', phone: '389' },
  { code: 'ML', label: 'Mali', phone: '223' },
  { code: 'MM', label: 'Myanmar', phone: '95' },
  { code: 'YT', label: 'Mayotte', phone: '262' },
  { code: 'MN', label: 'Mongolia', phone: '976' },
  { code: 'MO', label: 'Macao', phone: '853' },
  { code: 'FM', label: 'Micronesia, Federated States of', phone: '691' },
  { code: 'MQ', label: 'Martinique', phone: '596' },
  { code: 'MR', label: 'Mauritania', phone: '222' },
  { code: 'MS', label: 'Montserrat', phone: '1-664' },
  { code: 'MT', label: 'Malta', phone: '356' },
  { code: 'MU', label: 'Mauritius', phone: '230' },
  { code: 'MV', label: 'Maldives', phone: '960' },
  { code: 'MW', label: 'Malawi', phone: '265' },
  { code: 'MX', label: 'Mexico', phone: '52' },
  { code: 'MY', label: 'Malaysia', phone: '60' },
  { code: 'MZ', label: 'Mozambique', phone: '258' },
  { code: 'NA', label: 'Namibia', phone: '264' },
  { code: 'NC', label: 'New Caledonia', phone: '687' },
  { code: 'NE', label: 'Niger', phone: '227' },
  { code: 'NF', label: 'Norfolk Island', phone: '672' },
  { code: 'MP', label: 'Northern Mariana Islands', phone: '1-670' },
  { code: 'NG', label: 'Nigeria', phone: '234' },
  { code: 'NI', label: 'Nicaragua', phone: '505' },
  { code: 'NL', label: 'Netherlands', phone: '31' },
  { code: 'NO', label: 'Norway', phone: '47' },
  { code: 'NP', label: 'Nepal', phone: '977' },
  { code: 'NR', label: 'Nauru', phone: '674' },
  { code: 'NU', label: 'Niue', phone: '683' },
  { code: 'NZ', label: 'New Zealand', phone: '64' },
  { code: 'OM', label: 'Oman', phone: '968' },
  { code: 'PA', label: 'Panama', phone: '507' },
  { code: 'PE', label: 'Peru', phone: '51' },
  { code: 'PG', label: 'Papua New Guinea', phone: '675' },
  { code: 'PH', label: 'Philippines', phone: '63' },
  { code: 'PK', label: 'Pakistan', phone: '92' },
  { code: 'PL', label: 'Poland', phone: '48' },
  { code: 'PN', label: 'Pitcairn', phone: '870' },
  { code: 'PR', label: 'Puerto Rico', phone: '1' },
  { code: 'PS', label: 'Palestine, State of', phone: '970' },
  { code: 'PT', label: 'Portugal', phone: '351' },
  { code: 'PW', label: 'Palau', phone: '680' },
  { code: 'PY', label: 'Paraguay', phone: '595' },
  { code: 'QA', label: 'Qatar', phone: '974' },
  { code: 'RE', label: 'Reunion', phone: '262' },
  { code: 'RO', label: 'Romania', phone: '40' },
  { code: 'RU', label: 'Russian Federation', phone: '7' },
  { code: 'RW', label: 'Rwanda', phone: '250' },
  { code: 'SA', label: 'Saudi Arabia', phone: '966' },
  { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
  { code: 'SH', label: 'Saint Helena', phone: '290' },
  { code: 'KN', label: 'Saint Kitts and Nevis', phone: '1-869' },
  { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
  { code: 'MF', label: 'Saint Martin (French part)', phone: '590' },
  { code: 'PM', label: 'Saint Pierre and Miquelon', phone: '508' },
  { code: 'VC', label: 'Saint Vincent and the Grenadines', phone: '1-784' },
  { code: 'SM', label: 'San Marino', phone: '378' },
  { code: 'ST', label: 'Sao Tome and Principe', phone: '239' },
  { code: 'WS', label: 'Samoa', phone: '685' },
  { code: 'SN', label: 'Senegal', phone: '221' },
  { code: 'RS', label: 'Serbia', phone: '381' },
  { code: 'SC', label: 'Seychelles', phone: '248' },
  { code: 'SL', label: 'Sierra Leone', phone: '232' },
  { code: 'SG', label: 'Singapore', phone: '65' },
  { code: 'SX', label: 'Sint Maarten (Dutch part)', phone: '1-721' },
  { code: 'SB', label: 'Solomon Islands', phone: '677' },
  { code: 'SO', label: 'Somalia', phone: '252' },
  { code: 'ZA', label: 'South Africa', phone: '27' },
  { code: 'SS', label: 'South Sudan', phone: '211' },
  { code: 'GS', label: 'South Georgia and the South Sandwich Islands', phone: '500' },
  { code: 'SI', label: 'Slovenia', phone: '386' },
  { code: 'SK', label: 'Slovakia', phone: '421' },
  { code: 'ES', label: 'Spain', phone: '34' },
  { code: 'LK', label: 'Sri Lanka', phone: '94' },
  { code: 'SD', label: 'Sudan', phone: '249' },
  { code: 'SR', label: 'Suriname', phone: '597' },
  { code: 'SJ', label: 'Svalbard and Jan Mayen', phone: '47' },
  { code: 'SZ', label: 'Swaziland', phone: '268' },
  { code: 'SE', label: 'Sweden', phone: '46' },
  { code: 'CH', label: 'Switzerland', phone: '41' },
  { code: 'SY', label: 'Syrian Arab Republic', phone: '963' },
  { code: 'TW', label: 'Taiwan, Province of China', phone: '886' },
  { code: 'TJ', label: 'Tajikistan', phone: '992' },
  { code: 'TH', label: 'Thailand', phone: '66' },
  { code: 'TL', label: 'Timor-Leste', phone: '670' },
  { code: 'TG', label: 'Togo', phone: '228' },
  { code: 'TK', label: 'Tokelau', phone: '690' },
  { code: 'TO', label: 'Tonga', phone: '676' },
  { code: 'TT', label: 'Trinidad and Tobago', phone: '1-868' },
  { code: 'TN', label: 'Tunisia', phone: '216' },
  { code: 'TC', label: 'Turks and Caicos Islands', phone: '1-649' },
  { code: 'TM', label: 'Turkmenistan', phone: '993' },
  { code: 'TR', label: 'Turkey', phone: '90' },
  { code: 'TV', label: 'Tuvalu', phone: '688' },
  { code: 'TZ', label: 'United Republic of Tanzania', phone: '255' },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'UA', label: 'Ukraine', phone: '380' },
  { code: 'UG', label: 'Uganda', phone: '256' },
  { code: 'US', label: 'United States', phone: '1', suggested: true },
  { code: 'UY', label: 'Uruguay', phone: '598' },
  { code: 'VI', label: 'US Virgin Islands', phone: '1-340' },
  { code: 'UZ', label: 'Uzbekistan', phone: '998' },
  { code: 'VE', label: 'Venezuela', phone: '58' },
  { code: 'VN', label: 'Vietnam', phone: '84' },
  { code: 'VU', label: 'Vanuatu', phone: '678' },
  { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
  { code: 'EH', label: 'Western Sahara', phone: '212' },
  { code: 'YE', label: 'Yemen', phone: '967' },
  { code: 'ZM', label: 'Zambia', phone: '260' },
  { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];