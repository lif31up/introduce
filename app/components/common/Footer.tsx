import "@/styles/Footer.css";
import Link from "next/link";
export default function Footer({}){
	return(
	<>
		<div className={"footer"}>
			<div className={"my-6"}>
				<h1 className={"text-2xl custom-font-gothic-a1-regular"}>리포지토리</h1>
				<Link className={"block custom-font-gothic-a1-thin"} href={"https://github.com/lif31up/introduce"}>웹 포트폴리오</Link>
				<Link className={"block custom-font-gothic-a1-thin"} href={"https://github.com/lif31up/shopping-mall"}>쇼핑몰</Link>
				<Link className={"block custom-font-gothic-a1-thin"} href={"https://github.com/lif31up/neuralink-redesign"}>뉴럴링크</Link>
				<Link className={"block custom-font-gothic-a1-thin"} href={"https://github.com/lif31up/Data-Structures-and-Algorithms"}>자료구조</Link>
				<Link className={"block custom-font-gothic-a1-thin"} href={"https://github.com/lif31up/Discord-Chat-bot"}>디스코드 챗 봇</Link>
			</div>
			<div className={"my-6"}>
				<h1 className={"text-2xl custom-font-gothic-a1-regular"}>다른 주소들</h1>
				<Link className={"block custom-font-gothic-a1-thin"} href={"https://open.spotify.com/user/pcsyqo1bjc3yqbgd0rvwwske2?si=3716732a415e4779"}>스포티파이</Link>
				<Link className={"block custom-font-gothic-a1-thin line-through"} href={""}>비헨스</Link>
			</div>
			<div className={"my-6"}>
				<h1 className={"text-2xl"}>연락하기</h1>
				<Link className={"block custom-font-gothic-a1-thin"} href={"mailto:nulranlcns9991@gmail.com"}>이메일</Link>
				<Link className={"block custom-font-gothic-a1-thin"} href={"https://join.slack.com/t/personalspace-hng4971/shared_invite/zt-25whyi2gn-4QPq8CLXi_GKD3qjNZSV0w"}>슬랙</Link>
			</div>
			<Link className={"block w-fit h-fit custom-link-button custom-desktop-disable bg-white text-black font-bold mt-16"} href={"#top"}>올라가기</Link>
		</div>
		<div className={"custom-footer-col py-4 px-4"}>
			<p className={"custom-font-gothic-a1-thin custom-text-08 text-neutral-400"}>{"This page is not yet fully published after 2023/11/03. 해당 사이트는 2023/11/03에 공개되었으며 아직 완전히 배포된 것은 아닙니다."}</p>
			<p className={"custom-font-gothic-a1-thin custom-text-08 text-neutral-400"}>{"©All elements (except illustration and displayed stack logos) are made by lif31up; and those right is reserved to him. 일러스트와 이미지를 제외한 모든 프로그래밍 요소는 전부 제가 직접 제작한 것입니다."}</p>
		</div>
	</>
	);
}