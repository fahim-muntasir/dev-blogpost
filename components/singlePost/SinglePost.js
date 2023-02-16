import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import {
    MainDiv,
    PostAdminImg,
    PostAuthor,
    PostBanner,
    PostDate,
    PostFooter,
    PostInfo,
    PostTitle,
    TagBtn,
    Tags,
} from "./SinglePost.styled";

export default function SinglePost() {
    return (
        <MainDiv>
            <Link href="/">
                <PostBanner>
                    <Image
                        src="/pic03.jpg"
                        alt="post_banner"
                        objectFit="contain"
                        height={250}
                        width={700}
                    />
                </PostBanner>
                <PostInfo>
                    <PostAdminImg>
                        <Image
                            src="/mypic.jpeg"
                            alt="mypic"
                            width={32}
                            height={32}
                        />
                    </PostAdminImg>
                    <div>
                        <div>
                            <PostAuthor>Fahim muntasir</PostAuthor>
                            <PostDate>3 Feb (2 h ago) </PostDate>
                        </div>
                        <PostTitle ul>
                            Optimizing Functional React Components
                        </PostTitle>
                        <Tags>
                            <TagBtn>#github</TagBtn>
                            <TagBtn>#github</TagBtn>
                            <TagBtn>#github</TagBtn>
                        </Tags>
                        <PostFooter>
                            <TagBtn>
                                <AiOutlineHeart /> 8 Reaction
                            </TagBtn>
                            <TagBtn>
                                <BiComment /> 8 Comments
                            </TagBtn>
                            <span>5 min read</span>
                        </PostFooter>
                    </div>
                </PostInfo>
            </Link>
        </MainDiv>
    );
}
