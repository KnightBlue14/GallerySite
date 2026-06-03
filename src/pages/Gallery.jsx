import './Gallery.css';

const imageData = [
  { id: 1, src: 'https://picsum.photos/seed/1/600/400', title: 'Sample 1', description: 'Sample Image 1', meta: '1' },
  { id: 2, src: 'https://picsum.photos/seed/2/600/400', title: 'Sample 2', description: 'Sample Image 2', meta: '2' },
  { id: 3, src: 'https://picsum.photos/seed/3/600/400', title: 'Sample 3', description: 'Sample 3', meta: '3' },
  { id: 4, src: 'src/pages/DioDreamEvil.png', title: 'Dio', description: 'Dream Evil', meta: '1987' },
  { id: 5, src: 'src/pages/ELO_OotB.png', title: 'ELO', description: 'Out of the Blue', meta: '1977' },
  { id: 6, src: 'src/pages/albumoftheyear.png', title: 'Pink Floyd', description: 'Dark Side of the Moon', meta: '1973' },
];

function Gallery() {
  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-grid">
        {imageData.map((item) => (
          <div key={item.id} className="image-card">
            <div className="image-background" style={{ backgroundImage: `url(${item.src})` }} />
            <div className="image-overlay">
              <div className="popup-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="meta-info">{item.meta}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;