import './ProjectCard.css';

export default function ProjectCard({ thumbnail, description, price, area }) {
  return (
    <div className='project-card'>
        <div className="project-card-thumbnail">
            <img src={thumbnail} alt="" />
        </div>
        <p className='project-card-description'>{description}</p>
        <div className="project-card-details">
            <div className='project-card-price'>${price}</div>
            <div className='project-card-area'>{area} sqft</div>
        </div>
        
    </div>
  )
}
