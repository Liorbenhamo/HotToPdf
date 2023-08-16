import './App.css'
import {useState} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import logo from "../imges/unnamed.jpg"
function App() {

  const [loader, setLoader] = useState(false);
  const [customerHome, setCustomerHome] = useState("");
  const [creditcardfournum, setCreditCardFourNum] = useState("");
  const [monthprice, setMonthPrice] = useState("");
  const [seasson, setSeasson] = useState("");
  const [memir, setMemir] = useState("");
  const [memirPrice, setMemirPrice] = useState("");
  const [channels, setChannels] = useState("");
  const [channelsPrice, setChannelsPrice] = useState("");
  const [apps, setApps] = useState("");
  const [appsPrice, setAppsPrice] = useState("");
  const [exdate, setExdate] = useState("");

  const downloadPDF = () =>{
    const capture = document.querySelector('.actual-receipt');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }

  return (
    <div className="wrapper">
      <div className="receipt-box">
        <input type="text" placeholder='כתובת' onChange={(e)=>setCustomerHome(e.target.value)}/>
        <input type="text" placeholder='ארבע ספרות אחרונות' onChange={(e)=>setCreditCardFourNum(e.target.value)}/>
        <input type="text" placeholder='מחיר חודשי' onChange={(e)=>setMonthPrice(e.target.value)}/>
        <input type="text" placeholder='עונה' onChange={(e)=>setSeasson(e.target.value)}/>
        <input type="text" placeholder='כמות ממרים' onChange={(e)=>setMemir(e.target.value)}/>
        <input type="text" placeholder='מחיר כולל ממירים' onChange={(e)=>setMemirPrice(e.target.value)}/>
        <input type="text" placeholder='ערוצים ' onChange={(e)=>setChannels(e.target.value)}/>
        <input type="text" placeholder='מחיר ערוצים' onChange={(e)=>setChannelsPrice(e.target.value)}/>
        <input type="text" placeholder='אםליקציות' onChange={(e)=>setApps(e.target.value)}/>
        <input type="text" placeholder='מחיר כולל אפליקציות' onChange={(e)=>setAppsPrice(e.target.value)}/>
        <input type="text" placeholder='תאריך תפוגה של ההצעה' onChange={(e)=>setExdate(e.target.value)}/>

{/* actual receipt */}
<div className="actual-receipt">

  {/* organization logo */}
  <div className="receipt-organization-logo">
    <img alt="logo" src={logo} />
  </div>

  {/* organization name */}
  <h5>HOT</h5>

  {/* street address and unit number */}
  <h6>
    דרך בר יהודה 9 נשר
  </h6>

  {/* city province postal code */}
  <h6>
  {customerHome}
  </h6>

  {/* email-phone-and-website */}
  <div className="phone-and-website">
    <p>
      <a href={`mailto:anwarhamza919@gmail.com`}>
        liorbenhamo159@gmail.com
      </a>
    </p>
    <p>0528922034</p>
        
    {/* <p>
      <a
        href="https://www.youtube.com/@jsSolutions"
        target="blank"
      >
        https://www.youtube.com/@jsSolutions
      </a>
    </p> */}
        
  </div>

  <div className="colored-row first">
    <span> דרכי תשלום</span>
    
  </div>

  <div className="data-row">
    <span className="font-weight">אשראי</span>
    <span>************{creditcardfournum}</span>
  </div>

  <div className="colored-row">
    <span>תשלום חודשי</span>
  </div>

  <div className="data-row">
    <span className="font-weight"> תשלום חודשי מובטח לשנה</span>
    <span>
      ₪
      {' '}
      {monthprice}
    </span>
  </div>

  <div className="colored-row">
    <span>הטבת {seasson} למשתמשים חדשים</span>
    
  </div>

  <div className="data-row border-bottom">
    <span>
      <span className="font-weight">
       מחיר הטבה
      </span>
      {' '}
     {memirPrice}
    </span>
    <span>
      <span className="font-weight">
      כמות ממירים
        {' '}

      </span>
      {' '}
     {memir}
    </span>
  </div>

  <div className="data-row border-bottom">
    <span>
      <span className="font-weight">
        מחיר
        {' '}
        
      </span>
      {' '}
    {channelsPrice}
    </span>
    <span>
      <span className="font-weight">
      חבילות ערוצים
      </span>
      {' '}
     {channels}
    </span>
  </div>
  <div className="data-row border-bottom">
    <span>
      <span className="font-weight">
       מחיר
        {' '}
      </span>
      {' '}
     {appsPrice}
    </span>
    <span>
      <span className="font-weight">
        כמות אפליקציות
        {' '}
       
      </span>
      {' '}
     {apps}
    </span>
  </div>
  <div className="data-row2 border-bottom">
    <span className="font-weight">
      הצעת מחיר זה תקפה עד ל {exdate}
    </span>
    <span />
  </div>
  <div className="colored-row">
    <span>תודה שבחרת הוט תמיד בשבילך</span>
    <span />
  </div>

</div>
{/* end of actual receipt */}

{/* receipt action */}
<div className="receipt-actions-div">
  <div className="actions-right">
    <button
      className="receipt-modal-download-button"
      onClick={downloadPDF}
      disabled={!(loader===false)}
    >
      {loader?(
        <span>Downloading</span>
      ):(
        <span>Download</span>
      )}

    </button> 
  </div>
</div>

</div>
    </div>
  )
}

export default App
