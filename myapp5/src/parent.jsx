import Child from './child';

export default function Parent() {
  return (
    <div style={{ border: '2px dashed #ccc', padding: '20px', marginTop: '10px' }}>
      <h2>Parent Component</h2>
      <p style={{ color: '#666' }}>I do not read or pass the user prop directly.</p>
      <Child />
    </div>
  );
}
