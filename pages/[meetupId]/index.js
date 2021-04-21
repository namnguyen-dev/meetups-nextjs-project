import MeetupDetail from '../../components/meetups/MeetupDetail';
import { DUMMY_MEETUPS } from '../index';

const MeetupDetails = () => {
  return <MeetupDetail props = {DUMMY_MEETUPS[0]} />;
};

export default MeetupDetails;
