export default function ProductList({ title, items, onItemClick }) {
    return (
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <ul className="ml-4 list-disc">
          {items.map((item) => (
            <li key={item.id} className="m-2">
              <button
                className="capitalize hover:text-blue-900 focus:outline-none text-left"
                onClick={() => onItemClick(item)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }