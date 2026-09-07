export default function FilterSidebar({ filters, onFiltersChange, options }) {
  function toggle(type, value) {
    const next = { ...filters, [type]: filters[type].includes(value) ? filters[type].filter(x => x !== value) : [...filters[type], value] };
    onFiltersChange(next);
  }

  return (
    <aside className="h-fit rounded-3xl bg-[#1f4d3f] p-6 shadow-xl lg:sticky lg:top-28">
      {options.map(group => (
        <div key={group.key} className="mb-7 last:mb-0">
          <h2 className="mb-4 text-xl font-bold">{group.title}</h2>
          <div className="space-y-3">
            {group.values.map(value => (
              <label key={value} className="flex cursor-pointer items-center gap-3 text-sm">
                <input type="checkbox" checked={filters[group.key].includes(value)} onChange={() => toggle(group.key, value)} className="h-4 w-4 accent-[#68d9c4]" />
                <span>{value}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={() => onFiltersChange({course: [], level: [], language: []})} className="mt-2 text-sm font-semibold text-[#68d9c4] hover:underline">Clear filters</button>
    </aside>
  );
}
