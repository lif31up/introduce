import "@/styles/Footer.css";
import Link from "next/link";
export default function Footer({}){
	return(
	<div className={"footer"}>
		<div className={"my-6"}>
			<h1 className={"text-2xl"}>리포지토리</h1>
			<Link className={"block"} href={"https://github.com/lif31up/introduce"}>웹 포트폴리오</Link>
			<Link className={"block"} href={"https://github.com/lif31up/shopping-mall"}>쇼핑몰</Link>
			<Link className={"block"} href={"https://github.com/lif31up/neuralink-redesign"}>뉴럴링크</Link>
			<Link className={"block"} href={"https://github.com/lif31up/Data-Structures-and-Algorithms"}>자료구조</Link>
			<Link className={"block"} href={"https://github.com/lif31up/Discord-Chat-bot"}>디스코드 챗 봇</Link>
		</div>
		<div className={"my-6"}>
			<h1 className={"text-2xl"}>다른 주소들</h1>
			<Link className={"block"} href={"https://open.spotify.com/user/pcsyqo1bjc3yqbgd0rvwwske2?si=3716732a415e4779"}>Spotify</Link>
			<Link className={"block"} href={"https://github.com/lif31up/shopping-mall"}>BeHence</Link>
		</div>
		<div className={"my-6"}>
			<h1 className={"text-2xl"}>연락하기</h1>
			<Link className={"block"} href={"mailto:nulranlcns9991@gmail.com"}>이메일</Link>
			<Link className={"block"} href={"https://join.slack.com/t/personalspace-hng4971/shared_invite/zt-25whyi2gn-4QPq8CLXi_GKD3qjNZSV0w"}>슬랙</Link>
		</div>
		<Link className={"absolute right-8 bottom-8 bg-white text-black custom-rounded custom-desktop-disable"} href={"#top"}>올라가기⤴</Link>
	</div>
	);
}