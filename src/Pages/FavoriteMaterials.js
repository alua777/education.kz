import Card from '../Components/Card';
import Filter from '../Components/Filter';
import FavoritesList from '../Components/FavoritesList';

function FavoriteMaterials() {
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
          <FavoritesList/>
        </div>
      </div>
    </div>
  );
}

export default FavoriteMaterials;
