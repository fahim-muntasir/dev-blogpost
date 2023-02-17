import Layout from "@/components/Layout";
import CommentLists from "@/components/postComments/CommentLists";
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
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";

export default function post() {
    return (
        <Layout>
            <PostContainer>
                <PostActionContainer>
                    <PostAction>
                        <SingleActionBtn>
                            <div>
                                <AiOutlineHeart />
                            </div>
                            <span>10</span>
                        </SingleActionBtn>
                        <SingleActionBtn>
                            <div>
                                <BiComment />
                            </div>
                            <span>10</span>
                        </SingleActionBtn>
                    </PostAction>
                </PostActionContainer>
                <PostMain>
                    <SinglePostBanner>
                        <Image
                            src="/pic03.jpg"
                            alt="post_banner"
                            objectFit="contain"
                            height={300}
                            width={800}
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
                                <PostAuthor>Fahim muntasir</PostAuthor>
                                <PostDate>3 Feb (2 h ago) </PostDate>
                            </div>
                        </PostAdminImg>
                        <PostTitle>
                            Optimizing Functional React Components
                        </PostTitle>
                        <Tags>
                            <TagBtn>#github</TagBtn>
                            <TagBtn>#github</TagBtn>
                            <TagBtn>#github</TagBtn>
                        </Tags>
                        <PostDescription>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quaerat laudantium iusto
                                accusantium magnam blanditiis, iure recusandae
                                optio reprehenderit possimus praesentium
                                expedita delectus tenetur natus distinctio
                                facilis dolores error. Consequatur id dolorem
                                cupiditate possimus soluta itaque voluptatum
                                corporis, distinctio labore amet officiis atque
                                deleniti, minima voluptatem impedit facere
                                debitis enim delectus, repellendus perferendis
                                ipsum! Atque deleniti, veniam deserunt a sequi
                                cupiditate facere voluptate dolores ut est
                                dolore debitis tenetur dignissimos suscipit
                                iusto ex aspernatur omnis possimus vitae modi!
                                Aspernatur explicabo, iste dolorum qui
                                temporibus sequi vel odit laborum recusandae
                                excepturi aperiam. Neque provident eius nisi
                                molestias quam dolorum unde voluptas tenetur?
                            </p>
                        </PostDescription>
                    </PostContent>
                    {/* comment section  */}
                    <CommentLists />
                </PostMain>
                <PostAuthorInfo>{/* TODO work */}</PostAuthorInfo>
            </PostContainer>
        </Layout>
    );
}
