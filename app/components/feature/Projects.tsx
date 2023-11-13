import AnimationContainerTable from "@/app/components/common/AnimationContainerTable";
import Project from "@/app/components/feature/Project";
export default function Projects({}){
	return(
	<AnimationContainerTable id={"project--0"} animation={"custom-anime-rtl-slide"}>
		<Project h1={"무한 스크롤링"}
						 p={"무한 스크롤을 구현하기 위해 가상의 온라인 쇼핑몰 페이지를 만들어 보았습니다. 이 과정에서 리액트 쿼리를 통한 패칭의 통제와 인터섹션 인터페이스의 사용을 숙달했습니다."}
						 src={"/assets/images/shoppingmall.webp"}
						 href={"https://shopping-mall-rust.vercel.app/"}/>
		<Project h1={"포트폴리오"}
						 p={"현재 보고계시는 페이지입니다. 제가 지금 것 해왔던 프로젝트를 종합하기 위해 만들었습니다. 화려한 에니메이션과 3D 오브젝트 렌더링을 통해 더 인상깊은 사용자 경험을 만들 수 있었습니다."}
						 src={"/assets/images/portfolio.webp"}
						 href={"https://github.com/lif31up/introduce"}/>
		<Project h1={"뉴럴링크"}
						 p={"제가 좋아하는 엔터프라이즈 중 하나인 뉴럴링크의 페이지를 직접 다시 디자인해보았습니다. 이 과정에서 과감한 디자인 표현에 대해 배우고 이를 사용하려면 세삼한 주의가 필요하다는 몇 가지 교훈을 얻었습니다."}
						 src={"/assets/images/neuralink.webp"}
						 href={"https://neuralink-redesign.vercel.app/"}/>
		<Project h1={"자료구조"}
						 p={"C언어를 이용해 연결 리스트, 이중 탐색 트리, 그래프, 세트, AVL트리 등을 구현해보았습니다. 프로그래밍 언어에 대한 전반적인 지식과 감각을 잡는데 큰 도움을 준 프로젝트입니다."}
						 src={"/assets/images/data_structure.webp"}
						 href={"https://github.com/lif31up/Data-Structures-and-Algorithms"}/>
		<Project h1={"웹 디자인 블로그"}
						 p={"웹 디자인에 관해선 한글 자료가 많이 없어 사적인 데이터베이스에 저장하기엔 아깝다고 생각했습니다. 그래서 따로 웹 디자인 블로그를 운영하고 있습니다."}
						 src={"/assets/images/web_design_blog.webp"}
						 href={"https://renoki1s-blog.gitbook.io/undefined/"}/>
		<Project h1={"로고 디자인"}
						 p={"제가 직접 만든 로고 디자인입니다. 이를 통해서 여러 이론이 적용된 수준급의 로고를 만들 수 있게 되었습니다. 직접 드로윙해서 일러스트레이터로 SVG화 한 것입니다."}
						 src={"/assets/images/logo_design.webp"}
						 href={"https://assets.adobe.com/id/urn:aaid:sc:AP:e6c99772-1317-4f1d-a966-0225181f20b1?view=difile"}/>
	</AnimationContainerTable>
	);
}