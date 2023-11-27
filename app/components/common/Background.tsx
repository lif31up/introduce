import Image from "next/image";

export default function Background({}):JSX.Element{
  return(
    <Image src={"/assets/images/background.webp"} alt={"background"}
           width={0} height={0}
           sizes={"100vw"}
           className={"fixed left-0 top-0 -z-50 object-center object-cover h-full w-full"}/>
  )
}