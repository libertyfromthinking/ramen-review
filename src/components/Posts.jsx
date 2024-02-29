import styled from 'styled-components';
import shinramen from '../assets/shinramen.webp';
import Post from './Post';

const dummy = { url: shinramen, name: '신라면' };

const Posts = () => {
  const posts = [
    dummy,
    dummy,
    dummy,
    dummy,
    dummy,
    dummy,
    dummy,
    dummy,
    dummy,
    dummy,
  ];

  return (
    <PostsWrapper>
      {posts.map(({ url, name }) => (
        <Post url={url} name={name} />
      ))}
    </PostsWrapper>
  );
};

const PostsWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  /* flex-gap: 10px; */
`;

export default Posts;
