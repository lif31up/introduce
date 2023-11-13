import AnimationContainerTable from "@/app/components/common/AnimationContainerTable";
import Quote from "@/app/components/feature/Quote";

export default function Lab({}){
	return(
	<AnimationContainerTable id={"quotes--0"} animation={"custom-anime-swash-in"}>
		<Quote src={"/assets/images/neal_stephenson.jpg"} h1={"Snow Crash"}
					 p={"See, the world is full of things more powerful than us. But if you know how to catch a ride, you can go places,"}/>
		<Quote src={"/assets/images/william_gibson.webp"} h1={"Neuromancer"}
					 p={"When the past is always with you, it may as well be present; and if it is present, it will be future as well."}/>
		<Quote src={"/assets/images/j_g_ballard.jpg"} h1={"The Drowned World"}
					 p={"The brief span of an individual life is misleading. Each one of us is as old as the entire biological kingdom, and our bloodstreams are tributaries of the great sea of its total memory. The uterine odyssey of the growing foetus recapitulates the entire evolutionary past, and its central nervous system is a coded time scale, each nexus of neurones and each spinal level marking a symbolic station, a unit of neuronic time."}/>
	</AnimationContainerTable>
	);
}