import './App.css';
import logo from './components/images/logo.png';
import icon1 from './components/images/icon-1.svg';
import icon2 from './components/images/icon-2.svg';
import icon3 from './components/images/icon-3.svg';
import icon4 from './components/images/icon-4.svg';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from './components/Slider';

function App() {
  const [code, setCode] = useState('+00');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [grade, setGrade] = useState('');
  const [pc, setPc] = useState('');
  useEffect(() => {
    axios.get('https://ipapi.co/json/').then((response) => {
        let data = response.data;
        setCode(data.country_calling_code)
    }).catch((error) => {
        console.log(error);
    });
  },[]);
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  }
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(code, phoneNumber, grade, pc)
  }
  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  }
  return (
    <>
    <div className="landing__top">
    <div className="landing__top-container">
              <img className="landing__logo" alt="BrightChamps logo" src={logo}/>
            <div className="landing__banner-wrap">
        <div className="landing__banner">
          <span className="landing__banner-label hide_on_mobile">Grade: 1 to 10</span>
          <h1 className="heading landing__heading hide_on_mobile">Make your kid a Tech Leader</h1>
        </div>
        <div className="landing__form-wrap">
            <form method="post" className="landing__form" id="landing-form">

                              <div className="progress-container">
                  <div className="progress "></div>
                  <div className="circle active"><span>1</span></div>
                  <div className="circle "><span>2</span></div>
                  <div className="circle "><span>3</span></div>
                </div>
              
              <h3 className="h3">Book Now and Get Certified</h3>

              <div id="landing-form-fields">
                <input name="step" id="step" type="hidden" value="SECOND" data-type="hidden"/>
                <div className="input input--title2">
                  <label className="input__label input__label--title code_sliding_label">Country</label>
                  <select value={code} onChange={handleCodeChange} id="countrycode" name="countrycode" className="input__field input__dropdown " required>
                    <option> </option>
                    <option value='+91'>+91</option>   <option value='+971'>+971</option>   <option value='+968'>+968</option>   <option value='+966'>+966</option>   <option value='+962'>+962</option>   <option value='+974'>+974</option>   <option value='+367'>+367</option>   <option value='+965'>+965</option>   <option value='+30'>+30</option>   <option value='+973'>+973</option>   <option value='+372'>+372</option>   <option value='+370'>+370</option>   <option value='+371'>+371</option>   <option value='+90'>+90</option>   <option value='+62'>+62</option>   <option value='+60'>+60</option>   <option value='+63'>+63</option>   <option value='+94'>+94</option>   <option value='+1'>+1</option>   <option value='+84'>+84</option>   <option value='+66'>+66</option>   <option value='+44'>+44</option>   <option value='+61'>+61</option>   <option value='+64'>+64</option>   <option value='+20'>+20</option>   <option value='+880'>+880</option>   <option value='+82'>+82</option>   <option value='+27'>+27</option>   <option value='+852'>+852</option>   <option value='+49'>+49</option>   <option value='+961'>+961</option>   <option value='+92'>+92</option>   <option value='+212'>+212</option>   <option value='+213'>+213</option>   <option value='+233'>+233</option>   <option value='+95'>+95</option>   <option value='+234'>+234</option>   <option value='+977'>+977</option>   <option value='+960'>+960</option>   <option value='+254'>+254</option>   <option value='+353'>+353</option>   <option value='+81'>+81</option>   <option value='+52'>+52</option>   <option value='+355'>+355</option>   <option value='+376'>+376</option>   <option value='+374'>+374</option>   <option value='+43'>+43</option>   <option value='+994'>+994</option>   <option value='+375'>+375</option>   <option value='+32'>+32</option>   <option value='+359'>+359</option>   <option value='+385'>+385</option>   <option value='+45'>+45</option>   <option value='+358'>+358</option>   <option value='+33'>+33</option>   <option value='+995'>+995</option>   <option value='+36'>+36</option>   <option value='+354'>+354</option>   <option value='+39'>+39</option>   <option value='+423'>+423</option>   <option value='+352'>+352</option>   <option value='+356'>+356</option>   <option value='+373'>+373</option>   <option value='+377'>+377</option>   <option value='+382'>+382</option>   <option value='+31'>+31</option>   <option value='+47'>+47</option>   <option value='+48'>+48</option>   <option value='+351'>+351</option>   <option value='+40'>+40</option>   <option value='+378'>+378</option>   <option value='+381'>+381</option>   <option value='+421'>+421</option>   <option value='+386'>+386</option>   <option value='+34'>+34</option>   <option value='+46'>+46</option>   <option value='+41'>+41</option>   <option value='+380'>+380</option>   <option value='+379'>+379</option>                     </select>
                  <div className="input__msg" id="grade-msg">
                    <i className='fa fa-exclamation-circle'></i>
                    <span className="code_error_msg"></span>
                  </div>
                </div>

                <div className="input input--cname2">
                  <input name="phNo" id="phone" type="number" value={phoneNumber} onChange={handlePhoneChange} className="input__field" pattern="[0-9 ]+" placeholder="" required />
                  {<label className="input__label phone_sliding_label">{phoneNumber.length === 0 && "Parent Mobile No"}</label>}

                  <div className="input__msg" id="computer-msg">
                    <i className='fa fa-exclamation-circle' ></i>
                    <span className="phone_error_msg"></span>
                  </div>
                </div>
                <div className="input" >
                  <label className="input__label input__label--title" >Kid's Grade</label>
                  <br/>
                  <div className="input__radio-group-2">
                    <input onChange={handleGradeChange} required="" type="radio" className="time" id="1" name="grade"  value="1"  style={{display:"none"}} />
                    <label htmlFor="1" className="input__radio-input-22-label">
                      <span className="input__radio-input-22-label--grade">Grade </span>
                      <span className="input__radio-input-22-label--val">1</span>
                    </label>
                  </div>
                  <div className="input__radio-group-2">
                    <input  onChange={handleGradeChange}  required="" type="radio" className="time" id="3" name="grade" value="2-3"  style={{display:"none"}}/>
                    <label htmlFor="3" className="input__radio-input-22-label">
                      <span className="input__radio-input-22-label--grade">Grade </span>
                      <span className="input__radio-input-22-label--val">2-3</span>
                    </label>
                  </div>
                  <div className="input__radio-group-2">
                    <input  onChange={handleGradeChange} required="" type="radio" className="time" id="5" name="grade"  value="4-6"  style={{display:"none"}} />
                    <label htmlFor="5" className="input__radio-input-22-label" >
                      <span className="input__radio-input-22-label--grade">Grade </span>
                      <span className="input__radio-input-22-label--val">4-6</span>
                    </label>
                  </div>
                  <div className="input__radio-group-2">
                    <input  onChange={handleGradeChange}  required="" type="radio" className="time" id="8" name="grade" value="7-9"  style={{display:"none"}}/>
                    <label htmlFor="8" className="input__radio-input-22-label">
                      <span className="input__radio-input-22-label--grade">Grade </span>
                      <span className="input__radio-input-22-label--val">7-9</span>
                    </label>
                  </div>
                  <div className="input__radio-group-2">
                    <input  onChange={handleGradeChange}  required="" type="radio" className="time" id="10" name="grade"  value="10-12"  style={{display:"none"}}/>
                    <label htmlFor="10" className="input__radio-input-22-label">
                      <span className="input__radio-input-22-label--grade">Grade </span>
                      <span className="input__radio-input-22-label--val">10-12</span>
                    </label>
                  </div>
                  <span className="grade_error_msg"><i className='fa fa-exclamation-circle error_icon'></i>Select your grade</span>
                </div>

                <div className="input">
                  <label className="input__label">Do you have laptop / PC at home for className?</label>
                  <div><label>
                      <input onChange={() => setPc('yes')} className="input__radio-input-1"  name="computer" type="radio" value="Yes"/>
                      <span className="input__radio-input-2"></span>
                      <span className="input__radio-label">Yes</span>
                    </label><label>
                      <input onChange={() => setPc('no')}  className="input__radio-input-1"  name="computer" type="radio" value="No"/>
                      <span className="input__radio-input-2"></span>
                      <span className="input__radio-label">No</span>
                    </label></div>
                  <div className="input__msg" id="computer-msg"></div>
                </div>

              </div>
              <button onClick={handleSubmit} type="submit" name="submit" value="submit" className="button button--form-submit landing__cta" id="submitPage1">
                Schedule a Free class
              </button>
            </form>
          </div>
      </div>
    </div>
  </div>
  <Slider/>
    <div className="landing__features">
    <div className="landing__container">
      <h2 className="heading landing__section-heading">Top Features of Our Course</h2>
      <div className="landing__feature-set">
        <div className="landing__feature-item">
          <img src={icon1} alt="World's first &amp; only" className="landing__feature-icon"/>
          <div className="landing__feature-info">
            <div className="landing__feature-title">World's first &amp; only</div>
            <div className="landing__feature-content">
              We offer an all encompassing technology curriculum for kids, covering coding foundation to scientific exploration, and design thinking to robotics
            </div>
          </div>
        </div>
        <div className="landing__feature-item">
          <img src={icon2} alt="Academic excellence quotient" className="landing__feature-icon"/>
          <div className="landing__feature-info">
            <div className="landing__feature-title">Academic excellence quotient</div>
            <div className="landing__feature-content">
              Using our unique and only scientific exploration program, kids will develop in-depth understanding of numerous maths &amp; science concepts
            </div>
          </div>
        </div>
        <div className="landing__feature-item">
          <img src={icon3} alt="Praiseworthy tangible outcomes" className="landing__feature-icon"/>
          <div className="landing__feature-info">
            <div className="landing__feature-title">Unique Hands-on Learning</div>
            <div className="landing__feature-content">
              Kids will develop real life mobile apps, scientific simulation and hardware like tech-entrepreneurs and scientists
            </div>
          </div>
        </div>
        <div className="landing__feature-item">
          <img src={icon4} alt="Top skills in new age" className="landing__feature-icon"/>
          <div className="landing__feature-info">
            <div className="landing__feature-title">Top skills in new age</div>
            <div className="landing__feature-content">
              Kids will advance skills like complex problem solving, critical thinking, creativity, emotional intelligence and cognitive flexibility
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </>
  );
}

export default App;
