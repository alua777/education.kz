import Card from '../Components/Card';
import Filter from '../Components/Filter';
import VerifiedList from '../Components/ListVerified';

function Home() {
  return (
    <div>
      <div>
        {/* Content above the list */}
      </div>
      <div style={{ marginTop: '20px' }}> 
        <div>
          <Filter/>
        </div>
        <div style={{ marginTop: '20px' }}>
          <VerifiedList/>
        </div>
      </div>
    </div>
  );
}

export default Home;
