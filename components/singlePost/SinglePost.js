import moment from "moment/moment";
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

export default function SinglePost({ data, id }) {
    const { title, author, publishedAt, tags, Likes, total_comments, avatar } =
        data || {};

    let tagContent = null;
    if (tags?.length > 0) {
        tagContent = tags.map((tag) => (
            <TagBtn key={tag.id}># {tag.text}</TagBtn>
        ));
    }

    return (
        <MainDiv>
            <Link href={`/posts/${id}`}>
                <PostBanner>
                    {/* <Image
                        src={`${avatar?.data?.[0]?.attributes?.formats?.large?.url}`}
                        alt="post_banner"
                        objectFit="contain"
                        height={250}
                        width={700}
                    /> */}
                    <img
                        src={`http://localhost:1337${avatar?.data?.[0]?.attributes?.formats?.large?.url}`}
                        alt="bannerImg"
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
                            <PostAuthor>{author}</PostAuthor>
                            <PostDate>
                                {moment(publishedAt).format("MMM Do")} (
                                {moment(publishedAt, "YYYYMMDD").fromNow()})
                            </PostDate>
                        </div>
                        <PostTitle ul>{title}</PostTitle>
                        <Tags>{tagContent}</Tags>
                        <PostFooter>
                            <TagBtn>
                                <AiOutlineHeart /> {Likes} Reaction
                            </TagBtn>
                            <TagBtn>
                                <BiComment /> {total_comments} Comments
                            </TagBtn>
                            <span>5 min read</span>
                        </PostFooter>
                    </div>
                </PostInfo>
            </Link>
        </MainDiv>
    );
}
