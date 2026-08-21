import clsx from "clsx";

const DEFAULT_NAV_ITEMS = {
  "/": { name: "home" },
  "/works": { name: "works" },
  "/blog": { name: "blog" },
  "/about": { name: "about" },
};

export function MorphicNavbar({
  items = DEFAULT_NAV_ITEMS,
  activePath,
  onNavigate,
  className,
}) {
  const isActiveLink = (path) => activePath === path;

  return (
    <nav className={clsx("mx-auto max-w-4xl px-4 py-2", className)}>
      <div className="flex items-center justify-center">
        <div className="glass flex items-center justify-between overflow-hidden rounded-xl">
          {Object.entries(items).map(([path, { name }], index, array) => {
            const isActive = isActiveLink(path);
            const isFirst = index === 0;
            const isLast = index === array.length - 1;
            const prevPath = index > 0 ? array[index - 1][0] : null;
            const nextPath =
              index < array.length - 1 ? array[index + 1][0] : null;

            return (
              <a
                className={clsx(
                  "flex items-center justify-center bg-zinc-800/80 p-1.5 px-4 text-sm text-white/80 transition-all duration-300",
                  isActive
                    ? "mx-2 rounded-xl bg-linear-to-r from-yellow-400 to-orange-500 text-sm font-semibold text-zinc-950"
                    : clsx(
                        (isActiveLink(prevPath || "") || isFirst) &&
                          "rounded-l-xl",
                        (isActiveLink(nextPath || "") || isLast) &&
                          "rounded-r-xl"
                      )
                )}
                href={path}
                key={path}
                onClick={() => onNavigate?.(path)}
              >
                {name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default MorphicNavbar;
