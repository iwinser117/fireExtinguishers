export default function ProductList({ items, onItemClick, selectedItem, category, groupName }) {
  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isSelected = selectedItem?.id === item.id && selectedItem?.category === category;

        return (
          <label
            key={item.id}
            className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-colors duration-200 ${
              isSelected
                ? "bg-amber-50 border-amber-200 shadow-sm"
                : "bg-white border-slate-200 hover:border-amber-200"
            }`}
          >
            <input
              type="radio"
              name={groupName}
              className="h-4 w-4 accent-amber-600"
              checked={isSelected}
              onChange={() => onItemClick(item)}
            />
            <div className="flex-1">
              <p className="capitalize text-slate-900 font-medium leading-tight">{item.name}</p>
              <p className="text-xs text-slate-500">Ver detalles</p>
            </div>
          </label>
        );
      })}
    </div>
  );
}