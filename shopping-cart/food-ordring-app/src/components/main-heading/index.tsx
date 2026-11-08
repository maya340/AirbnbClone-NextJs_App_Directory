
function MainHeading({title,subtitle}:{title:string,subtitle:string}) {
  return (
    <>
    <span className="text-accent uppercase font-semibold leading-4">
        {subtitle}
    </span>
    <h2 className="text-4xl font-bold italic text-primary">{title}</h2>
    </>
  )
}

export default MainHeading