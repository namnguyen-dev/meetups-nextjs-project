import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
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

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
