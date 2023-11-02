import Image from "next/image";
interface ProjectProps {h1:string,p:string,src:string}
export default function Project({h1,p,src}:ProjectProps){
	return(
	<div className={"flex items-center my-4"}>
		<div className={"w-16 h-16 relative bg-white rounded-2xl"}>
			<Image src={src} alt={"img"} layout={"fill"} objectPosition={"center"} objectFit={"cover"}/>
		</div>
		<div className={"ml-4 h-fit"}>
			<h1 className={"text-white"}>{h1}</h1>
			<p className={"custom-text-075"}>{p}</p>
		</div>
	</div>
	);
}