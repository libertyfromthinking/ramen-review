import styled from 'styled-components';

const Post = ({ url, name }) => {
  return (
    <PostWrapper>
      <PostImage src={url} alt={name} />
      <PostName>{name}</PostName>
    </PostWrapper>
  );
};

const PostWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-basis: 10%;
  border: 1px solid #b0afae;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #d4d3d2;
  }
`;

const PostImage = styled.img`
  width: 13rem;
  height: 11rem;
`;

const PostName = styled.span``;
export default Post;
