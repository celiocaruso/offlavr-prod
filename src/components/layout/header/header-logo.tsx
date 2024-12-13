interface HeaderLogoProps {
  src: string;
  alt: string;
}

export function HeaderLogo({ src, alt }: HeaderLogoProps) {
  return (
    <div className="flex-shrink-0 flex items-center">
      <img
        className="h-12 w-auto" // Increased from h-8 to h-12
        src={src}
        alt={alt}
      />
    </div>
  );
}