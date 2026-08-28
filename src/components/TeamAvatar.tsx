interface TeamAvatarProps {
  name: string;
}

/** Placeholder portret met initialen, in huisstijl. Wordt gebruikt zolang er
 *  nog geen echte portretfoto van een teamlid is aangeleverd. */
export function TeamAvatar({ name }: TeamAvatarProps) {
  const initials = name
    .split(" ")
    .filter((part) => part.length > 2 || /^[A-Z]/.test(part))
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className="flex aspect-square w-full items-center justify-center bg-primary"
      role="img"
      aria-label={`Portret van ${name} volgt binnenkort`}
    >
      <span className="font-display text-6xl tracking-wide text-accent">{initials}</span>
    </div>
  );
}
