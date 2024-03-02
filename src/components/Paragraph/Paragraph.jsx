import './Paragraph.css';

function Paragraph({ children, size = 'sm' }) {
  const className = 'paragraph paragraph--' + size;
  
  return <p className={className}>{children}</p>;
}

export default Paragraph;