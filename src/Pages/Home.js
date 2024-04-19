
import Filter from '../Components/Filter';
import List from '../Components/List';

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
        <div style={{ marginTop: '50px' }}>
          <List/>
        </div>
      </div>
    </div>
  );
}

export default Home;
