import "@/styles/Text.css"

const headingStyle = {
  fontSize: "3rem",
  height: "6rem",
  overflow: "hidden",
}
export default function Heading({children}:{children:string}){
  return(
    <h1 className={"mt-8 -mb-8 _heading_regular text-white"} style={headingStyle}>
      {children}
    </h1>
  );
}