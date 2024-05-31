import React, { useState } from 'react';
import styled from 'styled-components';
import img from "../../assets/createpostimg.png"

function CreatePost() {
  const [tag, setTag] = useState('');
  const [subtitle, setSubtitle] = useState(-1);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  const handlesubtitleChange = (event) => {
    setSubtitle(Number(event.target.value));
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSave = () => {
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Tag:', tag);
    console.log('Subtitle:', subtitle);
    console.log('Image:', image);
    console.log('Saved');
  };

  const handleCancel = () => {
    window.location.href = '/';
    console.log('Canceled');
  };

  return (
    <Frame>
      <IntroContainer>
        <CreateImg src={img} />
        <Intro> 게시글 작성</Intro>
      </IntroContainer>
    <PostCreateFrame>
      <TopContainer>
        <TagSelectorContainer>
          <SubTitleSelect id="tagSelector" value={tag} onChange={handleTagChange}>
            <option value="">게시글 태그 선택</option>
            <option value="자유게시판">자유게시판</option>
            <option value="질문게시판">질문게시판</option>
            <option value="건의사항">건의사항</option>
            <option value="불편사항">불편사항</option>
          </SubTitleSelect>
        </TagSelectorContainer>
        <CheckboxContainer>
          <StyledSubtitle>
            <StyledInput
              type="radio"
              name="subtitle"
              value={0}
              onChange={handlesubtitleChange}
              checked={subtitle === 0}
            />
            <StyledP>없음</StyledP>
          </StyledSubtitle>
          <StyledSubtitle>
            <StyledInput
              type="radio"
              name="subtitle"
              value={1}
              onChange={handlesubtitleChange}
              checked={subtitle === 1}
            />
            <StyledP>투표</StyledP>
          </StyledSubtitle>
          <StyledSubtitle>
            <StyledInput
              type="radio"
              name="subtitle"
              value={2}
              onChange={handlesubtitleChange}
              checked={subtitle === 2}
            />
            <StyledP>사진</StyledP>
          </StyledSubtitle>
        </CheckboxContainer>
      {subtitle === 2 && (
        <ImageUploadContainer>
          <ImageInput type="file" accept="image/*" onChange={handleImageChange} />
        </ImageUploadContainer>
      )}
      </TopContainer>
      <TitleContainer>
        <TitleInput
          type="text"
          placeholder="제목을 입력해 주세요."
          value={title}
          onChange={handleTitleChange}
        />
      </TitleContainer>
      <Textarea
        placeholder="내용을 입력하세요..."
        value={content}
        onChange={handleContentChange}
      />
      <ButtonContainer>
        <SaveButton type="button" onClick={handleSave}>저장</SaveButton>
        <CancelButton type="button" onClick={handleCancel}>취소</CancelButton>
      </ButtonContainer>
    </PostCreateFrame>
    </Frame>
  );
}

export default CreatePost;

// 프레임
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: auto;
  margin: 0px auto;
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width : 100%;
  height: 100px;
  margin: 20px auto;
  margin-top: 50px;
`

const CreateImg = styled.img`
  width: 80px;
  height: auto;
`

const Intro = styled.div`
  margin-left: 10px;
  font-size: 50px;
  font-weight: bold;
`

const PostCreateFrame = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  width: 800px;
  margin: 20px auto;
`;

// 서브 타이틀과 select 컨테이너
const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

// 
const TagSelectorContainer = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
`;

//서브 타이틀선택
const SubTitleSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-top: 5px;
  outline: none;
`;

// 서브 타이틀
const StyledSubtitle = styled.label`
  display: flex;
  white-space: nowrap;
  margin-right: 50px;
  align-items: center;
  user-select: none;
`;

const StyledP = styled.p`
  margin-left: 0.25rem;
`;

const StyledInput = styled.input`
  border: 1.5px;
  border-radius: 1px;
  width: 30px;
  height: 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 90%;
`;

const TitleInput = styled.input`
  flex: 1;
  padding: 10px;
  padding-top: 15px;
  font-size: 25px;
  border-radius: 4px;
  border: 1px solid #ccc;
  
  
  background-color: #ccc;
  &::placeholder{
    color: #474747;
  }
  margin-right: 10px;
`;

const Textarea = styled.textarea`
  align-self: center;
  width: 100%;
  height: 400px;
  padding: 10px;
  font-size: 18px;
  margin-left: 15px;
  border-radius: 4px;
  border: 1px solid #ffffff;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: 20px;
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  margin-right: 300px;
  background-color: #ccc;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #ccc;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageUploadContainer = styled.div`
  margin-bottom: 20px;
  width: 30%;
`;

const ImageInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
`