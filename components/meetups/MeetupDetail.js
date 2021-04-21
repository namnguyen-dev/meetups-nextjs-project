import classes from './MeetupDetail.module.css';
const MeetupDetail = ({ id, image, title, address, description }) => {
  return (
    <section key={id} className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
