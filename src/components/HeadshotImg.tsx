interface HeadshotImgProps {
  src: string;
  className?: string;
  objectPosition?: string;
}

const HeadshotImg = ({ src, className, objectPosition = "center" }: HeadshotImgProps) => {
  return (
    <img
      src={src}
      alt="Headshot"
      className={`rounded-full object-cover ${className}`}
      style={{ objectPosition }}
    />
  )
}

export default HeadshotImg