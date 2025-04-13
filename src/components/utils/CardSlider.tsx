import '../../styles/CardSlider.css';

export const CardSlider = () => {
  return (
    <div
      className="slider"
      style={{
        '--width': '200px',
        '--height': '200px',
        '--quantity': '6', // Ajustado para incluir los nuevos items
      } as React.CSSProperties} // Esto asegura que React acepte variables CSS
    >
      <div className="list">
        {/* Item 1 */}
        <div className="item" style={{ '--position': 1 } as React.CSSProperties}>
          <div className="card">
            <p>HELLO THERE</p>
            <p>Am Ashwin.A</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="item" style={{ '--position': 2 } as React.CSSProperties}>
          <div className="card">
            <p>Do follow on Insta</p>
            <p>ashwin_ambar_</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="item" style={{ '--position': 3 } as React.CSSProperties}>
          <div className="card">
            <p>Replace cards with images</p>
            <p>for an image slider</p>
          </div>
        </div>

        {/* Nuevo Item 4 */}
        <div className="item" style={{ '--position': 4 } as React.CSSProperties}>
          <div className="card">
            <p>Explore more designs</p>
            <p>CSS can be fun!</p>
          </div>
        </div>

        {/* Nuevo Item 5 */}
        <div className="item" style={{ '--position': 5 } as React.CSSProperties}>
          <div className="card">
            <p>React components</p>
            <p>Flexible and dynamic</p>
          </div>
        </div>

        {/* Nuevo Item 6 */}
        <div className="item" style={{ '--position': 6 } as React.CSSProperties}>
          <div className="card">
            <p>Creativity never ends</p>
            <p>Code your own way!</p>
          </div>
        </div>
      </div>
    </div>
  );
};