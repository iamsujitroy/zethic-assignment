import './Brands.css';
import brand_1 from '../../assets/icon/brand1.png'
import brand_2 from '../../assets/icon/brand2.png'
import brand_3 from '../../assets/icon/brand3.png'
import brand_4 from '../../assets/icon/brand4.png'
import brand_5 from '../../assets/icon/brand5.png'

export default function Brands() {
  return (
    <div className='brands'>
        <div className="brands-wrapper">
            <img src={brand_1} alt="" />
            <img src={brand_2} alt="" />
            <img src={brand_3} alt="" />
            <img src={brand_4} alt="" />
            <img src={brand_5} alt="" />
        </div>
    </div>
  )
}
