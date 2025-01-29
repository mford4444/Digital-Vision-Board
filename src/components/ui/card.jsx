export function Card({ children }) {
    return <div className="p-4 border border-gray-300 rounded-lg shadow-md">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div>{children}</div>;
  }