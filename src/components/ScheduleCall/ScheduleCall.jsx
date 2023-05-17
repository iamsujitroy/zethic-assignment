import "./ScheduleCall.css";
import icon1 from '../../assets/icon/start_4_icon_2.svg'
import icon2 from '../../assets/icon/yellow_circle.svg'

export default function ScheduleCall() {
  return (
    <div className="schedule-call">
      <div className="schedule-call-wrapper">
        <img src={icon1} alt="" className="schedule-call-icon1"/>
        <img src={icon2} alt="" className="schedule-call-icon2"/>
        <div className="big-circle" />
        <div className="small-circle" />
        <div className="schedule-call-container">
          <h2>
            Curious about our land plot offerings in Chennai? Contact us today
          </h2>
          <button>Schedule a Call</button>
        </div>
      </div>
    </div>
  );
}
