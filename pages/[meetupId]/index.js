import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { Fragment } from 'react';
import Head from 'next/head';

const MeetupDetails = props => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        id={props.meetupData.id}
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
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
    fallback: 'blocking',
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
        description: selectedMeetup.description,
      },
    },
  };
}
export default MeetupDetails;
