import classes from './MeetupDetail.module.css';
const MeetupDetail = ({ id, image, title, address, desciption }) => {
  console.log(image);
  return (
    <section key={id} className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{desciption}</p>
    </section>
  );
};

export default MeetupDetail;
