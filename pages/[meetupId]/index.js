import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = props => {
  return <MeetupDetail props={props.meetupData} />;
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  // fetch data from API
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: { meetupId },
        title: 'First Meetup',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHuiaXbpzIVHWtElYWW8tAFs5lCKIPm7AMviBW0U5R-ZLuHolcF4X5aGT5I29qlC2LVs&usqp=CAU',
        address: 'Bangkok',
        description: 'Meet us in Bangkok',
      },
    },
  };
}
export default MeetupDetails;
