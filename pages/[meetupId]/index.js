import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = props => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://Nam-Nguyen-1990:vrmRmr4M3uljj9ij@cluster0.wnjfl.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => {
      return {
        params: {
          meetupId: meetup._id.toString(),
        },
      };
    }),
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  // fetch data from API
  const client = await MongoClient.connect(
    'mongodb+srv://Nam-Nguyen-1990:vrmRmr4M3uljj9ij@cluster0.wnjfl.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        decription: selectedMeetup.description,
      },
    },
  };
}
export default MeetupDetails;
