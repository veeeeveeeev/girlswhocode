 
  const PostWidget = ({
    postId,
    title,
    content,
    picturePath,
    category
  }) => {  
    return (

        
        <div>
        <p dangerouslySetInnerHTML={{ __html: content}} />
        {picturePath && (
          <img
            alt="post"
            className="w-[372px] h-[372px]"
            src={`http://localhost:3001/assets/${picturePath}`}
          />
        )}
        <p className="text-3xl">{title}</p>
      </div>
    );
  };
  
  export default PostWidget;