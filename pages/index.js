import MeetupList from '../components/meetups/MeetupList';

export const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHuiaXbpzIVHWtElYWW8tAFs5lCKIPm7AMviBW0U5R-ZLuHolcF4X5aGT5I29qlC2LVs&usqp=CAU',
    address: 'Bangkok',
    description: 'Meet us in Bangkok',
  },
  {
    id: 'm2',
    title: '2nd Meetup',
    image:
      'https://content.phuket101.net/wp-content/uploads/20180818185539/phuket-on-budget1.jpg',
    address: 'Phuket',
    description: 'Meet us in Phuket',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}


// export async function getServerSideProps(context){
//   const req = contetx.req
//   const res = contetx.res
//   // fetch data from an API
//   return {
//     props:{
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
