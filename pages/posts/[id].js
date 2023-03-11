import Layout from "@/components/Layout";
import Comment from "@/components/postComments/Comment";
import {
    PostAdminImg,
    PostAuthor,
    PostDate,
    PostTitle,
    TagBtn,
    Tags,
} from "@/components/singlePost/SinglePost.styled";
import {
    PostAction,
    PostActionContainer,
    PostAuthorInfo,
    PostContainer,
    PostContent,
    PostDescription,
    PostMain,
    SingleActionBtn,
    SinglePostBanner,
} from "@/components/styles/Post.styled";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";

export default function Post({ post }) {
    const router = useRouter();
    const { id } = router.query;

    const {
        title,
        author,
        publishedAt,
        tags,
        Likes,
        total_comments,
        avatar,
        description,
    } = post?.data.attributes || {};
    console.log(post);

    let tagContent = null;
    if (tags?.length > 0) {
        tagContent = tags.map((tag) => (
            <TagBtn key={tag.id}># {tag.text}</TagBtn>
        ));
    }
    return (
        <Layout>
            <PostContainer>
                <PostActionContainer>
                    <PostAction>
                        <SingleActionBtn>
                            <div>
                                <AiOutlineHeart />
                            </div>
                            <span>{Likes}</span>
                        </SingleActionBtn>
                        <SingleActionBtn>
                            <div>
                                <BiComment />
                            </div>
                            <span>{total_comments}</span>
                        </SingleActionBtn>
                    </PostAction>
                </PostActionContainer>
                <PostMain>
                    <SinglePostBanner>
                        {/* <Image
                            src="/pic03.jpg"
                            alt="post_banner"
                            objectFit="contain"
                            height={300}
                            width={800}
                        /> */}
                        <img
                            src={`http://localhost:1337${avatar?.data?.[0]?.attributes?.formats?.large?.url}`}
                            alt="bannerImg"
                        />
                    </SinglePostBanner>
                    <PostContent>
                        <PostAdminImg>
                            <Image
                                src="/mypic.jpeg"
                                alt="mypic"
                                width={32}
                                height={32}
                            />
                            <div>
                                <PostAuthor>{author}</PostAuthor>
                                <PostDate>
                                    {moment(publishedAt).format("MMM Do")} (
                                    {moment(publishedAt, "YYYYMMDD").fromNow()}){" "}
                                </PostDate>
                            </div>
                        </PostAdminImg>
                        <PostTitle>{title}</PostTitle>
                        <Tags>{tagContent}</Tags>
                        <PostDescription>
                            <p>{description}</p>
                        </PostDescription>
                    </PostContent>
                    {/* comment section  */}
                    <Comment postId={id} />
                </PostMain>
                <PostAuthorInfo>{/* TODO work */}</PostAuthorInfo>
            </PostContainer>
        </Layout>
    );
}

export async function getStaticPaths() {
    // When this is true (in preview environments) don't
    // prerender any static pages
    // (faster builds, but slower initial page load)
    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
            paths: [],
            fallback: "blocking",
        };
    }

    // Call an external API endpoint to get posts
    const res = await fetch("http://localhost:1337/api/posts");
    const posts = await res.json();

    // Get the paths we want to prerender based on posts
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    const paths = posts?.data.map((post) => ({
        params: { id: post.id.toString() },
    }));

    // { fallback: false } means other routes should 404
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const id = params.id;

    const response = await fetch(
        `http://localhost:1337/api/posts/${id}?populate=*`
    );
    const post = await response.json();

    return {
        props: { post }, // will be passed to the page component as props
    };
}
