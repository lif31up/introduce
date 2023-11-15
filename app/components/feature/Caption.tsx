export default function Caption({children}:{children:string}){
	return(
	<div className={"_content p-4 custom-font-gothic-a1-thin custom-mobile-disable"}>
		<p><div className={"inline-block bg-white custom-sphere h-2 w-2 mr-2"}/>{children}</p>
	</div>
	);
}