export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="proj-imgbx">
      <img src={imgUrl} className="img-project" />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  )
}
