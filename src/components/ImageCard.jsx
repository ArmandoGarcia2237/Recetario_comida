const ImageCard = ({ url, title }) => {
  return (
    <>
      <div className='shadow container mb-2 col-md-2 p-2 m-1 card card-body text-black'>
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
