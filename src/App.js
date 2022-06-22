import './App.css';
import './Rwd.css';

import {useState} from 'react';

function App() {
 const [centimeter, setCentimeter] = useState("0");
 const [inch, setinch] = useState("0");
 const [status, setStatus] = useState(true);
  const handleCentimeter = (e)=> {
    setCentimeter(e.target.value);
  }
  const handelInch = (e) => {
    e.preventDefault();
    setinch(centimeter / 2.54);
  }
  const handelSubmit = () => {
    
  }
  const resetInput = () => {
    setCentimeter("0");
    setinch("0");
  }
  const switchInput = () => {
    setStatus(!status);
  }
  return (
     <div className='App'>
      <h1 className='title-text text-center text-white my-0 py-1'>단위환산</h1>
      <p className='info'>cm에서 inch로 바꾸는 앱</p>
      <div className="form-wrap my-1">
        <form onSubmit={handelSubmit}>
          <div className="input-wrap">
            <label>
              <input type="number" value={centimeter} onChange={handleCentimeter} placeholder="센티미터(cm)를 입력하세요" disabled={!status} />cm
              </label>
            <label>
              <input type="number" value={inch} onChange={handelInch} placeholder="인치(inch)로 환산됩니다." disabled={status} />inch
              </label>
            <input type="submit" value="환산하기" />
            <input type="reset" onClick={resetInput} value="초기화" />
            <input type="button" onClick={switchInput} value="입력반전" />
          </div>
        </form>
      </div>
      <p className='owner text-center text-white py-1 fixed bottom0 w100'>&copy; hanul.</p>
     </div>
  );
}

export default App;
