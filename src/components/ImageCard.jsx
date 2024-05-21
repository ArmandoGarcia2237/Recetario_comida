const ImageCard = ({ url, title }) => {
  return (
    <>
      <div className='shadow card text-bg-dark w-25 h-25 p-3'>
        <img src={url} alt={title} className='image-view' />
        <div className='card-header text-center display-7 shadow'>
          <div className='card-title'>
            {title}
          </div>
        </div>
      </div>
    </>

  )
}

export default ImageCard
