import Head from 'next/head';
import { MongoClient } from 'mongodb';
import { Fragment } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://Nam-Nguyen-1990:vrmRmr4M3uljj9ij@cluster0.wnjfl.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => {
        const { title, address, image, description, _id } = meetup;

        return {
          title,
          address,
          image,
          description,
          id: _id.toString(),
        };
      }),
    },
    revalidate: 10,
  };
}

export default HomePage;
